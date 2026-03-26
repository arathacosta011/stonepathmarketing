import { Megaphone, Globe, Layers, ArrowRight } from "lucide-react";

const offers = [
  {
    icon: Megaphone,
    title: "Meta Ads Management",
    desc: "Full-service campaign management — strategy, creative direction, targeting, optimization, and reporting. We handle everything so your ads actually produce leads.",
  },
  {
    icon: Globe,
    title: "Landing Pages & Websites",
    desc: "Custom-built, high-speed websites and landing pages designed to convert visitors into customers. Not templates — real, tailored builds.",
  },
  {
    icon: Layers,
    title: "Growth Systems",
    desc: "End-to-end growth infrastructure combining ads, landing pages, and conversion tracking into a single system that scales with your business.",
  },
];

const Offers = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            What We Offer
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Everything You Need to{" "}
            <span className="text-gradient">Grow</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {offers.map((o) => (
            <div
              key={o.title}
              className="group p-8 md:p-10 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_hsl(270_45%_50%/0.08)] text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <o.icon size={28} className="text-primary" />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold mb-4">{o.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{o.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 md:mt-16">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg bg-gradient-metallic text-primary-foreground font-semibold text-base hover:opacity-90 transition-all glow"
          >
            Request a Growth Plan
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Offers;