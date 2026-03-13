import { Search, Target, Rocket, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Audit & Discovery",
    description: "We review your current ads and website to identify gaps, missed opportunities, and quick wins.",
  },
  {
    icon: Target,
    number: "02",
    title: "Strategy & Setup",
    description: "Custom ad campaigns and website plans built around your goals, audience, and budget.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Launch & Build",
    description: "Your Meta ads go live and your new or upgraded website launches — simultaneously for maximum impact.",
  },
  {
    icon: BarChart3,
    number: "04",
    title: "Optimize & Grow",
    description: "Ongoing ad optimization, website updates, and performance reporting to keep scaling your results.",
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
            From your first ad to your next website upgrade — here's how we take you from where you are to where you want to be.
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
