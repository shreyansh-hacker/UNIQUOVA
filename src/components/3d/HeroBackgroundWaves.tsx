"use client";

import React from "react";

export default function HeroBackgroundWaves() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 select-none">
      {/* Dynamic Ambient Lavender/Violet Radial Glows */}
      <div className="absolute -top-32 -left-32 w-[650px] h-[650px] rounded-full bg-gradient-to-br from-[#E2D9FC]/70 via-[#D4C3FA]/40 to-transparent blur-[90px]" />
      <div className="absolute top-1/4 -right-24 w-[750px] h-[750px] rounded-full bg-gradient-to-bl from-[#C4B5FD]/50 via-[#DDD6FE]/30 to-transparent blur-[110px]" />
      <div className="absolute -bottom-40 left-1/3 w-[800px] h-[600px] rounded-full bg-gradient-to-t from-[#B9A7E8]/40 via-[#E9E7EF]/20 to-transparent blur-[120px]" />

      {/* SVG Liquid Organic Ribbon Waves matching mockup curves */}
      <svg
        className="absolute inset-0 w-full h-full object-cover opacity-85"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Top-Right to Center sweeping wave gradient */}
          <linearGradient id="waveGradTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EDE9FE" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#DDD6FE" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#C4B5FD" stopOpacity="0.2" />
          </linearGradient>

          {/* Deep Violet bottom-right contour gradient */}
          <linearGradient id="waveGradBottom" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#4F21D4" stopOpacity="0.22" />
            <stop offset="40%" stopColor="#7C3AED" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.03" />
          </linearGradient>

          {/* Bottom swoop wave gradient */}
          <linearGradient id="waveGradBottomSwoop" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#5B21B6" stopOpacity="0.18" />
            <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#DDD6FE" stopOpacity="0.0" />
          </linearGradient>
        </defs>

        {/* Top-Left sweeping wave */}
        <path
          d="M-100,0 C300,120 700,40 1100,160 C1300,220 1450,180 1600,120 L1600,0 L-100,0 Z"
          fill="url(#waveGradTop)"
        />

        {/* Right middle contour wave wrapping behind the 3D scene */}
        <path
          d="M800,200 C1050,160 1300,320 1500,480 C1600,560 1550,750 1440,900 L950,900 C1100,750 1000,520 850,380 C780,310 740,240 800,200 Z"
          fill="url(#waveGradBottom)"
        />

        {/* Bottom smooth liquid banner wave */}
        <path
          d="M-50,900 C300,820 650,880 980,820 C1200,780 1380,840 1500,900 L-50,900 Z"
          fill="url(#waveGradBottomSwoop)"
        />
      </svg>
    </div>
  );
}
