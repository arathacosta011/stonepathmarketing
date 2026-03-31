import { ArrowRight } from "lucide-react";
import stonePathBg from "@/assets/stone-path-hero.jpg";


const Hero = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Realistic stone path background */}
      <img
        src={stonePathBg}
        alt="Winding cobblestone path in atmospheric fog"
        className="absolute inset-0 w-full h-full object-cover object-center"
        width={1920}
        height={1080}
        fetchPriority="high"
      />

      {/* Bright light on the path */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      <div
        className="pointer-events-none absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, hsl(40 60% 95% / 0.35) 0%, hsl(40 40% 80% / 0.15) 40%, transparent 70%)", filter: "blur(30px)" }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center max-w-4xl py-16 sm:py-20">
        <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-6 sm:mb-8 opacity-0 animate-fade-up [animation-delay:200ms] drop-shadow-lg">
          Websites built to make your business{" "}
          <span className="text-gradient">look ready to scale.</span>
        </h1>

        <p className="text-sm sm:text-lg text-muted-foreground max-w-xl mx-auto mb-8 sm:mb-12 opacity-0 animate-fade-up [animation-delay:400ms] leading-relaxed drop-shadow-md px-2">
          Retouch your current site or rebuild from the ground up — either way, we turn weak first impressions into clean, conversion-ready experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center opacity-0 animate-fade-up [animation-delay:600ms] px-2">
          <a
            href="#showcase"
            className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg bg-gradient-metallic text-primary-foreground font-semibold text-sm sm:text-base hover:opacity-90 transition-all glow"
          >
            See Before & After
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg border border-border/60 text-foreground font-semibold text-sm sm:text-base hover:bg-muted/50 hover:border-border transition-all backdrop-blur-sm"
          >
            Book a Strategy Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
