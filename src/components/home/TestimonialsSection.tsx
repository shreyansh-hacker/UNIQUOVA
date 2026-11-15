"use client";

import React, { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight, ShieldCheck, Sparkles, Star, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import Card3DTilt from "@/components/ui/Card3DTilt";
import ButtonAnimated from "@/components/ui/ButtonAnimated";
import TextReveal from "@/components/ui/TextReveal";
import { useAuditModal } from "@/context/AuditModalContext";

export default function TestimonialsSection() {
  const [selectedPlatform, setSelectedPlatform] = useState<string>("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { openAuditModal } = useAuditModal();

  const allReviews = siteConfig.testimonials;
  const filteredReviews = selectedPlatform === "All"
    ? allReviews
    : allReviews.filter((r) => r.platform.toLowerCase().includes(selectedPlatform.toLowerCase()));

  // Reset index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedPlatform]);

  // Auto-cycle through featured reviews
  useEffect(() => {
    if (!isAutoPlaying || filteredReviews.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredReviews.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, filteredReviews.length]);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredReviews.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === filteredReviews.length - 1 ? 0 : prev + 1));
  };

  const current = filteredReviews[currentIndex] || allReviews[0];

  const platforms = ["All", "Amazon", "Flipkart", "Meesho", "Shopify"];

  return (
    <section id="reviews" className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-transparent via-lavender/5 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-brand-border shadow-soft mb-4">
            <Sparkles className="w-3.5 h-3.5 text-lavender-deep" />
            <span className="font-space text-xs font-semibold uppercase tracking-wider text-brand-black">
              Verified Marketplace Reviews
            </span>
          </div>

          <h2 className="font-space font-extrabold text-3xl sm:text-4xl md:text-5xl text-brand-black tracking-tight mb-4">
            <TextReveal>Built on Trust. Driven by Operator Execution.</TextReveal>
          </h2>

          <p className="font-inter text-neutral-600 text-sm sm:text-base leading-relaxed">
            Real feedback from brand founders, operations leaders, and e-commerce directors who trust UNIQUOVA with their flagship marketplace channels.
          </p>

          {/* Platform Filter Pills */}
          <div className="flex items-center justify-center flex-wrap gap-2 mt-8">
            {platforms.map((plat) => {
              const active = selectedPlatform === plat;
              return (
                <button
                  key={plat}
                  onClick={() => setSelectedPlatform(plat)}
                  className={`px-4 py-2 rounded-xl text-xs font-space font-semibold transition-all cursor-pointer ${
                    active
                      ? "bg-brand-black text-white shadow-soft scale-105"
                      : "bg-white/80 text-neutral-600 hover:text-brand-black hover:bg-white border border-brand-border/70"
                  }`}
                >
                  {plat === "All" ? "All Verified Channels" : `${plat} Reviews`}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3D Featured Spotlight Review Card */}
        <div
          className="max-w-4xl mx-auto mb-16 relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <Card3DTilt maxTilt={6} scale={1.01} glare={true}>
            <div
              style={{ transformStyle: "preserve-3d" }}
              className="relative rounded-3xl p-8 sm:p-12 lg:p-14 bg-white/95 backdrop-blur-md border border-brand-border shadow-cardHover transition-all"
            >
              <div style={{ transform: "translateZ(30px)" }}>
                {/* Top Badge Strip with 5-Star Rating */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-brand-border/60">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs font-space font-bold text-brand-black">
                      5.0 / 5.0
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lavender/30 border border-lavender/50 text-[11px] font-space font-semibold text-brand-charcoal">
                      <ShieldCheck className="w-3.5 h-3.5 text-lavender-deep" />
                      <span>{current.platformBadge}</span>
                    </span>
                    <span className="hidden sm:inline-flex px-2.5 py-1 rounded-full bg-neutral-100 text-[10px] font-inter text-neutral-600">
                      {current.engagementDuration}
                    </span>
                  </div>
                </div>

                {/* Big Editorial Quote */}
                <div className="relative mb-8">
                  <Quote className="w-10 h-10 text-lavender/30 mb-4" />
                  <blockquote className="font-space font-medium text-lg sm:text-xl md:text-2xl text-brand-black leading-relaxed">
                    "{current.quote}"
                  </blockquote>
                </div>

                {/* Operational Metric Highlights Pill Strip */}
                <div className="flex flex-wrap items-center gap-3 mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-lavender-light border border-lavender/40 text-xs font-space font-bold text-brand-black">
                    <TrendingUp className="w-3.5 h-3.5 text-lavender-deep" />
                    <span>{current.metric}</span>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-brand-border text-xs font-space font-semibold text-neutral-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{current.secondaryMetric}</span>
                  </div>
                </div>

                {/* Bottom Row: Author details and Controls */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-brand-border/60">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-black to-brand-charcoal text-white font-space font-bold text-base flex items-center justify-center shadow-soft">
                      {current.author.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <div className="font-space font-bold text-base text-brand-black">
                        {current.author}
                      </div>
                      <div className="font-inter text-xs text-neutral-500">
                        {current.role} • <span className="font-semibold text-brand-black">{current.company}</span>
                      </div>
                    </div>
                  </div>

                  {/* Carousel navigation buttons */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={prev}
                      className="p-3 rounded-full bg-white border border-brand-border text-brand-black hover:bg-lavender-light transition-all shadow-soft cursor-pointer hover:scale-110 active:scale-95"
                      aria-label="Previous review"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>

                    <div className="flex items-center gap-1.5 px-2">
                      {filteredReviews.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentIndex(idx)}
                          className={`h-2 rounded-full transition-all cursor-pointer ${
                            currentIndex === idx ? "w-6 bg-brand-black" : "w-2 bg-neutral-300"
                          }`}
                          aria-label={`Jump to review ${idx + 1}`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={next}
                      className="p-3 rounded-full bg-white border border-brand-border text-brand-black hover:bg-lavender-light transition-all shadow-soft cursor-pointer hover:scale-110 active:scale-95"
                      aria-label="Next review"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Card3DTilt>
        </div>

        {/* Multi-Card Wall of Trust Grid (3 Highlights) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {allReviews.slice(0, 3).map((item, idx) => (
            <Card3DTilt key={item.id} maxTilt={4} scale={1.01} glare={false}>
              <div className="rounded-2xl p-6 bg-white border border-brand-border/80 shadow-soft hover:shadow-card transition-all flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-lavender-light text-[10px] font-space font-semibold text-lavender-deep">
                      {item.platform}
                    </span>
                  </div>

                  <p className="font-inter text-xs sm:text-sm text-neutral-700 leading-relaxed mb-6 line-clamp-4">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-border/50">
                  <div className="font-space font-bold text-xs text-brand-black">
                    {item.author}
                  </div>
                  <div className="font-inter text-[11px] text-neutral-500">
                    {item.company}
                  </div>
                  <div className="mt-2 text-[10px] font-space font-semibold text-lavender-deep">
                    {item.metric}
                  </div>
                </div>
              </div>
            </Card3DTilt>
          ))}
        </div>

        {/* Bottom Callout with Animated Magnetic Button */}
        <div className="mt-14 text-center">
          <ButtonAnimated
            onClick={openAuditModal}
            variant="primary"
            size="md"
            showArrow={true}
            className="!rounded-full px-7 py-3.5 shadow-soft hover:shadow-glowDark"
          >
            Experience Our Marketplace Operations On Your Brand
          </ButtonAnimated>
        </div>
      </div>
    </section>
  );
}
