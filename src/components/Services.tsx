import { Monitor, Palette, Zap, ShieldCheck, Smartphone, Search, ArrowRight } from "lucide-react";

const services = [
  { icon: Monitor, title: "Custom Website Design", desc: "Every site designed from scratch — tailored to your brand, your audience, and your goals. No templates, no shortcuts." },
  { icon: Palette, title: "Redesign & Refresh", desc: "Modernize your existing site with updated visuals, faster load times, and mobile-first responsiveness that converts." },
  { icon: Zap, title: "Speed That Converts", desc: "Our sites load under 2 seconds. Faster sites rank higher and keep visitors from bouncing." },
  { icon: Smartphone, title: "Mobile-First Development", desc: "Every page is built mobile-first, ensuring a flawless experience on any device your customers use." },
  { icon: Search, title: "SEO & Performance", desc: "Built-in technical SEO, optimized structure, and performance tuning so your site ranks and gets found." },
  { icon: ShieldCheck, title: "Ongoing Support", desc: "From content updates to security patches, we keep your site current, secure, and performing at its best." },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Web Design
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Premium Websites{" "}
            <span className="text-gradient">Built to Convert</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            We build premium, fast, conversion-focused websites that turn attention into booked calls and qualified leads. AI-assisted speed, human-polished quality.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group p-7 md:p-8 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_hsl(270_45%_50%/0.08)]"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <s.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-display text-lg md:text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 md:mt-16">
          <a
            href="#pricing"
            className="group inline-flex items-center gap-2 text-primary font-semibold hover:underline underline-offset-4 transition-all"
          >
            View pricing plans
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
