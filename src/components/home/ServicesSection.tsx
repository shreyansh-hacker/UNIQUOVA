"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Search,
  Palette,
  TrendingUp,
  Sparkles,
  Compass,
  ArrowUpRight,
  Layers,
  Check,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import Card3DTilt from "@/components/ui/Card3DTilt";
import ButtonAnimated from "@/components/ui/ButtonAnimated";
import TextReveal from "@/components/ui/TextReveal";
import TextScramble from "@/components/ui/TextScramble";

export default function ServicesSection() {
  const getIcon = (name: string) => {
    switch (name) {
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-lavender-deep" />;
      case "SearchCheck":
        return <Search className="w-6 h-6 text-lavender-deep" />;
      case "Palette":
        return <Palette className="w-6 h-6 text-lavender-deep" />;
      case "TrendingUp":
        return <TrendingUp className="w-6 h-6 text-lavender-deep" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-lavender-deep" />;
      case "Compass":
        return <Compass className="w-6 h-6 text-lavender-deep" />;
      default:
        return <Layers className="w-6 h-6 text-lavender-deep" />;
    }
  };

  return (
    <section id="services" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-brand-border shadow-soft mb-4">
              <Layers className="w-3.5 h-3.5 text-lavender-deep" />
              <span className="font-space text-xs font-semibold uppercase tracking-wider text-brand-black">
                End-To-End Agency Capabilities
              </span>
            </div>

            <h2 className="font-space font-extrabold text-3xl sm:text-4xl md:text-5xl text-brand-black tracking-tight">
              <TextReveal>Everything Your Marketplace Business Needs to Grow.</TextReveal>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="font-inter text-neutral-600 text-sm leading-relaxed mb-4">
              No disconnected point solutions. We integrate operational rigor, search algorithmic science, creative design, and paid advertising into a unified growth engine.
            </p>
            <ButtonAnimated
              href="/services"
              variant="glass"
              size="sm"
              showArrow={true}
              className="!rounded-xl"
            >
              View Detailed Service Index
            </ButtonAnimated>
          </div>
        </div>

        {/* 6 Editorial 3D Interactive Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.services.map((service) => (
            <Card3DTilt key={service.id} maxTilt={12} scale={1.03} glare={true} className="h-full">
              <div
                style={{ transformStyle: "preserve-3d" }}
                className="group relative rounded-3xl p-8 bg-white/95 border border-brand-border/80 shadow-soft hover:shadow-cardHover transition-all duration-300 flex flex-col justify-between h-full"
              >
                {/* 3D Elevated Layer for Top Info */}
                <div style={{ transform: "translateZ(35px)", transformStyle: "preserve-3d" }}>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-lavender/30 border border-lavender/50 flex items-center justify-center group-hover:scale-110 group-hover:bg-lavender/50 transition-all shadow-soft">
                      {getIcon(service.iconName)}
                    </div>
                    <span className="font-space font-bold text-3xl text-neutral-300 group-hover:text-lavender-deep transition-colors">
                      {service.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-space font-bold text-xl text-brand-black tracking-tight mb-3 group-hover:text-lavender-deep transition-colors">
                    <TextScramble text={service.title} />
                  </h3>

                  <p className="font-inter text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Deliverables snippet with 3D depth */}
                  <div className="space-y-2 border-t border-brand-border/60 pt-5 mb-8">
                    <div className="font-space text-[11px] font-bold tracking-wider uppercase text-neutral-400 mb-2">
                      Scope Highlights:
                    </div>
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs font-inter text-neutral-700">
                        <div className="w-4 h-4 rounded-full bg-lavender-light flex items-center justify-center text-lavender-deep shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Read More & Platform Compatibility */}
                <div
                  style={{ transform: "translateZ(25px)" }}
                  className="pt-4 border-t border-brand-border/50 flex items-center justify-between"
                >
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {service.platforms.slice(0, 2).map((p, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-lavender-light text-[10px] font-space font-medium text-neutral-700"
                      >
                        {p}
                      </span>
                    ))}
                    {service.platforms.length > 2 && (
                      <span className="text-[10px] font-space text-neutral-500">
                        +{service.platforms.length - 2} more
                      </span>
                    )}
                  </div>

                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-space font-bold text-brand-black group-hover:text-lavender-deep transition-colors"
                  >
                    <span>Explore Service</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </Card3DTilt>
          ))}
        </div>
      </div>
    </section>
  );
}
