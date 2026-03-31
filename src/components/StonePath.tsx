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

    // Generate stone shapes along bezier paths
    const bezierPoint = (t: number, p0: number, p1: number, p2: number, p3: number) =>
      Math.pow(1 - t, 3) * p0 + 3 * Math.pow(1 - t, 2) * t * p1 + 3 * (1 - t) * t * t * p2 + t * t * t * p3;

    // Main path curves
    const curves = [
      { sx: 0.5, sy: 1.12, ex: 0.46, ey: 0.18, c1x: 0.53, c1y: 0.82, c2x: 0.42, c2y: 0.48 },
      { sx: 0.5, sy: 1.12, ex: 0.58, ey: 0.22, c1x: 0.48, c1y: 0.78, c2x: 0.6, c2y: 0.5 },
      // Branch left
      { sx: 0.47, sy: 0.6, ex: 0.28, ey: 0.28, c1x: 0.4, c1y: 0.5, c2x: 0.32, c2y: 0.36 },
      // Branch right
      { sx: 0.54, sy: 0.65, ex: 0.74, ey: 0.32, c1x: 0.6, c1y: 0.56, c2x: 0.7, c2y: 0.42 },
    ];

    // Seed random for consistent stones
    const seededRandom = (seed: number) => {
      const x = Math.sin(seed * 9301 + 49297) * 49297;
      return x - Math.floor(x);
    };

    type Stone = {
      x: number;
      y: number;
      w: number;
      h: number;
      rotation: number;
      vertices: { dx: number; dy: number }[];
      delay: number;
      opacity: number;
      curveIdx: number;
    };

    const stones: Stone[] = [];
    let stoneId = 0;

    curves.forEach((curve, ci) => {
      const count = ci < 2 ? 22 : 14;
      for (let i = 0; i < count; i++) {
        const t = (i + 0.5) / count;
        const cx = bezierPoint(t, curve.sx, curve.c1x, curve.c2x, curve.ex);
        const cy = bezierPoint(t, curve.sy, curve.c1y, curve.c2y, curve.ey);

        // Scatter stones around the path center
        const scatter = ci < 2 ? 0.025 : 0.018;
        for (let j = 0; j < (ci < 2 ? 3 : 2); j++) {
          stoneId++;
          const r1 = seededRandom(stoneId * 7);
          const r2 = seededRandom(stoneId * 13);
          const r3 = seededRandom(stoneId * 19);
          const r4 = seededRandom(stoneId * 31);

          const sx = cx + (r1 - 0.5) * scatter * 2;
          const sy = cy + (r2 - 0.5) * scatter;

          const baseSize = ci < 2 ? 8 + r3 * 10 : 5 + r3 * 7;

          // Generate irregular stone vertices (6-8 points)
          const numVerts = 6 + Math.floor(r4 * 3);
          const vertices: { dx: number; dy: number }[] = [];
          for (let v = 0; v < numVerts; v++) {
            const angle = (v / numVerts) * Math.PI * 2;
            const radius = 0.7 + seededRandom(stoneId * 100 + v) * 0.5;
            vertices.push({
              dx: Math.cos(angle) * radius,
              dy: Math.sin(angle) * radius,
            });
          }

          stones.push({
            x: sx,
            y: sy,
            w: baseSize,
            h: baseSize * (0.6 + r3 * 0.5),
            rotation: r4 * Math.PI,
            vertices,
            delay: t * 0.7 + (ci >= 2 ? 0.25 : 0),
            opacity: ci < 2 ? 0.18 + r1 * 0.12 : 0.1 + r1 * 0.08,
            curveIdx: ci,
          });
        }
      }
    });

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const ox = (mx - 0.5) * 0.02;
      const oy = (my - 0.5) * 0.015;

      // Draw each stone
      stones.forEach((s) => {
        const appear = Math.max(0, Math.min(1, (progress - s.delay) * 2.5));
        if (appear <= 0) return;

        const px = (s.x + ox) * w;
        const py = (s.y + oy) * h;
        const scale = appear;

        ctx.save();
        ctx.translate(px, py);
        ctx.rotate(s.rotation);
        ctx.scale(scale, scale);

        // Draw stone shape
        ctx.beginPath();
        const v0 = s.vertices[0];
        ctx.moveTo(v0.dx * s.w, v0.dy * s.h);
        for (let i = 1; i < s.vertices.length; i++) {
          const v = s.vertices[i];
          const vPrev = s.vertices[i - 1];
          const cpx = (vPrev.dx + v.dx) * 0.5 * s.w;
          const cpy = (vPrev.dy + v.dy) * 0.5 * s.h;
          ctx.quadraticCurveTo(vPrev.dx * s.w, vPrev.dy * s.h, cpx, cpy);
        }
        // Close with smooth curve
        const vLast = s.vertices[s.vertices.length - 1];
        ctx.quadraticCurveTo(
          vLast.dx * s.w, vLast.dy * s.h,
          v0.dx * s.w, v0.dy * s.h
        );
        ctx.closePath();

        // Stone fill — slate/stone color with subtle gradient feel
        const alpha = s.opacity * appear;
        ctx.fillStyle = `rgba(148, 130, 160, ${alpha * 0.5})`;
        ctx.fill();

        // Stone edge highlight
        ctx.strokeStyle = `rgba(180, 165, 195, ${alpha * 0.4})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Inner highlight for depth
        ctx.beginPath();
        const innerScale = 0.6;
        ctx.moveTo(v0.dx * s.w * innerScale, v0.dy * s.h * innerScale - 1);
        for (let i = 1; i < s.vertices.length; i++) {
          const v = s.vertices[i];
          ctx.lineTo(v.dx * s.w * innerScale, v.dy * s.h * innerScale - 1);
        }
        ctx.closePath();
        ctx.fillStyle = `rgba(200, 185, 215, ${alpha * 0.15})`;
        ctx.fill();

        ctx.restore();
      });

      // Subtle connecting path lines between stones (like mortar/trail)
      curves.forEach((curve, ci) => {
        const pathProgress = Math.min(1, progress * 1.3 - (ci >= 2 ? 0.2 : 0));
        if (pathProgress <= 0) return;

        ctx.beginPath();
        const steps = Math.floor(pathProgress * 80);
        for (let i = 0; i <= steps; i++) {
          const t = i / 80;
          const x = (bezierPoint(t, curve.sx, curve.c1x, curve.c2x, curve.ex) + ox) * w;
          const y = (bezierPoint(t, curve.sy, curve.c1y, curve.c2y, curve.ey) + oy) * h;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(148, 130, 160, ${(ci < 2 ? 0.08 : 0.05) * Math.min(1, progress * 2)})`;
        ctx.lineWidth = ci < 2 ? 2 : 1.2;
        ctx.lineCap = "round";
        ctx.stroke();
      });

      if (progress < 1) {
        progress += 0.005;
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
      style={{ opacity: 0.95 }}
    />
  );
};

export default StonePath;
