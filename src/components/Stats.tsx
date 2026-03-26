import { Search, Target, Rocket, BarChart3, ArrowRight } from "lucide-react";

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
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Our Process
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            How We <span className="text-gradient">Get It Done</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            From your first ad to your next website upgrade — here's how we take you from where you are to where you want to be.
          </p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block relative">
          {/* Connecting line */}
          <div className="absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-border via-primary/30 to-border" />
          <div className="grid grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="relative text-center px-4">
                <div className="w-20 h-20 rounded-2xl bg-card border border-border flex items-center justify-center mx-auto mb-6 relative z-10 group-hover:border-primary/40 transition-colors">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <span className="text-primary/40 font-display text-sm font-bold tracking-wider mb-2 block">
                  Step {step.number}
                </span>
                <h3 className="font-display text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/tablet: stacked cards */}
        <div className="lg:hidden grid sm:grid-cols-2 gap-5">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative p-7 rounded-xl bg-card border border-border"
            >
              <span className="absolute top-4 right-4 font-display text-4xl font-bold text-muted/20">
                {step.number}
              </span>
              <step.icon className="w-7 h-7 text-primary mb-4" />
              <h3 className="font-display text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg bg-gradient-metallic text-primary-foreground font-semibold text-base hover:opacity-90 transition-all glow"
          >
            Start Your Project
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Stats;
