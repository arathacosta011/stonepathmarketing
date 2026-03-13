import { Monitor, Palette, Zap, ShieldCheck } from "lucide-react";

const features = [
  { icon: Monitor, title: "Custom Design", desc: "Pixel-perfect, fully responsive websites tailored to your brand identity." },
  { icon: Palette, title: "Modern Aesthetics", desc: "Clean, conversion-focused layouts that keep visitors engaged and impressed." },
  { icon: Zap, title: "Lightning Fast", desc: "Optimized for speed and performance — because every second counts." },
  { icon: ShieldCheck, title: "Secure & Reliable", desc: "Built with best practices for security, uptime, and peace of mind." },
];

const WebDesign = () => {
  return (
    <section id="results" className="py-24 md:py-32 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              Web Design
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              We Build <span className="text-gradient">Professional Websites</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Your website is your digital storefront. We design and develop stunning, 
              high-performing websites that turn visitors into customers — whether you need 
              a sleek landing page or a full-scale business platform.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-gradient-metallic text-primary-foreground font-semibold text-base hover:opacity-90 transition-opacity glow"
            >
              Get a Free Quote
            </a>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="group p-6 rounded-lg bg-card border border-border hover:border-primary/40 transition-colors"
              >
                <div className="w-11 h-11 rounded-md bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <f.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDesign;
