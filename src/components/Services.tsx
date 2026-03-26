import { Megaphone, Target, BarChart3, Users, TrendingUp, DollarSign, ArrowRight } from "lucide-react";

const services = [
  { icon: Megaphone, title: "Meta Ad Campaigns", desc: "We create, launch, and manage Facebook & Instagram ad campaigns designed to reach your ideal audience and drive real results." },
  { icon: Target, title: "Precision Targeting", desc: "Laser-focused audience targeting using Meta's powerful tools — demographics, interests, lookalike audiences, and retargeting." },
  { icon: BarChart3, title: "Performance Tracking", desc: "Detailed analytics and reporting so you always know exactly how your ad spend is performing and where every dollar goes." },
  { icon: DollarSign, title: "Budget Optimization", desc: "We maximize every dollar of your ad budget through A/B testing, bid strategies, and continuous campaign refinement." },
  { icon: TrendingUp, title: "Scaling & Growth", desc: "Once we find what works, we scale it. Proven frameworks to grow your campaigns while maintaining strong ROAS." },
  { icon: Users, title: "Lead Generation", desc: "Turn scrollers into customers with high-converting lead forms, landing pages, and funnel strategies built for Meta." },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Meta Advertising
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            We Run Ads That <span className="text-gradient">Actually Work</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Most businesses waste money on Meta ads. We make sure yours print it. Full-service campaign management from strategy to scale.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((s, i) => (
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
            href="#contact"
            className="group inline-flex items-center gap-2 text-primary font-semibold hover:underline underline-offset-4 transition-all"
          >
            Start running profitable ads
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
