import { ArrowRight } from "lucide-react";
import GlowOrbs from "@/components/GlowOrbs";

const FinalCTA = () => {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <GlowOrbs />
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            If your website doesn't match the level you want to grow to,{" "}
            <span className="text-gradient">we fix that.</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg bg-gradient-metallic text-primary-foreground font-semibold text-base hover:opacity-90 transition-all glow"
            >
              Book a Strategy Call
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-border/60 text-foreground font-semibold text-base hover:bg-muted/50 hover:border-border transition-all"
            >
              See Pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
