import { Search, BarChart3, Megaphone, PenTool, Target, Globe } from "lucide-react";

const services = [
  { icon: Search, title: "SEO Strategy", desc: "Dominate search results with proven optimization techniques that drive organic traffic." },
  { icon: Megaphone, title: "Paid Media", desc: "Maximize ROI across Google, Meta, and LinkedIn with precision-targeted ad campaigns." },
  { icon: PenTool, title: "Content Marketing", desc: "Compelling narratives that position your brand as an industry authority." },
  { icon: BarChart3, title: "Analytics & CRO", desc: "Data-driven insights that turn visitors into loyal, paying customers." },
  { icon: Target, title: "Brand Strategy", desc: "Define your market position with a brand identity that resonates and converts." },
  { icon: Globe, title: "Social Media", desc: "Build engaged communities and amplify your reach across every platform." },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            What We Do
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Services Built for <span className="text-gradient">Results</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Every strategy is tailored to your goals. No templates. No guesswork.
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
