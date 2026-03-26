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
              Stonepath Marketing is not for everyone. We work with businesses that are ready to invest in stronger systems, better presentation, and cleaner execution — not quick fixes or vanity metrics.
            </p>
            <p>
              If you are looking for someone to run a few boosted posts and call it a day, we are not the right fit. But if you want a team that treats your growth like a system — from the first ad impression to the final conversion — that is exactly what we do.
            </p>
            <p>
              We combine strategic Meta advertising with premium, conversion-focused websites to create a growth engine that compounds over time. No fluff. No filler. Just results you can measure.
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