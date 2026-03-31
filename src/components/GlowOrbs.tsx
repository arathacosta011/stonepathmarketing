interface GlowOrbsProps {
  variant?: "default" | "hero" | "subtle";
}

const GlowOrbs = ({ variant = "default" }: GlowOrbsProps) => {
  const isHero = variant === "hero";
  const isSubtle = variant === "subtle";
  const opTL = isSubtle ? "0.06" : "0.10";
  const opBR = isSubtle ? "0.04" : "0.07";

  // Use simpler radial gradients instead of blur() which is very expensive on mobile Safari
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* Top-left glow — no blur filter, use radial-gradient instead */}
      <div
        className="absolute -top-40 -left-40 rounded-full"
        style={{
          width: isHero ? "700px" : "600px",
          height: isHero ? "700px" : "600px",
          background: `radial-gradient(circle, hsl(220 15% 70% / ${opTL}) 0%, transparent 70%)`,
        }}
      />
      {/* Bottom-right glow */}
      <div
        className="absolute -bottom-36 -right-36 rounded-full"
        style={{
          width: isHero ? "600px" : "500px",
          height: isHero ? "600px" : "500px",
          background: `radial-gradient(circle, hsl(240 10% 60% / ${opBR}) 0%, transparent 70%)`,
        }}
      />
      {/* Hero centre bloom */}
      {isHero && (
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: "900px",
            height: "900px",
            background: "radial-gradient(circle, hsl(30 20% 75% / 0.06) 0%, transparent 60%)",
          }}
        />
      )}
    </div>
  );
};

export default GlowOrbs;
