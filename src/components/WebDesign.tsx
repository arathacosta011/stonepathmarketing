import { Monitor, Palette, Zap, ShieldCheck, ArrowRight } from "lucide-react";

const features = [
  { icon: Monitor, title: "Custom-Built, Not Templated", desc: "Every page designed from scratch — tailored to your brand, your audience, and your goals." },
  { icon: Palette, title: "Redesign & Refresh", desc: "Modernize your existing site with updated visuals, faster load times, and mobile-first responsiveness." },
  { icon: Zap, title: "Speed That Converts", desc: "Our sites load under 2 seconds. Faster sites rank higher and keep visitors from bouncing." },
  { icon: ShieldCheck, title: "Ongoing Support", desc: "From content updates to security patches, we keep your site current, secure, and performing." },
];

const WebDesign = () => {
  return (
    <section id="results" className="py-24 md:py-32 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              Web Design
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Why Our Web Design{" "}
              <span className="text-gradient">Outperforms the Rest</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-4 leading-relaxed">
              Most agencies hand you a cookie-cutter site and call it done. We build
              high-performance websites engineered to convert.
            </p>
            <p className="text-muted-foreground text-base sm:text-lg mb-8 leading-relaxed">
              Whether you need a brand-new site or want to{" "}
              <strong className="text-foreground">upgrade your existing website</strong>,
              we handle everything from redesigns to ongoing maintenance.
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg bg-gradient-metallic text-primary-foreground font-semibold text-base hover:opacity-90 transition-all glow"
            >
              Get a Free Quote
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="group p-6 rounded-xl bg-background border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_hsl(270_45%_50%/0.08)]"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <f.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-display text-base md:text-lg font-semibold mb-2">{f.title}</h3>
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
