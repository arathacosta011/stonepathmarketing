import { useState } from "react";
import { ArrowRight } from "lucide-react";
import beforeImg from "@/assets/before-website.jpg";
import afterImg from "@/assets/after-website.jpg";

const showcases = [
  {
    client: "Local Restaurant",
    before: beforeImg,
    after: afterImg,
    description: "Transformed an outdated, cluttered site into a sleek, modern platform that increased online reservations by 3x.",
  },
];

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
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Transformations
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Before &amp; <span className="text-gradient">After</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Drag the slider to see how we turn outdated websites into modern, high-converting machines.
          </p>
        </div>

        {showcases.map((item) => (
          <div key={item.client} className="max-w-4xl mx-auto">
            {/* Slider container */}
            <div
              className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-border cursor-col-resize select-none"
              onMouseMove={(e) => handleSlider(e, e.currentTarget)}
              onTouchMove={(e) => handleSlider(e, e.currentTarget)}
            >
              {/* After image (full background) */}
              <img
                src={item.after}
                alt="After redesign"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Before image (clipped) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPos}%` }}
              >
                <img
                  src={item.before}
                  alt="Before redesign"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ width: `${100 / (sliderPos / 100)}%`, maxWidth: "none" }}
                />
              </div>

              {/* Slider line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-primary shadow-[0_0_12px_hsl(270_45%_50%/0.6)] z-10"
                style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg">
                  <ArrowRight size={16} className="text-primary-foreground -rotate-180" />
                  <ArrowRight size={16} className="text-primary-foreground" />
                </div>
              </div>

              {/* Labels */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-destructive/90 text-primary-foreground text-xs font-bold uppercase tracking-wider z-20">
                Before
              </div>
              <div className="absolute top-4 right-4 px-3 py-1 rounded-md bg-primary/90 text-primary-foreground text-xs font-bold uppercase tracking-wider z-20">
                After
              </div>
            </div>

            {/* Description */}
            <div className="mt-8 text-center">
              <h3 className="font-display text-2xl font-bold mb-2">{item.client}</h3>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BeforeAfter;
