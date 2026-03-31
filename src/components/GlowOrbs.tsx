interface GlowOrbsProps {
  variant?: "default" | "hero" | "subtle";
}

const GlowOrbs = ({ variant = "default" }: GlowOrbsProps) => {
  const isHero = variant === "hero";
  const isSubtle = variant === "subtle";
  const opTL = isSubtle ? "0.09" : "0.20";
  const opBR = isSubtle ? "0.07" : "0.14";

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* Top-left — primary blue */}
      <div
        className="absolute -top-40 -left-40 rounded-full"
        style={{
          width: isHero ? "700px" : "600px",
          height: isHero ? "700px" : "600px",
          background: "hsl(var(--primary))",
          opacity: opTL,
          filter: "blur(120px)",
        }}
      />
      {/* Bottom-right — purple/indigo accent */}
      <div
        className="absolute -bottom-36 -right-36 rounded-full"
        style={{
          width: isHero ? "600px" : "500px",
          height: isHero ? "600px" : "500px",
          background: "hsl(var(--accent))",
          opacity: opBR,
          filter: "blur(100px)",
        }}
      />
      {/* Hero centre bloom */}
      {isHero && (
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: "900px",
            height: "900px",
            background: "hsl(var(--primary))",
            opacity: "0.08",
            filter: "blur(140px)",
          }}
        />
      )}
    </div>
  );
};

export default GlowOrbs;
