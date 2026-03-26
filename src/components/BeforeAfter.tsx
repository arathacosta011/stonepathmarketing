import { useState } from "react";
import { ArrowRight } from "lucide-react";
import beforeImg from "@/assets/before-website.jpg";
import afterImg from "@/assets/after-website.jpg";

const BeforeAfter = () => {
  const [sliderPos, setSliderPos] = useState(50);

  const handleSlider = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>, container: HTMLDivElement) => {
    const rect = container.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const pos = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    setSliderPos(pos);
  };

  return (
    <section id="showcase" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Transformations
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            From Outdated to{" "}
            <span className="text-gradient">Conversion-Ready</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            See the kind of visual and structural upgrade that helps businesses look more credible and convert more traffic.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden border border-border cursor-col-resize select-none"
            onMouseMove={(e) => handleSlider(e, e.currentTarget)}
            onTouchMove={(e) => handleSlider(e, e.currentTarget)}
          >
            <img src={afterImg} alt="After redesign" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPos}%` }}>
              <img
                src={beforeImg}
                alt="Before redesign"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ width: `${100 / (sliderPos / 100)}%`, maxWidth: "none" }}
              />
            </div>

            <div
              className="absolute top-0 bottom-0 w-0.5 bg-primary/80 z-10"
              style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg glow">
                <ArrowRight size={14} className="text-primary-foreground -rotate-180" />
                <ArrowRight size={14} className="text-primary-foreground" />
              </div>
            </div>

            <div className="absolute top-3 sm:top-4 left-3 sm:left-4 px-3 py-1 rounded-lg bg-destructive/90 text-primary-foreground text-[10px] sm:text-xs font-bold uppercase tracking-wider z-20">
              Before
            </div>
            <div className="absolute top-3 sm:top-4 right-3 sm:right-4 px-3 py-1 rounded-lg bg-primary/90 text-primary-foreground text-[10px] sm:text-xs font-bold uppercase tracking-wider z-20">
              After
            </div>
          </div>

          <div className="mt-8 text-center">
            <h3 className="font-display text-xl sm:text-2xl font-bold mb-2">E-Commerce & Retail</h3>
            <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Clothing brands, boutiques, and online stores that need a clean storefront to drive sales and build trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;