import { useRef, useCallback } from "react";
import GlowOrbs from "@/components/GlowOrbs";
import { ArrowRight } from "lucide-react";
import beforeImg from "@/assets/before-website.jpg";
import afterImg from "@/assets/after-website.jpg";

const tiers = [
  { label: "Retouch", desc: "Clean up what you have" },
  { label: "Redesign", desc: "New look, same foundation" },
  { label: "Full Rebuild", desc: "Start from scratch" },
];

const BeforeAfter = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const clipRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const updateSlider = useCallback((pos: number) => {
    if (clipRef.current) clipRef.current.style.width = `${pos}%`;
    if (lineRef.current) lineRef.current.style.left = `${pos}%`;
  }, []);

  const handleMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const pos = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => updateSlider(pos));
    },
    [updateSlider]
  );

  return (
    <section id="showcase" className="relative overflow-hidden py-24 md:py-36">
      <GlowOrbs />
      <div className="relative z-[1] container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
            From Weak to{" "}
            <span className="text-gradient">Conversion-Ready</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Drag the slider. This is the difference between a website that loses trust and one that closes deals.
          </p>
        </div>

        {/* Slider */}
        <div className="max-w-5xl mx-auto">
          <div
            ref={containerRef}
            className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-border/50 cursor-col-resize select-none shadow-2xl"
            onMouseMove={handleMove}
            onTouchMove={handleMove}
          >
            {/* After (bottom layer) */}
            <img src={afterImg} alt="After redesign" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />

            {/* Before (width-clipped overlay) */}
            <div
              ref={clipRef}
              className="absolute top-0 left-0 h-full overflow-hidden will-change-[width]"
              style={{ width: "50%" }}
            >
              <img src={beforeImg} alt="Before redesign" className="absolute top-0 left-0 h-full object-cover" style={{ width: "var(--container-w)" }} loading="lazy" />
            </div>

            {/* Slider line */}
            <div
              ref={lineRef}
              className="absolute top-0 bottom-0 w-0.5 bg-primary/80 z-10 will-change-[left]"
              style={{ left: "50%", transform: "translateX(-50%)" }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg glow">
                <ArrowRight size={14} className="text-primary-foreground -rotate-180" />
                <ArrowRight size={14} className="text-primary-foreground" />
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 px-4 py-1.5 rounded-lg bg-destructive/90 text-primary-foreground text-xs font-bold uppercase tracking-wider z-20">
              Before
            </div>
            <div className="absolute top-4 right-4 px-4 py-1.5 rounded-lg bg-primary/90 text-primary-foreground text-xs font-bold uppercase tracking-wider z-20">
              After
            </div>
          </div>

          {/* Tier pills */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-10">
            {tiers.map((t) => (
              <div key={t.label} className="flex items-center gap-3 px-5 py-3 rounded-xl border border-border/50 bg-card/50">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <div>
                  <p className="text-foreground text-sm font-semibold">{t.label}</p>
                  <p className="text-muted-foreground text-xs">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
