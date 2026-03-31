import { ShieldCheck, Eye, MousePointerClick, Rocket } from "lucide-react";
import GlowOrbs from "@/components/GlowOrbs";

const points = [
  { icon: ShieldCheck, text: "More trust from the first click" },
  { icon: Eye, text: "Better first impression than your competitors" },
  { icon: MousePointerClick, text: "Higher conversion from ad traffic" },
  { icon: Rocket, text: "Stronger positioning when you're ready to scale" },
];

const WhyItMatters = () => {
  return (
    <section className="py-24 md:py-32 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Why It{" "}
            <span className="text-gradient">Matters</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-14">
            Your website is the first thing people judge. Before they read a word, they've already decided if you look legit.
          </p>

          <div className="grid sm:grid-cols-2 gap-5 text-left">
            {points.map((p) => (
              <div
                key={p.text}
                className="flex items-center gap-4 p-5 rounded-xl border border-border/50 bg-background/50 hover:border-primary/20 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <p.icon size={20} className="text-primary" />
                </div>
                <p className="text-foreground text-sm font-medium">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;
