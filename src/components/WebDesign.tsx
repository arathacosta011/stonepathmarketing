import { Megaphone, Target, BarChart3, TrendingUp, ArrowRight } from "lucide-react";

const features = [
  { icon: Megaphone, title: "Social Media Advertising", desc: "Full-service Meta and social ad campaigns — strategy, creative, targeting, optimization, and reporting." },
  { icon: Target, title: "Precision Targeting", desc: "Laser-focused audience targeting using demographics, interests, lookalike audiences, and retargeting." },
  { icon: BarChart3, title: "Performance Tracking", desc: "Detailed analytics and reporting so you always know exactly how your marketing spend is performing." },
  { icon: TrendingUp, title: "Scaling & Growth", desc: "Once we find what works, we scale it. Proven frameworks to grow while maintaining strong ROI." },
];

const WebDesign = () => {
  return (
    <section id="marketing" className="py-24 md:py-32 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              Digital Marketing
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Strategic Campaigns{" "}
              <span className="text-gradient">That Drive Results</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-4 leading-relaxed">
              A great website deserves great traffic. We plan, launch, and optimize digital marketing campaigns with clear strategy and a relentless focus on lead quality and cost efficiency.
            </p>
            <p className="text-muted-foreground text-base sm:text-lg mb-8 leading-relaxed">
              From{" "}
              <strong className="text-foreground">Meta ads to full-funnel strategies</strong>, we bring the right audience to the websites we build — so every click counts.
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg bg-gradient-metallic text-primary-foreground font-semibold text-base hover:opacity-90 transition-all glow"
            >
              Get a Free Consultation
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
