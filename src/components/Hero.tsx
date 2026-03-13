import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Stone path through fog"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/20" />
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        <p className="text-primary font-body text-sm font-semibold tracking-[0.3em] uppercase mb-6 opacity-0 animate-fade-up">
          Digital Growth Agency
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8 opacity-0 animate-fade-up [animation-delay:200ms]">
          Ads That Convert.{" "}
          <span className="text-gradient">Websites That Impress.</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-up [animation-delay:400ms]">
          We run high-ROI ad campaigns and build stunning websites — or upgrade the one you already have. Strategy, design, and growth under one roof.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up [animation-delay:600ms]">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-gradient-metallic text-primary-foreground font-semibold text-base hover:opacity-90 transition-opacity glow"
          >
            Get Started Today <ArrowRight size={18} />
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center px-8 py-4 rounded-md border border-border text-foreground font-semibold text-base hover:bg-muted transition-colors"
          >
            See What We Do
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
