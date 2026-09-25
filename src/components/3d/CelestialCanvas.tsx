"use client";

import React, { useEffect, useRef } from "react";

export const CelestialCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    // 3D Geometry: Icosahedron vertices & edges
    const phi = (1 + Math.sqrt(5)) / 2;
    const rawVertices: [number, number, number][] = [
      [-1, phi, 0],
      [1, phi, 0],
      [-1, -phi, 0],
      [1, -phi, 0],
      [0, -1, phi],
      [0, 1, phi],
      [0, -1, -phi],
      [0, 1, -phi],
      [phi, 0, -1],
      [phi, 0, 1],
      [-phi, 0, -1],
      [-phi, 0, 1],
    ];

    // Normalize vertices to unit sphere
    const vertices = rawVertices.map(([x, y, z]) => {
      const len = Math.sqrt(x * x + y * y + z * z);
      return [x / len, y / len, z / len] as [number, number, number];
    });

    // Edges connecting vertices with distance threshold
    const edges: [number, number][] = [];
    for (let i = 0; i < vertices.length; i++) {
      for (let j = i + 1; j < vertices.length; j++) {
        const [x1, y1, z1] = vertices[i];
        const [x2, y2, z2] = vertices[j];
        const dist = Math.hypot(x1 - x2, y1 - y2, z1 - z2);
        if (dist < 1.1) {
          edges.push([i, j]);
        }
      }
    }

    // Triangular faces for subtle shading
    const faces: [number, number, number][] = [
      [0, 11, 5],
      [0, 5, 1],
      [0, 1, 7],
      [0, 7, 10],
      [0, 10, 11],
      [1, 5, 9],
      [5, 11, 4],
      [11, 10, 2],
      [10, 7, 6],
      [7, 1, 8],
      [3, 9, 4],
      [3, 4, 2],
      [3, 2, 6],
      [3, 6, 8],
      [3, 8, 9],
      [4, 9, 5],
      [2, 4, 11],
      [6, 2, 10],
      [8, 6, 7],
      [9, 8, 1],
    ];

    // Starfield background particles
    const stars: { x: number; y: number; z: number; size: number; alpha: number }[] = [];
    for (let i = 0; i < 90; i++) {
      stars.push({
        x: (Math.random() - 0.5) * 800,
        y: (Math.random() - 0.5) * 800,
        z: (Math.random() - 0.5) * 800,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.7 + 0.3,
      });
    }

    // Rotation & mouse interaction state
    let rotX = 0.3;
    let rotY = 0.4;
    let targetRotX = 0.3;
    let targetRotY = 0.4;
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) {
        const rect = canvas.getBoundingClientRect();
        const nx = (e.clientX - rect.left) / width - 0.5;
        const ny = (e.clientY - rect.top) / height - 0.5;
        targetRotY += nx * 0.02;
        targetRotX += ny * 0.02;
        return;
      }
      const dx = e.clientX - prevMouseX;
      const dy = e.clientY - prevMouseY;
      targetRotY += dx * 0.008;
      targetRotX += dy * 0.008;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    // Touch handlers for mobile devices
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches.length === 1) {
        const dx = e.touches[0].clientX - prevMouseX;
        const dy = e.touches[0].clientY - prevMouseY;
        targetRotY += dx * 0.01;
        targetRotX += dy * 0.01;
        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;
      }
    };

    const onTouchEnd = () => {
      isDragging = false;
    };

    canvas.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);

    // Orbital satellites state
    const satellites = [
      { radius: 180, tiltX: 0.6, tiltZ: 0.4, speed: 0.015, angle: 0, color: "#818cf8", size: 4 },
      { radius: 220, tiltX: -0.7, tiltZ: 0.5, speed: 0.01, angle: Math.PI / 2, color: "#38bdf8", size: 3.5 },
      { radius: 260, tiltX: 0.3, tiltZ: -0.8, speed: 0.008, angle: Math.PI, color: "#c084fc", size: 4.5 },
    ];

    let time = 0;

    // Render loop
    const render = () => {
      time += 0.016;
      ctx.clearRect(0, 0, width, height);

      // Smooth rotation interpolation
      targetRotY += 0.004;
      targetRotX += 0.0015;
      rotX += (targetRotX - rotX) * 0.08;
      rotY += (targetRotY - rotY) * 0.08;

      const cx = width / 2;
      const cy = height / 2;
      const coreScale = Math.min(width, height) * 0.22;

      // Draw background ambient starfield
      stars.forEach((star) => {
        // Rotate star coordinates
        const x1 = star.x * Math.cos(rotY * 0.3) - star.z * Math.sin(rotY * 0.3);
        const z1 = star.z * Math.cos(rotY * 0.3) + star.x * Math.sin(rotY * 0.3);
        const y1 = star.y * Math.cos(rotX * 0.3) - z1 * Math.sin(rotX * 0.3);

        const fov = 400;
        const scale = fov / (fov + z1 + 300);
        if (scale > 0) {
          const px = cx + x1 * scale;
          const py = cy + y1 * scale;
          const twinkle = 0.5 + 0.5 * Math.sin(time * 2 + star.size * 5);
          ctx.fillStyle = `rgba(147, 197, 253, ${star.alpha * twinkle * 0.5})`;
          ctx.beginPath();
          ctx.arc(px, py, star.size * scale, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // 3D Matrix Transformations
      const rotate3D = (x: number, y: number, z: number): [number, number, number] => {
        // Rotate Y
        const cosY = Math.cos(rotY);
        const sinY = Math.sin(rotY);
        const x1 = x * cosY - z * sinY;
        const z1 = z * cosY + x * sinY;

        // Rotate X
        const cosX = Math.cos(rotX);
        const sinX = Math.sin(rotX);
        const y2 = y * cosX - z1 * sinX;
        const z2 = z1 * cosX + y * sinX;

        return [x1, y2, z2];
      };

      // Project 3D vertex to 2D screen
      const projectedVertices = vertices.map(([x, y, z]) => {
        const [rx, ry, rz] = rotate3D(x * coreScale, y * coreScale, z * coreScale);
        const fov = 600;
        const scale = fov / (fov + rz);
        return {
          x: cx + rx * scale,
          y: cy + ry * scale,
          z: rz,
          scale,
        };
      });

      // Draw subtle shaded faces for faceted depth
      faces.forEach(([i1, i2, i3]) => {
        const v1 = projectedVertices[i1];
        const v2 = projectedVertices[i2];
        const v3 = projectedVertices[i3];

        // Normal check for backface culling / lighting
        const avgZ = (v1.z + v2.z + v3.z) / 3;
        const normalZ =
          (v2.x - v1.x) * (v3.y - v1.y) - (v2.y - v1.y) * (v3.x - v1.x);

        if (normalZ > 0) {
          const brightness = Math.max(0.04, Math.min(0.25, (avgZ + 150) / 300));
          ctx.fillStyle = `rgba(99, 102, 241, ${brightness * 0.6})`;
          ctx.beginPath();
          ctx.moveTo(v1.x, v1.y);
          ctx.lineTo(v2.x, v2.y);
          ctx.lineTo(v3.x, v3.y);
          ctx.closePath();
          ctx.fill();
        }
      });

      // Draw core wireframe edges with glowing gradient
      ctx.lineWidth = 1.2;
      edges.forEach(([i, j]) => {
        const v1 = projectedVertices[i];
        const v2 = projectedVertices[j];
        const avgZ = (v1.z + v2.z) / 2;
        const alpha = Math.max(0.15, Math.min(0.85, (avgZ + 120) / 240));

        ctx.strokeStyle = `rgba(129, 140, 248, ${alpha})`;
        ctx.beginPath();
        ctx.moveTo(v1.x, v1.y);
        ctx.lineTo(v2.x, v2.y);
        ctx.stroke();
      });

      // Draw vertices nodes
      projectedVertices.forEach((v) => {
        const alpha = Math.max(0.3, Math.min(1, (v.z + 100) / 200));
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(v.x, v.y, 2.5 * v.scale, 0, Math.PI * 2);
        ctx.fill();

        // Node glow aura
        ctx.fillStyle = `rgba(99, 102, 241, ${alpha * 0.5})`;
        ctx.beginPath();
        ctx.arc(v.x, v.y, 6 * v.scale, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw 3D Celestial Orbital Rings
      satellites.forEach((sat, idx) => {
        sat.angle += sat.speed;
        const ringSegments = 64;
        const ringPoints: { x: number; y: number; z: number }[] = [];

        for (let i = 0; i <= ringSegments; i++) {
          const theta = (i / ringSegments) * Math.PI * 2;
          const rx = Math.cos(theta) * sat.radius;
          const ry = 0;
          const rz = Math.sin(theta) * sat.radius;

          // Apply orbital tilt
          const cosTx = Math.cos(sat.tiltX);
          const sinTx = Math.sin(sat.tiltX);
          const y1 = ry * cosTx - rz * sinTx;
          const z1 = rz * cosTx + ry * sinTx;

          const cosTz = Math.cos(sat.tiltZ);
          const sinTz = Math.sin(sat.tiltZ);
          const x2 = rx * cosTz - y1 * sinTz;
          const y2 = y1 * cosTz + rx * sinTz;

          const [tx, ty, tz] = rotate3D(x2, y2, z1);
          const fov = 600;
          const scale = fov / (fov + tz);

          ringPoints.push({
            x: cx + tx * scale,
            y: cy + ty * scale,
            z: tz,
          });
        }

        // Draw ring path
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = idx === 0 ? "rgba(99, 102, 241, 0.35)" : idx === 1 ? "rgba(6, 182, 212, 0.3)" : "rgba(168, 85, 247, 0.25)";
        ringPoints.forEach((pt, pIdx) => {
          if (pIdx === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        });
        ctx.stroke();

        // Calculate revolving satellite position
        const satX = Math.cos(sat.angle) * sat.radius;
        const satY = 0;
        const satZ = Math.sin(sat.angle) * sat.radius;

        const cosTx = Math.cos(sat.tiltX);
        const sinTx = Math.sin(sat.tiltX);
        const sy1 = satY * cosTx - satZ * sinTx;
        const sz1 = satZ * cosTx + satY * sinTx;

        const cosTz = Math.cos(sat.tiltZ);
        const sinTz = Math.sin(sat.tiltZ);
        const sx2 = satX * cosTz - sy1 * sinTz;
        const sy2 = sy1 * cosTz + satX * sinTz;

        const [stx, sty, stz] = rotate3D(sx2, sy2, sz1);
        const fov = 600;
        const sScale = fov / (fov + stz);
        const spx = cx + stx * sScale;
        const spy = cy + sty * sScale;

        // Satellite Glow & Core
        const satAlpha = Math.max(0.4, Math.min(1, (stz + 200) / 400));
        ctx.fillStyle = sat.color;
        ctx.shadowColor = sat.color;
        ctx.shadowBlur = 14;
        ctx.beginPath();
        ctx.arc(spx, spy, sat.size * sScale, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      canvas.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <div className="celestial-canvas-container" title="Interactive 3D Celestial Core — Drag to rotate">
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          pointerEvents: "auto",
        }}
      />
    </div>
  );
};
