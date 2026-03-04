import { Search, Target, Rocket, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discover",
    description: "We dig into your brand, audience, and competitors to uncover untapped opportunities.",
  },
  {
    icon: Target,
    number: "02",
    title: "Strategize",
    description: "Every move is mapped out — from channel mix to messaging — backed by real data.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Execute",
    description: "We launch campaigns that cut through the noise and demand attention.",
  },
  {
    icon: BarChart3,
    number: "04",
    title: "Optimize",
    description: "Continuous testing and refinement to squeeze every ounce of performance.",
  },
];

const Stats = () => {
  return (
    <section id="about" className="py-24 md:py-32 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Our Process
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            How We <span className="text-gradient">Get It Done</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A proven four-step framework that turns vision into measurable growth.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative p-8 rounded-lg bg-card border border-border hover:border-primary/40 transition-colors"
            >
              <span className="absolute top-4 right-4 font-display text-5xl font-bold text-muted/30">
                {step.number}
              </span>
              <step.icon className="w-8 h-8 text-primary mb-5" />
              <h3 className="font-display text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
