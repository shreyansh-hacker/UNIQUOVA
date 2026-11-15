"use client";

import React, { useState, useEffect } from "react";

interface RotatingText3DProps {
  prefix?: string;
  words: string[];
  interval?: number;
  className?: string;
}

export default function RotatingText3D({
  prefix = "Your",
  words = ["Growth.", "Exponential Scale.", "Category Dominance.", "Margin Expansion."],
  interval = 3200,
  className = "",
}: RotatingText3DProps) {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 400); // mid-point flip
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span className={`inline-flex items-baseline flex-wrap gap-x-3 ${className}`}>
      {prefix && <span>{prefix}</span>}
      <span
        style={{ perspective: "1000px" }}
        className="relative inline-block overflow-hidden align-baseline min-w-[200px] sm:min-w-[320px] md:min-w-[420px] h-[1.15em]"
      >
        <span
          className={`inline-block font-space font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-lavender-deep via-lavender to-brand-black transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isAnimating
              ? "opacity-0 -translate-y-8 rotate-x-90 blur-sm scale-95"
              : "opacity-100 translate-y-0 rotate-x-0 blur-0 scale-100"
          }`}
        >
          {words[index]}
        </span>
      </span>
    </span>
  );
}
