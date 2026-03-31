import { Paintbrush, Globe, TrendingUp } from "lucide-react";

const blocks = [
  {
    icon: Paintbrush,
    title: "Website Retouch",
    desc: "Clean up your current site — better layout, faster load, stronger first impression.",
  },
  {
    icon: Globe,
    title: "Full Website Rebuild",
    desc: "Custom-built from scratch. Premium design, conversion-focused, ready to run ads to.",
  },
  {
    icon: TrendingUp,
    title: "Growth-Ready Creative Direction",
    desc: "Brand positioning, visual identity, and a site that makes scaling feel effortless.",
  },
];

const Offers = () => {
  return (
    <section id="services" className="relative overflow-hidden py-24 md:py-32">
      <GlowOrbs />
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
            What We Actually{" "}
            <span className="text-gradient">Do</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
          {blocks.map((b) => (
            <div
              key={b.title}
              className="group p-8 md:p-10 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_hsl(270_45%_50%/0.08)] text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <b.icon size={28} className="text-primary" />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold mb-3">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
