import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-16">
      <img
        src={heroBg}
        alt="Stone path through fog"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-transparent h-32" />
      
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl py-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 opacity-0 animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-primary font-body text-xs font-semibold tracking-widest uppercase">
            Performance Marketing & Web Design
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6 opacity-0 animate-fade-up [animation-delay:150ms]">
          We Build What{" "}
          <span className="text-gradient">Your Business Needs.</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 opacity-0 animate-fade-up [animation-delay:300ms] leading-relaxed">
          Paid advertising and web design built around one thing — your bottom line.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up [animation-delay:450ms]">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg bg-gradient-metallic text-primary-foreground font-semibold text-base hover:opacity-90 transition-all glow"
          >
            Get Started Today
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-border/60 text-foreground font-semibold text-base hover:bg-muted/50 hover:border-border transition-all"
          >
            <Play size={16} className="text-primary" />
            See What We Do
          </a>
        </div>

        {/* Trust signals */}
        <div className="mt-16 pt-8 border-t border-border/30 opacity-0 animate-fade-up [animation-delay:600ms]">
          <p className="text-muted-foreground text-xs tracking-widest uppercase mb-4">Trusted by businesses in</p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground/70 font-medium">
            <span>E-Commerce</span>
            <span className="w-1 h-1 rounded-full bg-primary/40" />
            <span>Real Estate</span>
            <span className="w-1 h-1 rounded-full bg-primary/40" />
            <span>Local Services</span>
            <span className="w-1 h-1 rounded-full bg-primary/40" />
            <span>Health & Wellness</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
