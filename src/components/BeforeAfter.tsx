import { useRef, useCallback, useEffect } from "react";
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
  const lineRef = useRef<HTMLDivElement>(null);
  const beforeRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const widthRef = useRef(0);
  const leftRef = useRef(0);

  const applyPos = useCallback((clientX: number) => {
    const pct = Math.max(2, Math.min(98, ((clientX - leftRef.current) / widthRef.current) * 100));
    if (beforeRef.current) {
      beforeRef.current.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
    }
    if (lineRef.current) {
      lineRef.current.style.left = `${pct}%`;
    }
  }, []);

  const syncRect = useCallback(() => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      widthRef.current = rect.width;
      leftRef.current = rect.left;
    }
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onDown = (e: PointerEvent) => {
      e.preventDefault();
      el.setPointerCapture(e.pointerId);
      draggingRef.current = true;
      syncRect();
      applyPos(e.clientX);
    };

    const onMove = (e: PointerEvent) => {
      if (!draggingRef.current) return;
      applyPos(e.clientX);
    };

    const onUp = () => {
      draggingRef.current = false;
    };

    el.addEventListener("pointerdown", onDown, { passive: false });
    el.addEventListener("pointermove", onMove, { passive: true });
    el.addEventListener("pointerup", onUp);
    el.addEventListener("pointercancel", onUp);
    window.addEventListener("resize", syncRect);
    syncRect();

    return () => {
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("pointercancel", onUp);
      window.removeEventListener("resize", syncRect);
    };
  }, [applyPos, syncRect]);

  return (
    <section id="showcase" className="relative overflow-hidden py-20 md:py-36">
      <GlowOrbs />
      <div className="relative z-[1] container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-20">
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-5">
            From Weak to{" "}
            <span className="text-gradient">Conversion-Ready</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-lg leading-relaxed px-2">
            Drag the slider. This is the difference between a website that loses trust and one that closes deals.
          </p>
        </div>

        {/* Slider */}
        <div className="max-w-5xl mx-auto">
          <div
            ref={containerRef}
            className="relative w-full aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden border border-border/50 select-none shadow-2xl touch-none"
          >
            {/* After (bottom layer) */}
            <img
              src={afterImg}
              alt="After redesign"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              draggable={false}
            />

            {/* Before (clip-path overlay) */}
            <div
              ref={beforeRef}
              className="absolute inset-0"
              style={{ clipPath: "inset(0 50% 0 0)", willChange: "clip-path" }}
            >
              <img
                src={beforeImg}
                alt="Before redesign"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                draggable={false}
              />
            </div>

            {/* Slider line */}
            <div
              ref={lineRef}
              className="absolute top-0 bottom-0 w-0.5 bg-primary/80 z-10 -translate-x-1/2"
              style={{ left: "50%", willChange: "left" }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center shadow-lg glow">
                <ArrowRight size={12} className="text-primary-foreground -rotate-180" />
                <ArrowRight size={12} className="text-primary-foreground" />
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 px-3 py-1 sm:px-4 sm:py-1.5 rounded-lg bg-destructive/90 text-primary-foreground text-[10px] sm:text-xs font-bold uppercase tracking-wider z-20">
              Before
            </div>
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 px-3 py-1 sm:px-4 sm:py-1.5 rounded-lg bg-primary/90 text-primary-foreground text-[10px] sm:text-xs font-bold uppercase tracking-wider z-20">
              After
            </div>
          </div>

          {/* Tier pills */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mt-8 sm:mt-10">
            {tiers.map((t) => (
              <div key={t.label} className="flex items-center gap-3 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl border border-border/50 bg-card/50 w-full sm:w-auto">
                <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
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
