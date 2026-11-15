"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Play,
  Star,
  ShoppingCart,
  Code2,
  Smartphone,
  Palette,
  PenTool,
} from "lucide-react";
import Hero3DLaptop from "@/components/3d/Hero3DLaptop";
import HeroBackgroundWaves from "@/components/3d/HeroBackgroundWaves";
import HeroClientStrip from "@/components/home/HeroClientStrip";
import ShowreelModal from "@/components/ui/ShowreelModal";
import Card3DTilt from "@/components/ui/Card3DTilt";
import { siteConfig } from "@/config/site";
import { useAuditModal } from "@/context/AuditModalContext";

export default function Hero() {
  const [showreelOpen, setShowreelOpen] = useState(false);
  const { openAuditModal } = useAuditModal();

  // Social proof user avatars (diverse, professional portraits)
  const avatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80",
  ];

  return (
    <>
      <section className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden pt-4 pb-12 lg:pt-8 lg:pb-16 select-none">
        {/* Background Liquid Waves matching mockup */}
        <HeroBackgroundWaves />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex-1 flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* LEFT COLUMN: Editorial Typography, Copy & CTAs */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-6 pt-2 lg:pt-0">
              {/* Pill Badge: "● Full-Service Digital Agency" */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md shadow-sm w-fit transition-transform hover:scale-105 cursor-pointer">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="font-inter text-xs font-semibold text-primary tracking-wide">
                  Full-Service Digital Agency
                </span>
              </div>

              {/* Main Headline: "Your Vision, Our Digital Expertise." */}
              <h1 className="font-space font-extrabold text-4xl sm:text-5xl md:text-6xl xl:text-[4.2rem] tracking-tight text-brand-black leading-[1.08]">
                <span className="block text-brand-black">Your Vision,</span>
                <span className="block">
                  Our{" "}
                  <span className="relative inline-block text-primary">
                    Digital
                    {/* Hand-drawn Purple Swoosh Brush Underline */}
                    <svg
                      className="absolute -bottom-2.5 sm:-bottom-3.5 left-0 w-full h-3.5 sm:h-4.5 text-primary pointer-events-none drop-shadow-[0_2px_4px_rgba(108,56,255,0.4)]"
                      viewBox="0 0 160 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M 4 13 C 45 4, 110 3, 156 12"
                        stroke="currentColor"
                        strokeWidth="4.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>{" "}
                  Expertise.
                </span>
              </h1>

              {/* Supporting Copy */}
              <p className="font-inter text-neutral-600 text-base sm:text-lg md:text-[1.12rem] max-w-xl leading-relaxed font-normal">
                {siteConfig.heroSubtitle}
              </p>

              {/* Action Buttons Row */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                {/* Primary Button: Explore Our Services -> */}
                <Link
                  href="/services"
                  className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-primary via-[#7846FF] to-[#8F66FF] text-white font-inter text-sm sm:text-base font-semibold shadow-[0_10px_30px_rgba(108,56,255,0.38)] hover:shadow-[0_14px_40px_rgba(108,56,255,0.55)] hover:scale-[1.02] active:scale-95 transition-all duration-200"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                {/* Secondary Button: ▶ Watch Our Work */}
                <button
                  type="button"
                  onClick={() => setShowreelOpen(true)}
                  className="group relative inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full bg-white/80 hover:bg-white backdrop-blur-md border border-white/90 text-brand-black font-inter text-sm sm:text-base font-semibold shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] active:scale-95 transition-all duration-200"
                >
                  <div className="w-5 h-5 rounded-full bg-brand-black flex items-center justify-center text-white group-hover:bg-primary transition-colors">
                    <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                  </div>
                  <span>Watch Our Work</span>
                </button>
              </div>

              {/* Social Proof Strip */}
              <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6">
                {/* 4 Overlapping Avatar Photos */}
                <div className="flex items-center -space-x-2.5 overflow-hidden">
                  {avatars.map((src, idx) => (
                    <img
                      key={idx}
                      src={src}
                      alt={`Client ${idx + 1}`}
                      className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover shadow-sm"
                    />
                  ))}
                </div>

                {/* Text & Ratings */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-inter">
                  <span className="font-semibold text-brand-black">
                    Trusted by 200+ Happy Clients
                  </span>

                  <span className="hidden sm:inline-block text-neutral-300">|</span>

                  <div className="flex items-center gap-1.5">
                    <div className="flex items-center text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="font-semibold text-brand-black">4.9/5</span>
                    <span className="text-neutral-500 font-normal">(Client Rating)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: 3D Laptop with Swirling Torus & 5 Floating Glass Cards */}
            <div className="lg:col-span-6 relative flex items-center justify-center min-h-[480px] sm:min-h-[580px] lg:min-h-[640px]">
              {/* Three.js 3D Laptop Canvas */}
              <div className="w-full h-full absolute inset-0 z-0">
                <Hero3DLaptop />
              </div>

              {/* 5 FLOATING FROSTED GLASS CARDS (Hover 3D Tilt + Floating Animation) */}
              <div className="absolute inset-0 pointer-events-none z-10">
                {/* CARD 1: E-commerce Solutions (Top Left) */}
                <div className="absolute top-2 sm:top-6 left-1 sm:left-4 lg:-left-2 pointer-events-auto animate-float-1">
                  <Card3DTilt maxTilt={8} scale={1.04}>
                    <div className="rounded-2xl p-3.5 sm:p-4 bg-white/75 backdrop-blur-xl border border-white/90 shadow-[0_12px_36px_rgba(108,56,255,0.09),0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_18px_45px_rgba(108,56,255,0.18)] transition-all flex flex-col gap-1 w-44 sm:w-48 cursor-pointer group">
                      <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <ShoppingCart className="w-4 h-4 text-primary" />
                      </div>
                      <h3 className="font-space font-bold text-xs sm:text-sm text-brand-black leading-tight pt-1">
                        E-commerce Solutions
                      </h3>
                      <p className="font-inter text-[11px] text-neutral-500 font-medium">
                        Sell. Grow. Scale.
                      </p>
                    </div>
                  </Card3DTilt>
                </div>

                {/* CARD 2: Website Development (Top Right) */}
                <div className="absolute top-0 sm:top-2 right-1 sm:right-6 lg:-right-2 pointer-events-auto animate-float-2">
                  <Card3DTilt maxTilt={8} scale={1.04}>
                    <div className="rounded-2xl p-3.5 sm:p-4 bg-white/75 backdrop-blur-xl border border-white/90 shadow-[0_12px_36px_rgba(108,56,255,0.09),0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_18px_45px_rgba(108,56,255,0.18)] transition-all flex flex-col gap-1 w-44 sm:w-48 cursor-pointer group">
                      <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <Code2 className="w-4 h-4 text-primary" />
                      </div>
                      <h3 className="font-space font-bold text-xs sm:text-sm text-brand-black leading-tight pt-1">
                        Website Development
                      </h3>
                      <p className="font-inter text-[11px] text-neutral-500 font-medium">
                        Build. Perform. Excel.
                      </p>
                    </div>
                  </Card3DTilt>
                </div>

                {/* CARD 3: App Development (Middle Right) */}
                <div className="absolute top-[44%] -translate-y-1/2 right-0 sm:right-2 lg:-right-4 pointer-events-auto animate-float-3">
                  <Card3DTilt maxTilt={8} scale={1.04}>
                    <div className="rounded-2xl p-3.5 sm:p-4 bg-white/80 backdrop-blur-xl border border-white/90 shadow-[0_12px_36px_rgba(108,56,255,0.09),0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_18px_45px_rgba(108,56,255,0.18)] transition-all flex flex-col gap-1 w-40 sm:w-44 cursor-pointer group">
                      <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <Smartphone className="w-4 h-4 text-primary" />
                      </div>
                      <h3 className="font-space font-bold text-xs sm:text-sm text-brand-black leading-tight pt-1">
                        App Development
                      </h3>
                      <p className="font-inter text-[11px] text-neutral-500 font-medium">
                        Innovate. Engage. Grow.
                      </p>
                    </div>
                  </Card3DTilt>
                </div>

                {/* CARD 4: Graphic Designing (Bottom Right) */}
                <div className="absolute bottom-6 sm:bottom-10 right-2 sm:right-6 lg:right-2 pointer-events-auto animate-float-1 [animation-delay:1.5s]">
                  <Card3DTilt maxTilt={8} scale={1.04}>
                    <div className="rounded-2xl p-3.5 sm:p-4 bg-white/75 backdrop-blur-xl border border-white/90 shadow-[0_12px_36px_rgba(108,56,255,0.09),0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_18px_45px_rgba(108,56,255,0.18)] transition-all flex flex-col gap-1 w-44 sm:w-48 cursor-pointer group">
                      <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <Palette className="w-4 h-4 text-primary" />
                      </div>
                      <h3 className="font-space font-bold text-xs sm:text-sm text-brand-black leading-tight pt-1">
                        Graphic Designing
                      </h3>
                      <p className="font-inter text-[11px] text-neutral-500 font-medium">
                        Create. Communicate.
                      </p>
                    </div>
                  </Card3DTilt>
                </div>

                {/* CARD 5: Branding (Bottom Left) */}
                <div className="absolute bottom-10 sm:bottom-16 left-2 sm:left-4 lg:left-2 pointer-events-auto animate-float-2 [animation-delay:2s]">
                  <Card3DTilt maxTilt={8} scale={1.04}>
                    <div className="rounded-2xl p-3.5 sm:p-4 bg-white/75 backdrop-blur-xl border border-white/90 shadow-[0_12px_36px_rgba(108,56,255,0.09),0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_18px_45px_rgba(108,56,255,0.18)] transition-all flex flex-col gap-1 w-40 sm:w-44 cursor-pointer group">
                      <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <PenTool className="w-4 h-4 text-primary" />
                      </div>
                      <h3 className="font-space font-bold text-xs sm:text-sm text-brand-black leading-tight pt-1">
                        Branding
                      </h3>
                      <p className="font-inter text-[11px] text-neutral-500 font-medium">
                        Define. Differentiate.
                      </p>
                    </div>
                  </Card3DTilt>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM CLIENT LOGOS STRIP */}
        <HeroClientStrip />
      </section>

      {/* Showreel Lightbox Modal */}
      <ShowreelModal isOpen={showreelOpen} onClose={() => setShowreelOpen(false)} />
    </>
  );
}
