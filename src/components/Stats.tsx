const stats = [
  { value: "150+", label: "Clients Served" },
  { value: "3.2x", label: "Avg. ROI Increase" },
  { value: "$40M+", label: "Revenue Generated" },
  { value: "98%", label: "Client Retention" },
];

const Stats = () => {
  return (
    <section id="about" className="py-24 md:py-32 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              Why Stonepath
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              We Don't Just Market.{" "}
              <span className="text-gradient">We Build Empires.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Founded on the belief that great marketing is equal parts art and science, 
              Stonepath delivers measurable results without sacrificing creativity. 
              Every campaign is a stepping stone toward your next milestone.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Work With Us
            </a>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="p-6 rounded-lg bg-card border border-border text-center"
              >
                <p className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">
                  {s.value}
                </p>
                <p className="text-muted-foreground text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
