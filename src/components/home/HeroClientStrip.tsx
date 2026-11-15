"use client";

import React from "react";

export default function HeroClientStrip() {
  return (
    <div className="w-full max-w-5xl mx-auto mt-10 lg:mt-6 px-4">
      <div className="rounded-full bg-white/75 backdrop-blur-xl border border-white/90 shadow-[0_12px_40px_rgba(108,56,255,0.06),0_2px_8px_rgba(0,0,0,0.03)] px-6 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-6 transition-all duration-300 hover:shadow-[0_16px_50px_rgba(108,56,255,0.1)]">
        {/* Left Badge: "● Trusted By / Leading brands & businesses" */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
            <span className="font-space font-bold text-xs sm:text-sm text-brand-black">
              Trusted By
            </span>
          </div>
          <div className="hidden sm:block h-3.5 w-px bg-neutral-300" />
          <span className="hidden sm:inline-block font-inter text-[11px] text-neutral-500 font-medium">
            Leading brands & businesses
          </span>
        </div>

        {/* Divider */}
        <div className="hidden md:block h-6 w-px bg-neutral-200" />

        {/* Logos Container */}
        <div className="flex-1 flex items-center justify-between gap-6 sm:gap-8 overflow-x-auto no-scrollbar py-1">
          {/* Google */}
          <div className="shrink-0 flex items-center group cursor-pointer transition-transform duration-200 hover:scale-105">
            <span className="font-space font-bold text-base sm:text-lg tracking-tight text-neutral-700 group-hover:text-brand-black transition-colors flex items-center">
              <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">o</span>
              <span className="text-[#FBBC05]">o</span>
              <span className="text-[#4285F4]">g</span>
              <span className="text-[#34A853]">l</span>
              <span className="text-[#EA4335]">e</span>
            </span>
          </div>

          {/* Meta */}
          <div className="shrink-0 flex items-center gap-1.5 group cursor-pointer transition-transform duration-200 hover:scale-105">
            <svg className="w-5 h-5 text-[#0668E1]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 7.2c-2.3 0-3.6 1.4-4.8 2.8C6 11.4 5.1 12.3 3.6 12.3c-1.3 0-2.1-.8-2.1-2.1 0-1.8 1.4-3.4 3.6-3.4 1.5 0 2.7.7 3.8 1.8 1.1-1.1 2.3-1.8 3.8-1.8 1.5 0 2.7.7 3.8 1.8 1.1-1.1 2.3-1.8 3.8-1.8 2.2 0 3.6 1.6 3.6 3.4 0 1.3-.8 2.1-2.1 2.1-1.5 0-2.4-.9-3.6-2.3-1.2-1.4-2.5-2.8-4.8-2.8zm0 2.8c1.6 0 2.6 1 3.7 2.2 1.2 1.3 2.3 2.4 4.3 2.4 2.5 0 4-1.8 4-4.2 0-2.8-2.1-4.8-5-4.8-1.9 0-3.3.9-4.5 2.2C13.3 6.5 11.9 5.6 10 5.6c-2.9 0-5 2-5 4.8 0 2.4 1.5 4.2 4 4.2 2 0 3.1-1.1 4.3-2.4 1.1-1.2 2.1-2.2 3.7-2.2z" />
            </svg>
            <span className="font-space font-bold text-sm sm:text-base text-neutral-700 group-hover:text-brand-black transition-colors">
              Meta
            </span>
          </div>

          {/* Microsoft */}
          <div className="shrink-0 flex items-center gap-1.5 group cursor-pointer transition-transform duration-200 hover:scale-105">
            <div className="grid grid-cols-2 gap-0.5 w-3.5 h-3.5">
              <div className="bg-[#F25022] rounded-[1px]" />
              <div className="bg-[#7FBA00] rounded-[1px]" />
              <div className="bg-[#00A4EF] rounded-[1px]" />
              <div className="bg-[#FFB900] rounded-[1px]" />
            </div>
            <span className="font-space font-semibold text-xs sm:text-sm text-neutral-700 group-hover:text-brand-black transition-colors">
              Microsoft
            </span>
          </div>

          {/* Amazon */}
          <div className="shrink-0 flex items-center group cursor-pointer transition-transform duration-200 hover:scale-105">
            <span className="font-space font-extrabold text-sm sm:text-base tracking-tight text-neutral-800 group-hover:text-brand-black transition-colors relative">
              amazon
              {/* Smile curved underline */}
              <svg className="absolute -bottom-1 left-0 w-full h-1.5 text-[#FF9900]" viewBox="0 0 50 8" fill="none">
                <path d="M 2 2 Q 25 9 48 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M 45 4 L 49 2 L 47 6 Z" fill="currentColor" />
              </svg>
            </span>
          </div>

          {/* YouTube */}
          <div className="shrink-0 flex items-center gap-1.5 group cursor-pointer transition-transform duration-200 hover:scale-105">
            <div className="w-5 h-3.5 rounded bg-[#FF0000] flex items-center justify-center">
              <div className="w-0 h-0 border-y-[3px] border-y-transparent border-l-[5px] border-l-white ml-0.5" />
            </div>
            <span className="font-space font-bold text-xs sm:text-sm text-neutral-800 group-hover:text-brand-black transition-colors">
              YouTube
            </span>
          </div>

          {/* Adobe */}
          <div className="shrink-0 flex items-center gap-1.5 group cursor-pointer transition-transform duration-200 hover:scale-105">
            <svg className="w-4 h-4 text-[#FA0F00]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.5 3H22v18h-4.3l-3.2-8.3zM9.5 3H2v18h4.3l3.2-8.3zM12 9.5l3.8 9.5h-2.7l-1.1-2.9h-3.9l1.9-4.7z" />
            </svg>
            <span className="font-space font-extrabold text-xs sm:text-sm tracking-wide text-neutral-800 group-hover:text-brand-black transition-colors">
              Adobe
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
