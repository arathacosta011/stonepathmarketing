const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const SLACK_GATEWAY_URL = 'https://connector-gateway.lovable.dev/slack/api';

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, company, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const results = { email: false, slack: false };

    // 1. Send email via Resend
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
    if (RESEND_API_KEY) {
      try {
        const res = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: 'onboarding@resend.dev',
            to: ['stonepathexplore@gmail.com'],
            subject: `🔥 New Lead: ${name}`,
            html: `
              <h2>New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Company:</strong> ${company || 'N/A'}</p>
              <hr />
              <p><strong>Message:</strong></p>
              <p>${message}</p>
              <br/>
              <p><em>Reply directly to this lead at ${email}</em></p>
            `,
          }),
        });
        const resBody = await res.text();
        console.log('Resend response:', res.status, resBody);
        if (res.ok) results.email = true;
        else console.error('Resend error:', res.status, resBody);
      } catch (e) {
        console.error('Email send failed:', e);
      }
    }

    // 2. Send Slack notification
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    const SLACK_API_KEY = Deno.env.get('SLACK_API_KEY');
    if (LOVABLE_API_KEY && SLACK_API_KEY) {
      try {
        // Find the #general channel (or first available)
        const channelsRes = await fetch(`${SLACK_GATEWAY_URL}/conversations.list?types=public_channel&limit=100`, {
          headers: {
            'Authorization': `Bearer ${LOVABLE_API_KEY}`,
            'X-Connection-Api-Key': SLACK_API_KEY,
          },
        });
        const channelsData = await channelsRes.json();
        const general = channelsData.channels?.find((c: any) => c.name === 'general');
        const channelId = general?.id || channelsData.channels?.[0]?.id;

        if (channelId) {
          // Join channel first
          await fetch(`${SLACK_GATEWAY_URL}/conversations.join`, {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${LOVABLE_API_KEY}`,
              'X-Connection-Api-Key': SLACK_API_KEY,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ channel: channelId }),
          });
          const slackRes = await fetch(`${SLACK_GATEWAY_URL}/chat.postMessage`, {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${LOVABLE_API_KEY}`,
              'X-Connection-Api-Key': SLACK_API_KEY,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              channel: channelId,
              username: 'StonePath Leads',
              icon_emoji: ':fire:',
              blocks: [
                {
                  type: 'header',
                  text: { type: 'plain_text', text: '🔥 New Lead Incoming!', emoji: true },
                },
                {
                  type: 'section',
                  fields: [
                    { type: 'mrkdwn', text: `*Name:*\n${name}` },
                    { type: 'mrkdwn', text: `*Email:*\n${email}` },
                    { type: 'mrkdwn', text: `*Company:*\n${company || 'N/A'}` },
                  ],
                },
                {
                  type: 'section',
                  text: { type: 'mrkdwn', text: `*Message:*\n>${message}` },
                },
              ],
            }),
          });
          if (slackRes.ok) {
            const slackData = await slackRes.json();
            if (slackData.ok) results.slack = true;
            else console.error('Slack API error:', slackData.error);
          }
        }
      } catch (e) {
        console.error('Slack send failed:', e);
      }
    }

    return new Response(JSON.stringify({ success: true, notifications: results }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
