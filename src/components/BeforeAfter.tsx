import { useRef, useCallback, useEffect, useState } from "react";
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
  const [dragging, setDragging] = useState(false);
  const posRef = useRef(50);
  const lineRef = useRef<HTMLDivElement>(null);
  const beforeRef = useRef<HTMLDivElement>(null);

  const applyPos = useCallback((pct: number) => {
    posRef.current = pct;
    if (beforeRef.current) {
      beforeRef.current.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
    }
    if (lineRef.current) {
      lineRef.current.style.transform = `translate3d(-50%, 0, 0) translateX(${pct}cqi)`;
    }
  }, []);

  const getPos = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return 50;
    return Math.max(2, Math.min(98, ((clientX - rect.left) / rect.width) * 100));
  }, []);

  // Pointer events (works for both mouse and touch)
  const onPointerDown = useCallback((e: React.PointerEvent) => {
    e.preventDefault();
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    setDragging(true);
    applyPos(getPos(e.clientX));
  }, [applyPos, getPos]);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragging) return;
    applyPos(getPos(e.clientX));
  }, [dragging, applyPos, getPos]);

  const onPointerUp = useCallback(() => {
    setDragging(false);
  }, []);

  // Set initial position via inline style and container query unit fallback
  useEffect(() => {
    applyPos(50);
  }, [applyPos]);

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
            style={{ containerType: "inline-size" }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          >
            {/* After (bottom layer) */}
            <img
              src={afterImg}
              alt="After redesign"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              draggable={false}
            />

            {/* Before (clip-path overlay — GPU composited) */}
            <div
              ref={beforeRef}
              className="absolute inset-0 will-change-[clip-path]"
              style={{ clipPath: "inset(0 50% 0 0)" }}
            >
              <img
                src={beforeImg}
                alt="Before redesign"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                draggable={false}
              />
            </div>

            {/* Slider line — GPU composited via translate3d */}
            <div
              ref={lineRef}
              className="absolute top-0 bottom-0 left-0 w-0.5 bg-primary/80 z-10 will-change-transform"
              style={{ transform: "translate3d(-50%, 0, 0) translateX(50cqi)" }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center shadow-lg glow">
                <ArrowRight size={12} className="text-primary-foreground -rotate-180 sm:w-3.5 sm:h-3.5" />
                <ArrowRight size={12} className="text-primary-foreground sm:w-3.5 sm:h-3.5" />
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
