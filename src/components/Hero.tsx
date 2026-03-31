import { ArrowRight } from "lucide-react";
import StonePath from "@/components/StonePath";

const Hero = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-16">
      {/* Fog/gradient base */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(270_45%_50%/0.06)_0%,_transparent_70%)]" />
      
      {/* Animated stone paths */}
      <StonePath />

      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl py-20">
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-8 opacity-0 animate-fade-up [animation-delay:200ms]">
          Websites built to make your business{" "}
          <span className="text-gradient">look ready to scale.</span>
        </h1>

        <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto mb-12 opacity-0 animate-fade-up [animation-delay:400ms] leading-relaxed">
          Retouch your current site or rebuild from the ground up — either way, we turn weak first impressions into clean, conversion-ready experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up [animation-delay:600ms]">
          <a
            href="#showcase"
            className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg bg-gradient-metallic text-primary-foreground font-semibold text-base hover:opacity-90 transition-all glow"
          >
            See Before & After
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-border/60 text-foreground font-semibold text-base hover:bg-muted/50 hover:border-border transition-all"
          >
            Book a Strategy Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
