import { ArrowRight } from "lucide-react";

const Trust = () => {
  return (
    <section className="py-24 md:py-32 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Who This Is For
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Built for Businesses That Want{" "}
            <span className="text-gradient">Serious Growth</span>
          </h2>
          <div className="space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed text-left max-w-2xl mx-auto">
            <p>
              Stonepath Marketing is not for everyone. We work with businesses that are ready to invest in a premium online presence — not quick fixes or cookie-cutter templates.
            </p>
            <p>
              If you need a basic site thrown together in a weekend, we are not the right fit. But if you want a website that looks exceptional, loads fast, and actually converts visitors into customers — that is exactly what we do.
            </p>
            <p>
              We combine strategic web design with digital marketing to create a growth engine that compounds over time. No fluff. No filler. Just results you can measure.
            </p>
          </div>
          <div className="mt-10">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg bg-gradient-metallic text-primary-foreground font-semibold text-base hover:opacity-90 transition-all glow"
            >
              See If We Are the Right Fit
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
