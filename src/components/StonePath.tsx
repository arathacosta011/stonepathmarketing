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

    // Seeded random for consistency
    const sr = (seed: number) => {
      const x = Math.sin(seed * 9301 + 49297) * 49297;
      return x - Math.floor(x);
    };

    // Define the winding path shape (like the logo) — S-curve from bottom-center to upper-right
    // The path is defined by its center line and width at each point
    const pathPoints: { x: number; y: number; width: number }[] = [];
    const numPoints = 60;
    for (let i = 0; i <= numPoints; i++) {
      const t = i / numPoints;
      // S-curve: starts bottom-center, curves right, then curves left toward upper area
      const x = 0.5 + Math.sin(t * Math.PI * 1.8 - 0.3) * 0.18 * (1 - t * 0.3);
      const y = 1.15 - t * 1.05;
      // Path gets narrower as it goes into the distance (perspective)
      const width = 0.18 * (1 - t * 0.85);
      pathPoints.push({ x, y, width });
    }

    // Generate stone cells within the path using a grid-based approach
    type StoneCell = {
      points: { x: number; y: number }[];
      centerX: number;
      centerY: number;
      t: number; // position along path (0=bottom, 1=top) for animation delay
    };

    const stoneCells: StoneCell[] = [];

    // Create rows of stones along the path
    const numRows = 28;
    for (let row = 0; row < numRows; row++) {
      const t = row / numRows;
      const tNext = (row + 1) / numRows;

      // Get path bounds at this row
      const idx = Math.floor(t * numPoints);
      const idxNext = Math.min(Math.floor(tNext * numPoints), numPoints);
      const p = pathPoints[idx];
      const pNext = pathPoints[idxNext];

      const leftEdge = p.x - p.width / 2;
      const rightEdge = p.x + p.width / 2;
      const leftEdgeNext = pNext.x - pNext.width / 2;
      const rightEdgeNext = pNext.x + pNext.width / 2;

      // Number of stones across this row (fewer as path narrows)
      const numCols = Math.max(2, Math.round(p.width * 28));

      for (let col = 0; col < numCols; col++) {
        const colT = col / numCols;
        const colTNext = (col + 1) / numCols;

        // Four corners of this stone cell
        const topLeft = { x: leftEdge + colT * (rightEdge - leftEdge), y: p.y };
        const topRight = { x: leftEdge + colTNext * (rightEdge - leftEdge), y: p.y };
        const bottomLeft = { x: leftEdgeNext + colT * (rightEdgeNext - leftEdgeNext), y: pNext.y };
        const bottomRight = { x: leftEdgeNext + colTNext * (rightEdgeNext - leftEdgeNext), y: pNext.y };

        // Add irregularity to interior vertices
        const seed = row * 100 + col;
        const jitter = p.width * 0.08;

        const jitterPoint = (pt: { x: number; y: number }, s: number) => ({
          x: pt.x + (sr(s) - 0.5) * jitter,
          y: pt.y + (sr(s + 50) - 0.5) * jitter * 0.5,
        });

        // Only jitter interior points to keep path edges smooth
        const isLeftEdge = col === 0;
        const isRightEdge = col === numCols - 1;

        const tl = isLeftEdge ? topLeft : jitterPoint(topLeft, seed + 1);
        const tr = isRightEdge ? topRight : jitterPoint(topRight, seed + 2);
        const bl = isLeftEdge ? bottomLeft : jitterPoint(bottomLeft, seed + 3);
        const br = isRightEdge ? bottomRight : jitterPoint(bottomRight, seed + 4);

        // Add a midpoint on longer edges for more organic shapes
        const midLeft = {
          x: (tl.x + bl.x) / 2 + (isLeftEdge ? 0 : (sr(seed + 10) - 0.5) * jitter * 0.5),
          y: (tl.y + bl.y) / 2 + (sr(seed + 11) - 0.5) * jitter * 0.3,
        };
        const midRight = {
          x: (tr.x + br.x) / 2 + (isRightEdge ? 0 : (sr(seed + 12) - 0.5) * jitter * 0.5),
          y: (tr.y + br.y) / 2 + (sr(seed + 13) - 0.5) * jitter * 0.3,
        };

        stoneCells.push({
          points: [tl, tr, midRight, br, bl, midLeft],
          centerX: (tl.x + tr.x + bl.x + br.x) / 4,
          centerY: (tl.y + tr.y + bl.y + br.y) / 4,
          t,
        });
      }
    }

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const ox = (mx - 0.5) * 0.015;
      const oy = (my - 0.5) * 0.01;

      // Draw each stone cell
      stoneCells.forEach((cell, ci) => {
        const delay = cell.t * 0.6;
        const appear = Math.max(0, Math.min(1, (progress - delay) * 2.5));
        if (appear <= 0) return;

        const alpha = appear;

        ctx.beginPath();
        const pts = cell.points;
        ctx.moveTo((pts[0].x + ox) * w, (pts[0].y + oy) * h);
        for (let i = 1; i < pts.length; i++) {
          // Use slight curves between points for organic feel
          const prev = pts[i - 1];
          const curr = pts[i];
          const cpx = ((prev.x + curr.x) / 2 + ox) * w;
          const cpy = ((prev.y + curr.y) / 2 + oy) * h;
          ctx.quadraticCurveTo((prev.x + ox) * w, (prev.y + oy) * h, cpx, cpy);
        }
        const last = pts[pts.length - 1];
        const first = pts[0];
        ctx.quadraticCurveTo(
          (last.x + ox) * w, (last.y + oy) * h,
          (first.x + ox) * w, (first.y + oy) * h
        );
        ctx.closePath();

        // Stone fill — subtle gradient based on position for depth
        const depthFactor = 1 - cell.t * 0.5; // stones farther away are dimmer
        const baseBrightness = 60 + sr(ci * 7) * 30;
        const r = baseBrightness * 0.85;
        const g = baseBrightness * 0.8;
        const b = baseBrightness * 0.95;

        ctx.fillStyle = `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, ${0.25 * alpha * depthFactor})`;
        ctx.fill();

        // Stone border — the defining feature matching the logo
        ctx.strokeStyle = `rgba(160, 145, 175, ${0.35 * alpha * depthFactor})`;
        ctx.lineWidth = Math.max(0.8, 1.8 * depthFactor);
        ctx.lineJoin = "round";
        ctx.stroke();

        // Subtle inner highlight on top edge
        if (sr(ci * 3) > 0.5) {
          ctx.beginPath();
          ctx.moveTo((pts[0].x + ox) * w, (pts[0].y + oy) * h);
          ctx.lineTo((pts[1].x + ox) * w, (pts[1].y + oy) * h);
          ctx.strokeStyle = `rgba(200, 190, 215, ${0.12 * alpha * depthFactor})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      // Draw subtle outer path edges (like the bold outline in the logo)
      const drawPathEdge = (side: "left" | "right") => {
        const edgeProgress = Math.min(1, progress * 1.2);
        if (edgeProgress <= 0) return;

        ctx.beginPath();
        const steps = Math.floor(edgeProgress * numPoints);
        for (let i = 0; i <= steps; i++) {
          const p = pathPoints[i];
          const px = side === "left" ? p.x - p.width / 2 : p.x + p.width / 2;
          const py = p.y;
          if (i === 0) ctx.moveTo((px + ox) * w, (py + oy) * h);
          else ctx.lineTo((px + ox) * w, (py + oy) * h);
        }
        ctx.strokeStyle = `rgba(150, 135, 170, ${0.3 * Math.min(1, progress * 2)})`;
        ctx.lineWidth = 2.5;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.stroke();
      };

      drawPathEdge("left");
      drawPathEdge("right");

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
