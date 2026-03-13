import { Monitor, Palette, Zap, ShieldCheck } from "lucide-react";

const features = [
  { icon: Monitor, title: "Custom-Built, Not Templated", desc: "Unlike agencies that slap your logo on a template, we design every page from scratch — tailored to your brand, your audience, and your goals." },
  { icon: Palette, title: "Redesign & Refresh", desc: "Already have a website? We'll modernize your existing site with updated visuals, faster load times, and mobile-first responsiveness — no starting over required." },
  { icon: Zap, title: "Speed That Converts", desc: "Most agency sites load in 5+ seconds. Ours load under 2. Faster sites rank higher on Google and keep visitors from bouncing to competitors." },
  { icon: ShieldCheck, title: "Ongoing Updates & Support", desc: "We don't disappear after launch. From content updates to security patches, we keep your site current, secure, and performing at its best." },
];

const WebDesign = () => {
  return (
    <section id="results" className="py-24 md:py-32 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              Web Design
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Why Our Web Design <span className="text-gradient">Outperforms the Rest</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
              Most agencies hand you a cookie-cutter site and call it done. We build 
              high-performance websites engineered to convert — and we stick around to 
              keep them running flawlessly.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Whether you need a brand-new site or want to <strong className="text-foreground">upgrade your existing website</strong>, 
              we handle everything: redesigns, speed optimization, content refreshes, 
              and ongoing maintenance so your online presence never falls behind.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-gradient-metallic text-primary-foreground font-semibold text-base hover:opacity-90 transition-opacity glow"
            >
              Get a Free Quote
            </a>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="group p-6 rounded-lg bg-card border border-border hover:border-primary/40 transition-colors"
              >
                <div className="w-11 h-11 rounded-md bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <f.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDesign;
