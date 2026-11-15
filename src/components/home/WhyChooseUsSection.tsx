"use client";

import React from "react";
import Link from "next/link";
import {
  Users,
  Target,
  BarChart3,
  MessageSquare,
  ShieldAlert,
  TrendingUp,
  ArrowUpRight,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { useAuditModal } from "@/context/AuditModalContext";
import Card3DTilt from "@/components/ui/Card3DTilt";
import ButtonAnimated from "@/components/ui/ButtonAnimated";
import TextReveal from "@/components/ui/TextReveal";
import TextScramble from "@/components/ui/TextScramble";

export default function WhyChooseUsSection() {
  const { openAuditModal } = useAuditModal();

  const getDifferentiatorIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Users className="w-5 h-5 text-lavender" />;
      case 1:
        return <Target className="w-5 h-5 text-lavender" />;
      case 2:
        return <BarChart3 className="w-5 h-5 text-lavender" />;
      case 3:
        return <MessageSquare className="w-5 h-5 text-lavender" />;
      case 4:
        return <ShieldAlert className="w-5 h-5 text-lavender" />;
      case 5:
        return <TrendingUp className="w-5 h-5 text-lavender" />;
      default:
        return <Sparkles className="w-5 h-5 text-lavender" />;
    }
  };

  return (
    <section id="why-us" className="py-24 lg:py-32 bg-dark-mesh text-brand-white relative overflow-hidden">
      {/* Background radial lavender glow */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-lavender/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-lavender-deep/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 dot-grid-dark opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-4">
            <Sparkles className="w-3.5 h-3.5 text-lavender" />
            <span className="font-space text-xs font-semibold uppercase tracking-wider text-lavender">
              The Agency Advantage
            </span>
          </div>

          <h2 className="font-space font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-6">
            <TextReveal>More Than Account Management. A Growth Partner.</TextReveal>
          </h2>

          <p className="font-inter text-neutral-300 text-sm sm:text-base leading-relaxed">
            Marketplaces cannot be scaled with auto-generated generic scripts or passive software dashboards. Real growth requires human judgment, rapid dispute intervention, commercial copywriting, and active daily bid management.
          </p>
        </div>

        {/* 6 Differentiators in 3D Interactive Tilt Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {siteConfig.whyChooseUs.map((item, idx) => (
            <Card3DTilt key={idx} maxTilt={14} scale={1.03} glare={true} className="h-full">
              <div
                style={{ transformStyle: "preserve-3d" }}
                className="group relative rounded-3xl p-8 bg-brand-charcoal/80 border border-white/10 hover:border-lavender/40 backdrop-blur-md shadow-card hover:shadow-cardHover transition-all duration-300 flex flex-col justify-between h-full"
              >
                <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-center group-hover:scale-110 group-hover:bg-lavender/20 transition-all shadow-glowDark">
                      {getDifferentiatorIcon(idx)}
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-space font-medium text-lavender">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-space font-bold text-lg text-white tracking-tight mb-3 group-hover:text-lavender transition-colors">
                    <TextScramble text={item.title} />
                  </h3>

                  <p className="font-inter text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div
                  style={{ transform: "translateZ(20px)" }}
                  className="pt-6 mt-6 border-t border-white/10 flex items-center gap-2 text-xs text-neutral-400"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-lavender shrink-0" />
                  <span>Dedicated account governance</span>
                </div>
              </div>
            </Card3DTilt>
          ))}
        </div>

        {/* Comparison Callout: Service Agency vs Generic SaaS Software with 3D Tilt */}
        <Card3DTilt maxTilt={6} scale={1.01} glare={true}>
          <div className="rounded-3xl p-8 lg:p-10 bg-brand-charcoal/90 border border-lavender/30 backdrop-blur-lg flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="space-y-2 max-w-2xl">
              <span className="font-space text-xs font-bold text-lavender tracking-wider uppercase block">
                Core Positioning Distinction
              </span>
              <div className="font-space font-bold text-xl sm:text-2xl text-white">
                Why brands choose an expert team over black-box software tools
              </div>
              <p className="font-inter text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Software tools only give you charts and alerts — they don't file safe-T claims, rewrite conversion copy, talk to brand registry managers, or fix warehouse shipment discrepancies. We do the actual work.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <ButtonAnimated
                onClick={openAuditModal}
                variant="lavender"
                size="md"
                showArrow={true}
                className="!rounded-xl"
              >
                Get a Free Account Audit
              </ButtonAnimated>
              <ButtonAnimated
                href="/about"
                variant="glass"
                size="md"
                className="!rounded-xl !bg-white/10 !text-white !border-white/20 hover:!bg-white/20 hover:!border-white/40"
              >
                Our Agency Philosophy
              </ButtonAnimated>
            </div>
          </div>
        </Card3DTilt>
      </div>
    </section>
  );
}
