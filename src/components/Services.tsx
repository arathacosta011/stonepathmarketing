import { Megaphone, Target, BarChart3, Users, TrendingUp, DollarSign } from "lucide-react";

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
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Meta Advertising
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            We Run Ads That <span className="text-gradient">Actually Work</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Most businesses waste money on Meta ads. We make sure yours print it. Full-service campaign management from strategy to scale.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group p-8 rounded-lg bg-card border border-border hover:border-primary/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <s.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
