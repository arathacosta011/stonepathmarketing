import { BrainCircuit, Sparkles, Target, Users } from "lucide-react";

const reasons = [
  {
    icon: BrainCircuit,
    title: "Strategy Before Design",
    desc: "We never build a page without a clear plan. Every design decision ties back to your business goals and conversion strategy.",
  },
  {
    icon: Sparkles,
    title: "AI-Assisted, Human-Polished",
    desc: "We use AI to move faster — not to cut corners. Every website gets hands-on refinement before it goes live.",
  },
  {
    icon: Target,
    title: "Built to Convert",
    desc: "Good-looking is not good enough. Everything we build is engineered to generate leads, book calls, and drive revenue.",
  },
  {
    icon: Users,
    title: "Lean Team, Sharp Execution",
    desc: "No bloated agency overhead. You work directly with the people designing and building your website.",
  },
];

const WhyStonepath = () => {
  return (
    <section className="py-24 md:py-32 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Why Stonepath
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Why Businesses Choose{" "}
            <span className="text-gradient">Stonepath</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="group p-7 md:p-8 rounded-xl bg-background border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_hsl(270_45%_50%/0.08)]"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <r.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-3">{r.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyStonepath;
