"use client";

import React, { useEffect, useRef, useState } from "react";

interface Spark {
  x: number;
  y: number;
  size: number;
  opacity: number;
  vx: number;
  vy: number;
  color: string;
}

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!isFinePointer || prefersReducedMotion) return;

    setIsVisible(true);

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;

    const sparks: Spark[] = [];
    const colors = ["#B9A7E8", "#FFFFFF", "#9D84E0", "#E9E7EF"];

    const canvas = canvasRef.current;
    const ctx = canvas ? canvas.getContext("2d") : null;

    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Add a spark on movement
      if (Math.random() > 0.4) {
        sparks.push({
          x: mouseX + (Math.random() - 0.5) * 8,
          y: mouseY + (Math.random() - 0.5) * 8,
          size: Math.random() * 2.8 + 1,
          opacity: 0.9,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5 - 0.5,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }

      // Detect hover over interactive elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest("a, button, input, select, textarea, [role='button'], .cursor-pointer");
        setIsHovering(!!interactive);
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    // Animation Loop for Smooth Ring Lag and Spark Physics
    let animId: number;

    const render = () => {
      animId = requestAnimationFrame(render);

      // Smooth interpolation for the trailing ring
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      // Render sparks on canvas
      if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = sparks.length - 1; i >= 0; i--) {
          const sp = sparks[i];
          sp.x += sp.vx;
          sp.y += sp.vy;
          sp.opacity -= 0.025;
          sp.size *= 0.96;

          if (sp.opacity <= 0 || sp.size <= 0.2) {
            sparks.splice(i, 1);
            continue;
          }

          ctx.save();
          ctx.beginPath();
          ctx.arc(sp.x, sp.y, sp.size, 0, Math.PI * 2);
          ctx.fillStyle = sp.color;
          ctx.globalAlpha = sp.opacity;
          ctx.shadowBlur = 8;
          ctx.shadowColor = sp.color;
          ctx.fill();
          ctx.restore();
        }
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Particle Canvas for Micro Sparks */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[9998]"
        aria-hidden="true"
      />

      {/* Main Center Dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 rounded-full bg-lavender pointer-events-none z-[9999] transition-transform duration-75 shadow-glow"
        aria-hidden="true"
      />

      {/* Trailing Luminous Spring Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border transition-[width,height,background-color,border-color] duration-200 ease-out flex items-center justify-center ${
          isHovering
            ? "w-12 h-12 -ml-6 -mt-6 border-lavender bg-lavender/15 backdrop-blur-[1px] shadow-glow"
            : isClicking
            ? "w-7 h-7 -ml-3.5 -mt-3.5 border-white bg-white/20"
            : "w-8 h-8 -ml-4 -mt-4 border-lavender/50 bg-lavender/5"
        }`}
        aria-hidden="true"
      >
        {isHovering && (
          <div className="w-1.5 h-1.5 rounded-full bg-white shadow-glow animate-ping" />
        )}
      </div>
    </>
  );
}
