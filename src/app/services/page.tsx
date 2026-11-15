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
  CheckCircle2,
  Clock,
  Globe2,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { useAuditModal } from "@/context/AuditModalContext";
import Card3DTilt from "@/components/ui/Card3DTilt";

export default function ServicesPage() {
  const { openAuditModal } = useAuditModal();

  const getServiceIcon = (name: string) => {
    switch (name) {
      case "ShieldCheck":
        return <ShieldCheck className="w-8 h-8 text-lavender-deep" />;
      case "SearchCheck":
        return <Search className="w-8 h-8 text-lavender-deep" />;
      case "Palette":
        return <Palette className="w-8 h-8 text-lavender-deep" />;
      case "TrendingUp":
        return <TrendingUp className="w-8 h-8 text-lavender-deep" />;
      case "Sparkles":
        return <Sparkles className="w-8 h-8 text-lavender-deep" />;
      case "Compass":
        return <Compass className="w-8 h-8 text-lavender-deep" />;
      default:
        return <Layers className="w-8 h-8 text-lavender-deep" />;
    }
  };

  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-brand-border shadow-soft mb-4">
            <Layers className="w-3.5 h-3.5 text-lavender-deep" />
            <span className="font-space text-xs font-semibold uppercase tracking-wider text-brand-black">
              Agency Capabilities
            </span>
          </div>

          <h1 className="font-space font-extrabold text-4xl sm:text-5xl md:text-6xl text-brand-black tracking-tight mb-6">
            Comprehensive Marketplace Services.
          </h1>

          <p className="font-inter text-neutral-600 text-base sm:text-lg leading-relaxed">
            From daily operational troubleshooting and algorithmic listing ranking to high-converting A+ Content and disciplined PPC media buying — {siteConfig.brandName}'s veteran practitioners handle every tier of your marketplace enterprise.
          </p>
        </div>

        {/* Services Detailed List with 3D Tilt Cards */}
        <div className="space-y-12">
          {siteConfig.services.map((service) => (
            <Card3DTilt key={service.id} maxTilt={8} scale={1.01} glare={true}>
              <div
                style={{ transformStyle: "preserve-3d" }}
                className="rounded-3xl p-8 lg:p-12 bg-white border border-brand-border shadow-card hover:shadow-cardHover flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-between transition-all"
              >
                <div style={{ transform: "translateZ(30px)" }} className="lg:max-w-xl space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-lavender/25 border border-lavender/40 flex items-center justify-center shrink-0 shadow-soft">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <div>
                      <span className="font-space text-xs font-bold text-lavender-deep tracking-widest uppercase">
                        Service {service.number}
                      </span>
                      <h2 className="font-space font-bold text-2xl sm:text-3xl text-brand-black tracking-tight">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <p className="font-inter text-neutral-600 text-sm sm:text-base leading-relaxed pt-2">
                    {service.fullDesc}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-space">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-lavender-light border border-lavender/30 text-neutral-800">
                      <Clock className="w-3.5 h-3.5 text-lavender-deep" />
                      <span>{service.timeframe}</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-lavender-light border border-lavender/30 text-neutral-800">
                      <Globe2 className="w-3.5 h-3.5 text-lavender-deep" />
                      <span>Platforms: {service.platforms.join(", ")}</span>
                    </div>
                  </div>
                </div>

                {/* Deliverables List with 3D Depth */}
                <div
                  style={{ transform: "translateZ(25px)" }}
                  className="w-full lg:max-w-md bg-lavender-light/40 border border-brand-border/70 rounded-2xl p-6 shadow-soft"
                >
                  <span className="font-space text-xs font-bold uppercase tracking-wider text-neutral-500 block mb-4">
                    Scope of Deliverables:
                  </span>
                  <ul className="space-y-2.5 text-xs sm:text-sm font-inter text-neutral-800">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-lavender-deep shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-4 border-t border-brand-border/60 flex items-center justify-between">
                    <Link
                      href={`/services/${service.slug}`}
                      className="font-space font-bold text-xs text-brand-black hover:text-lavender-deep inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Deep Dive Playbook</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>

                    <button
                      onClick={openAuditModal}
                      className="px-4 py-2 rounded-xl bg-brand-black text-white font-space text-xs font-semibold hover:bg-brand-charcoal transition-colors cursor-pointer"
                    >
                      Audit This Service
                    </button>
                  </div>
                </div>
              </div>
            </Card3DTilt>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16">
          <Card3DTilt maxTilt={6} scale={1.01} glare={true}>
            <div className="rounded-3xl p-10 bg-brand-black text-white text-center space-y-4 shadow-2xl">
              <h2 className="font-space font-bold text-2xl sm:text-3xl">
                Need a Custom Multi-Service Engagement?
              </h2>
              <p className="font-inter text-neutral-300 text-sm max-w-xl mx-auto">
                Most brands combine daily Account Management with Listing Optimization and Advertising for maximum operational leverage.
              </p>
              <div className="pt-2">
                <button
                  onClick={openAuditModal}
                  className="px-8 py-3.5 rounded-xl bg-lavender text-brand-black font-space font-bold text-sm hover:bg-white transition-colors cursor-pointer"
                >
                  Request Tailored Proposal
                </button>
              </div>
            </div>
          </Card3DTilt>
        </div>
      </div>
    </div>
  );
}
