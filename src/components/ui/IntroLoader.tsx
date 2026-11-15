"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Sparkles, Terminal, Activity, X } from "lucide-react";

export default function IntroLoader() {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  const statusMessages = [
    "INITIALIZING 3D WEBGL CORE...",
    "CALIBRATING MARKETPLACE TELEMETRY...",
    "CONNECTING AMAZON & FLIPKART APIS...",
    "SYNCING MEESHO & SHOPIFY PROTOCOLS...",
    "UNIQUOVA GROWTH ENGINE ARMED.",
  ];

  const handleFinish = useCallback(() => {
    setIsDone(true);
    document.body.style.overflow = "";
    sessionStorage.setItem("uniquova_intro_seen", "true");
    setTimeout(() => {
      setShouldRender(false);
    }, 750);
  }, []);

  const skipLoader = useCallback(() => {
    setProgress(100);
    setStatusIndex(statusMessages.length - 1);
    handleFinish();
  }, [handleFinish, statusMessages.length]);

  useEffect(() => {
    // Check if user already saw the loader in this session
    const hasSeenLoader = sessionStorage.getItem("uniquova_intro_seen");
    if (hasSeenLoader) {
      setShouldRender(false);
      return;
    }

    // Lock body scroll while loader is active
    document.body.style.overflow = "hidden";

    // Allow user to press ESC to skip immediately
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        skipLoader();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    // Cinematic non-linear progress engine
    let currentProgress = 0;
    const interval = setInterval(() => {
      // Non-linear organic progress increments
      let increment = 2;
      if (currentProgress < 20) {
        increment = Math.floor(Math.random() * 4) + 3; // Fast start
      } else if (currentProgress < 55) {
        increment = Math.floor(Math.random() * 3) + 2; // Mid cadence
      } else if (currentProgress < 85) {
        increment = Math.floor(Math.random() * 4) + 2; // Acceleration
      } else {
        increment = Math.floor(Math.random() * 3) + 3; // Final sprint
      }

      currentProgress = Math.min(currentProgress + increment, 100);
      setProgress(currentProgress);

      const msgIdx = Math.min(
        Math.floor((currentProgress / 100) * statusMessages.length),
        statusMessages.length - 1
      );
      setStatusIndex(msgIdx);

      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          handleFinish();
        }, 250);
      }
    }, 38);

    return () => {
      clearInterval(interval);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleFinish, skipLoader]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col justify-between p-6 sm:p-12 bg-brand-black text-white select-none transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
        isDone ? "-translate-y-full opacity-90 pointer-events-none" : "translate-y-0 opacity-100"
      }`}
      aria-label="Loading UNIQUOVA Agency Experience"
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-lavender/15 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute inset-0 dot-grid-dark opacity-35 pointer-events-none" />

      {/* Top Header: Brand Emblem & Skip Button */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center font-space font-extrabold text-sm text-lavender shadow-glowDark animate-pulse">
            UQ
          </div>
          <div>
            <span className="font-space font-extrabold text-lg tracking-wider text-white block leading-none">
              UNIQUOVA
            </span>
            <span className="font-inter text-[9.5px] uppercase tracking-widest text-neutral-400 font-semibold">
              Growth Agency OS
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-space text-lavender">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>LIVE OPERATOR SYNC</span>
          </div>

          {/* Quick Skip Button */}
          <button
            onClick={skipLoader}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-[11px] font-space font-semibold text-neutral-300 hover:text-white transition-all cursor-pointer"
            aria-label="Skip intro animation"
          >
            <span>Skip [ESC]</span>
            <X className="w-3.5 h-3.5 text-lavender" />
          </button>
        </div>
      </div>

      {/* Center: Hero Monogram, Audio Spectrum Wave & Expanding Title */}
      <div className="relative z-10 my-auto text-center space-y-6">
        <div className="relative inline-block">
          <span className="font-space font-black text-6xl sm:text-8xl md:text-9xl text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-100 to-lavender/50 tracking-tighter drop-shadow-2xl block animate-pulse-subtle">
            UNIQUOVA
          </span>
          <div className="absolute -inset-4 bg-lavender/20 blur-3xl rounded-full -z-10" />
        </div>

        <p className="font-inter text-xs sm:text-sm text-neutral-400 tracking-widest uppercase max-w-lg mx-auto font-medium">
          Premier E-Commerce Account Management & Marketplace Growth Ecosystem
        </p>

        {/* Dynamic Graphic Equalizer Audio/Telemetry Bars */}
        <div className="flex items-center justify-center gap-1.5 h-6 py-1">
          {[40, 75, 100, 60, 90, 45, 80, 100, 50, 70, 95, 30].map((height, i) => (
            <div
              key={i}
              className="w-1 bg-lavender/70 rounded-full transition-all duration-150 animate-pulse"
              style={{
                height: `${Math.max(20, (height * progress) / 100)}%`,
                animationDelay: `${i * 80}ms`,
              }}
            />
          ))}
        </div>

        {/* Live Status Telemetry Line */}
        <div className="flex items-center justify-center gap-2 text-xs font-space text-lavender pt-1">
          <Terminal className="w-3.5 h-3.5 text-lavender animate-pulse" />
          <span className="tracking-wider font-mono">{statusMessages[statusIndex]}</span>
        </div>
      </div>

      {/* Bottom: High-Tech Progress Counter & Bar */}
      <div className="relative z-10 max-w-xl mx-auto w-full space-y-3">
        <div className="flex items-baseline justify-between font-space text-xs text-neutral-400">
          <span className="flex items-center gap-1.5 text-lavender font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-lavender" />
            LOADING OPERATIONAL CORES
          </span>
          <span className="font-bold text-3xl text-white tracking-tight font-mono">
            {progress.toString().padStart(2, "0")}
            <span className="text-lavender text-base font-normal">%</span>
          </span>
        </div>

        {/* Dual-Glow Progress Bar */}
        <div className="relative w-full h-2 rounded-full bg-white/10 overflow-hidden border border-white/5">
          <div
            className="h-full bg-gradient-to-r from-lavender/50 via-lavender to-white rounded-full transition-all duration-100 ease-out shadow-[0_0_12px_rgba(185,167,232,0.8)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center justify-between text-[10px] text-neutral-500 font-inter pt-1 font-mono">
          <span>AMAZON • FLIPKART • MEESHO • SHOPIFY</span>
          <span>HUMAN OPERATOR PROTOCOL</span>
        </div>
      </div>
    </div>
  );
}
