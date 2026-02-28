import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Stone path through fog"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        <p className="text-primary font-body text-sm font-semibold tracking-[0.3em] uppercase mb-6 opacity-0 animate-fade-up">
          Digital Marketing Agency
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8 opacity-0 animate-fade-up [animation-delay:200ms]">
          Pave Your Path to{" "}
          <span className="text-gradient">Digital Growth</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-up [animation-delay:400ms]">
          We craft data-driven strategies that turn clicks into customers and brands into movements.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up [animation-delay:600ms]">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-gradient-miami text-primary-foreground font-semibold text-base hover:opacity-90 transition-opacity glow"
          >
            Start Your Journey <ArrowRight size={18} />
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center px-8 py-4 rounded-md border border-border text-foreground font-semibold text-base hover:bg-muted transition-colors"
          >
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
