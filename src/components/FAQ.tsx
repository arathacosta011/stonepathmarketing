import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What kinds of businesses do you work with?",
    a: "We work with e-commerce brands, local service businesses, real estate professionals, health and wellness companies, and any business that sells online or needs more leads. If you have a product or service worth promoting, we can help.",
  },
  {
    q: "Do you only run Meta ads?",
    a: "Meta (Facebook and Instagram) advertising is our core specialty — it is where we deliver the strongest results. We also build high-converting websites and landing pages that work hand-in-hand with your ad campaigns to maximize conversions.",
  },
  {
    q: "Are the websites fully AI-generated?",
    a: "No. We use AI tools to accelerate our workflow — things like layout drafting, content ideation, and image optimization. But every website is custom-designed, hand-polished, and built with conversion strategy in mind. Nothing ships without human review.",
  },
  {
    q: "Can you improve my existing website instead of building a new one?",
    a: "Absolutely. We do full redesigns as well as targeted improvements — faster load times, better mobile experience, stronger calls to action, and updated visuals. We will assess what you have and recommend the smartest path forward.",
  },
  {
    q: "What happens after I reach out?",
    a: "We will review your message, look at your current setup, and schedule a quick call to discuss your goals. From there, we will put together a clear plan with pricing and next steps. No pressure — just a straightforward conversation about what growth looks like for your business.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            FAQ
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Common <span className="text-gradient">Questions</span>
          </h2>
        </div>
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border rounded-xl px-6 bg-card"
              >
                <AccordionTrigger className="text-left font-display text-base font-semibold hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;