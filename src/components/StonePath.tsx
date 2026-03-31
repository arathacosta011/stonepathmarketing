import { useEffect, useRef } from "react";

const StonePath = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let progress = 0;

    const resize = () => {
      canvas.width = window.innerWidth * 2;
      canvas.height = window.innerHeight * 2;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
    };
    window.addEventListener("mousemove", handleMouse);

    // Stone path segments — organic curves from bottom-center upward
    const paths = [
      { startX: 0.5, startY: 1.1, endX: 0.48, endY: 0.3, cp1x: 0.52, cp1y: 0.85, cp2x: 0.44, cp2y: 0.55, width: 3, opacity: 0.3 },
      { startX: 0.5, startY: 1.1, endX: 0.55, endY: 0.2, cp1x: 0.47, cp1y: 0.8, cp2x: 0.58, cp2y: 0.5, width: 2, opacity: 0.18 },
      { startX: 0.5, startY: 1.1, endX: 0.42, endY: 0.15, cp1x: 0.53, cp1y: 0.9, cp2x: 0.38, cp2y: 0.45, width: 1.5, opacity: 0.12 },
      // Branching paths
      { startX: 0.48, startY: 0.6, endX: 0.3, endY: 0.25, cp1x: 0.42, cp1y: 0.5, cp2x: 0.33, cp2y: 0.35, width: 1.5, opacity: 0.1 },
      { startX: 0.52, startY: 0.65, endX: 0.72, endY: 0.3, cp1x: 0.58, cp1y: 0.55, cp2x: 0.68, cp2y: 0.4, width: 1.5, opacity: 0.1 },
    ];

    // Small stone dots along the main path
    const stones: { x: number; y: number; r: number; delay: number }[] = [];
    for (let i = 0; i < 40; i++) {
      const t = i / 40;
      const mainPath = paths[0];
      const x = Math.pow(1 - t, 3) * mainPath.startX + 3 * Math.pow(1 - t, 2) * t * mainPath.cp1x + 3 * (1 - t) * t * t * mainPath.cp2x + t * t * t * mainPath.endX;
      const y = Math.pow(1 - t, 3) * mainPath.startY + 3 * Math.pow(1 - t, 2) * t * mainPath.cp1y + 3 * (1 - t) * t * t * mainPath.cp2y + t * t * t * mainPath.endY;
      stones.push({
        x: x + (Math.random() - 0.5) * 0.04,
        y: y + (Math.random() - 0.5) * 0.02,
        r: 1.5 + Math.random() * 3,
        delay: t * 0.8,
      });
    }

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Draw path lines
      paths.forEach((p) => {
        const pathProgress = Math.min(1, progress * 1.5);
        if (pathProgress <= 0) return;

        // Parallax offset based on mouse
        const ox = (mx - 0.5) * 0.015;
        const oy = (my - 0.5) * 0.01;

        ctx.beginPath();
        ctx.moveTo((p.startX + ox) * w, (p.startY + oy) * h);

        // Draw partial bezier
        const steps = Math.floor(pathProgress * 60);
        for (let i = 1; i <= steps; i++) {
          const t = i / 60;
          const x = Math.pow(1 - t, 3) * (p.startX + ox) + 3 * Math.pow(1 - t, 2) * t * (p.cp1x + ox) + 3 * (1 - t) * t * t * (p.cp2x + ox) + t * t * t * (p.endX + ox);
          const y = Math.pow(1 - t, 3) * (p.startY + oy) + 3 * Math.pow(1 - t, 2) * t * (p.cp1y + oy) + 3 * (1 - t) * t * t * (p.cp2y + oy) + t * t * t * (p.endY + oy);
          ctx.lineTo(x * w, y * h);
        }

        ctx.strokeStyle = `rgba(168, 130, 255, ${p.opacity * Math.min(1, progress * 2)})`;
        ctx.lineWidth = p.width * 2;
        ctx.lineCap = "round";
        ctx.stroke();
      });

      // Draw stones
      stones.forEach((s) => {
        const stoneProgress = Math.max(0, Math.min(1, (progress - s.delay) * 3));
        if (stoneProgress <= 0) return;

        const ox = (mx - 0.5) * 0.02;
        const oy = (my - 0.5) * 0.015;

        ctx.beginPath();
        ctx.arc(
          (s.x + ox) * w,
          (s.y + oy) * h,
          s.r * stoneProgress * 2,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = `rgba(168, 130, 255, ${0.18 * stoneProgress})`;
        ctx.fill();
      });

      // Animate progress
      if (progress < 1) {
        progress += 0.004;
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.9 }}
    />
  );
};

export default StonePath;
