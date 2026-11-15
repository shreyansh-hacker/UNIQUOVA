"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Check, ChevronRight } from "lucide-react";
import Hero3DCanvas from "@/components/3d/Hero3DCanvas";
import Card3DTilt from "@/components/ui/Card3DTilt";
import ButtonAnimated from "@/components/ui/ButtonAnimated";
import RotatingText3D from "@/components/ui/RotatingText3D";
import TextReveal from "@/components/ui/TextReveal";
import TextScramble from "@/components/ui/TextScramble";
import { siteConfig } from "@/config/site";
import { useAuditModal } from "@/context/AuditModalContext";

export default function Hero() {
  const { openAuditModal } = useAuditModal();

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden pt-4 pb-16 lg:py-12">
      {/* Background radial gradient accents */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-lavender/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-lavender/25 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Hero Editorial Typography and CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 pt-4 lg:pt-0">
            {/* Pill Badge with Interactive Text Scramble Decoder */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-brand-border shadow-soft w-fit cursor-pointer group">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-space text-xs font-semibold text-brand-black tracking-wide">
                <TextScramble text="Specialized Marketplace Growth Partner" />
              </span>
            </div>

            {/* Main Editorial Headline with Kinetic 3D Rotation */}
            <h1 className="font-space font-extrabold text-4xl sm:text-5xl md:text-6xl xl:text-7xl tracking-tight text-brand-black leading-[1.08]">
              <span className="block">
                <TextReveal duration={0.7} stagger={0.06}>
                  {siteConfig.heroHeadline.line1}
                </TextReveal>
              </span>
              <span className="block text-shimmer">
                <TextReveal delay={0.2} duration={0.7} stagger={0.06}>
                  {siteConfig.heroHeadline.line2}
                </TextReveal>
              </span>
              <span className="block pt-1">
                <RotatingText3D
                  prefix="Your"
                  words={[
                    "Growth.",
                    "Exponential Scale.",
                    "Category Dominance.",
                    "Margin Expansion.",
                    "Market Authority.",
                  ]}
                  interval={3000}
                />
              </span>
            </h1>

            {/* Supporting Copy with Kinetic Reveal */}
            <p className="font-inter text-neutral-600 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed font-normal">
              {siteConfig.heroSubtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <ButtonAnimated
                onClick={openAuditModal}
                variant="primary"
                size="lg"
                showArrow={true}
                className="w-full sm:w-auto"
              >
                Get a Free Account Audit
              </ButtonAnimated>

              <ButtonAnimated
                href="/services"
                variant="glass"
                size="lg"
                className="w-full sm:w-auto"
              >
                <span>Explore Our Services</span>
                <ChevronRight className="w-4 h-4 text-neutral-500 group-hover:translate-x-1 transition-transform" />
              </ButtonAnimated>
            </div>

            {/* Small Supporting Statement & Key Differentiators with 3D Tilt Card */}
            <div className="pt-4 border-t border-brand-border/60">
              <p className="font-manrope text-xs sm:text-sm font-semibold text-brand-black tracking-wide uppercase mb-3">
                {siteConfig.heroSupporting}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-inter text-neutral-600">
                <Card3DTilt maxTilt={6} scale={1.03} glare={false}>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/70 border border-brand-border/60 shadow-soft">
                    <div className="w-4 h-4 rounded-full bg-lavender/40 flex items-center justify-center text-brand-black">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span className="font-medium text-brand-black">Human-Led Execution</span>
                  </div>
                </Card3DTilt>

                <Card3DTilt maxTilt={6} scale={1.03} glare={false}>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/70 border border-brand-border/60 shadow-soft">
                    <div className="w-4 h-4 rounded-full bg-lavender/40 flex items-center justify-center text-brand-black">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span className="font-medium text-brand-black">Zero Black-Box Software</span>
                  </div>
                </Card3DTilt>

                <Card3DTilt maxTilt={6} scale={1.03} glare={false}>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/70 border border-brand-border/60 shadow-soft">
                    <div className="w-4 h-4 rounded-full bg-lavender/40 flex items-center justify-center text-brand-black">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span className="font-medium text-brand-black">India & Global Scale</span>
                  </div>
                </Card3DTilt>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Interactive Floating E-Commerce Ecosystem (WITHOUT the badge) */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center">
            {/* Three.js Hero Canvas */}
            <div className="w-full h-full max-w-lg lg:max-w-none">
              <Hero3DCanvas />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 lg:mt-8 flex flex-col items-center justify-center">
          <Link
            href="/#ecosystem"
            className="flex flex-col items-center gap-2 text-xs font-space text-neutral-500 hover:text-brand-black transition-colors group"
            aria-label="Scroll to Marketplace Ecosystem"
          >
            <span className="tracking-widest uppercase text-[10px]">Explore Ecosystem</span>
            <div className="w-7 h-11 rounded-full border-2 border-neutral-400 group-hover:border-brand-black flex items-start justify-center p-1.5 transition-colors">
              <div className="w-1.5 h-2.5 rounded-full bg-lavender-deep animate-bounce" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
