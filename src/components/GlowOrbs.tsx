const GlowOrbs = () => {
  return (
    <>
      {/* Top-left orb */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-[0.15] blur-[120px]"
        style={{ background: "hsl(var(--primary))" }}
      />
      {/* Bottom-right orb */}
      <div
        className="pointer-events-none absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.18] blur-[120px]"
        style={{ background: "hsl(var(--accent))" }}
      />
    </>
  );
};

export default GlowOrbs;
