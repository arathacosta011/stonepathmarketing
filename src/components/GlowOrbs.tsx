interface GlowOrbsProps {
  variant?: "default" | "hero" | "subtle";
}

const GlowOrbs = ({ variant = "default" }: GlowOrbsProps) => {
  const isHero = variant === "hero";
  const isSubtle = variant === "subtle";
  const opTL = isSubtle ? "0.06" : "0.10";
  const opBR = isSubtle ? "0.04" : "0.07";

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* Top-left — soft warm white */}
      <div
        className="absolute -top-40 -left-40 rounded-full"
        style={{
          width: isHero ? "700px" : "600px",
          height: isHero ? "700px" : "600px",
          background: "hsl(220 15% 70%)",
          opacity: opTL,
          filter: "blur(120px)",
        }}
      />
      {/* Bottom-right — cool neutral */}
      <div
        className="absolute -bottom-36 -right-36 rounded-full"
        style={{
          width: isHero ? "600px" : "500px",
          height: isHero ? "600px" : "500px",
          background: "hsl(240 10% 60%)",
          opacity: opBR,
          filter: "blur(100px)",
        }}
      />
      {/* Hero centre bloom — neutral warm light */}
      {isHero && (
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: "900px",
            height: "900px",
            background: "hsl(30 20% 75%)",
            opacity: "0.06",
            filter: "blur(140px)",
          }}
        />
      )}
    </div>
  );
};

export default GlowOrbs;
