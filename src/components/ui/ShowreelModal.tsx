"use client";

import React, { useEffect } from "react";
import { X, Play, Volume2, Sparkles, CheckCircle2 } from "lucide-react";
import UqLogo from "@/components/ui/UqLogo";

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ShowreelModal({ isOpen, onClose }: ShowreelModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-fade-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-brand-black/60 backdrop-blur-xl transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl rounded-3xl bg-brand-charcoal text-white border border-white/15 shadow-[0_25px_70px_rgba(0,0,0,0.5)] overflow-hidden z-10 flex flex-col animate-scale-up">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <UqLogo size="sm" variant="light" showTagline={false} />
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-primary/20 text-purple-300 border border-primary/30">
              Agency Showreel 2026
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Display Container */}
        <div className="relative aspect-video w-full bg-gradient-to-br from-[#120E22] via-[#1A1434] to-[#0D0B14] flex items-center justify-center overflow-hidden group">
          {/* Ambient Purple Glow */}
          <div className="absolute w-96 h-96 bg-primary/30 rounded-full blur-[100px] pointer-events-none" />

          {/* Dynamic Motion Graphics Grid inside player */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 pointer-events-none" />

          {/* Central Animated Badge & Branding */}
          <div className="text-center z-10 space-y-4 px-6">
            <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-gradient-to-tr from-primary to-purple-400 p-[2px] shadow-[0_0_40px_rgba(108,56,255,0.6)] cursor-pointer hover:scale-105 transition-transform flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-brand-black flex items-center justify-center text-white">
                <Play className="w-8 h-8 sm:w-10 sm:h-10 ml-1 text-purple-300" />
              </div>
            </div>

            <div>
              <h3 className="font-space font-bold text-xl sm:text-2xl text-white">
                Crafting High-Growth Digital Experiences
              </h3>
              <p className="font-inter text-neutral-400 text-xs sm:text-sm max-w-md mx-auto mt-1">
                E-Commerce Scaling • High-Performance Web • Mobile Apps • Brand Strategy
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs text-neutral-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 200+ Projects Launched
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> $42M+ GMV Generated
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 4.9/5 Rating
              </span>
            </div>
          </div>

          {/* Bottom video controls mock bar */}
          <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-between text-xs text-neutral-400">
            <div className="flex items-center gap-3">
              <span className="text-white font-mono">01:42</span>
              <div className="w-32 sm:w-64 h-1.5 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-primary rounded-full animate-pulse" />
              </div>
              <span className="font-mono">02:30</span>
            </div>

            <div className="flex items-center gap-3">
              <Volume2 className="w-4 h-4 text-neutral-400" />
              <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] text-white">4K ULTRA HD</span>
            </div>
          </div>
        </div>

        {/* Modal Footer info */}
        <div className="p-4 sm:p-5 bg-brand-charcoal/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-400">
          <p>Interested in a custom project consultation for your brand?</p>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-primary hover:bg-primary-hover text-white font-medium text-xs transition-colors shrink-0"
          >
            Book Free Growth Session →
          </button>
        </div>
      </div>
    </div>
  );
}
