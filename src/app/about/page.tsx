"use client";

import React from "react";
import Link from "next/link";
import {
  Users,
  ShieldCheck,
  Building2,
  Globe2,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { useAuditModal } from "@/context/AuditModalContext";
import Card3DTilt from "@/components/ui/Card3DTilt";

export default function AboutPage() {
  const { openAuditModal } = useAuditModal();

  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-brand-border shadow-soft mb-4">
            <Building2 className="w-3.5 h-3.5 text-lavender-deep" />
            <span className="font-space text-xs font-semibold uppercase tracking-wider text-brand-black">
              Agency Heritage & Philosophy
            </span>
          </div>

          <h1 className="font-space font-extrabold text-4xl sm:text-5xl md:text-6xl text-brand-black tracking-tight mb-6">
            We Are Human Marketplace Operators.
          </h1>

          <p className="font-inter text-neutral-600 text-base sm:text-lg leading-relaxed">
            In an industry flooded with automated software dashboards and black-box AI tools, {siteConfig.brandName} is proudly a service-based agency. We believe lasting e-commerce scale is built by dedicated humans doing rigorous, hands-on operational work every single day.
          </p>
        </div>

        {/* 3 Core Agency Principles in 3D Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <Card3DTilt maxTilt={12} scale={1.03} glare={true} className="h-full">
            <div
              style={{ transformStyle: "preserve-3d" }}
              className="rounded-3xl p-8 bg-white border border-brand-border shadow-card hover:shadow-cardHover flex flex-col justify-between h-full transition-all"
            >
              <div style={{ transform: "translateZ(30px)" }}>
                <div className="w-12 h-12 rounded-2xl bg-lavender/25 flex items-center justify-center mb-6 shadow-soft">
                  <Users className="w-6 h-6 text-lavender-deep" />
                </div>
                <h2 className="font-space font-bold text-xl text-brand-black mb-3">
                  Practitioners, Not Tool Resellers
                </h2>
                <p className="font-inter text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  When you partner with {siteConfig.brandName}, you don't get another login credential to manage. You get seasoned marketplace operators who file cases, optimize bids, rewrite listings, and protect your account health.
                </p>
              </div>
              <div style={{ transform: "translateZ(20px)" }} className="pt-6 mt-6 border-t border-brand-border/60 text-xs font-space font-semibold text-lavender-deep">
                01 • Human Accountability
              </div>
            </div>
          </Card3DTilt>

          <Card3DTilt maxTilt={12} scale={1.03} glare={true} className="h-full">
            <div
              style={{ transformStyle: "preserve-3d" }}
              className="rounded-3xl p-8 bg-white border border-brand-border shadow-card hover:shadow-cardHover flex flex-col justify-between h-full transition-all"
            >
              <div style={{ transform: "translateZ(30px)" }}>
                <div className="w-12 h-12 rounded-2xl bg-lavender/25 flex items-center justify-center mb-6 shadow-soft">
                  <ShieldCheck className="w-6 h-6 text-lavender-deep" />
                </div>
                <h2 className="font-space font-bold text-xl text-brand-black mb-3">
                  Forensic Discipline
                </h2>
                <p className="font-inter text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  We avoid vanity metrics and dangerous black-hat growth hacks that cause account suspensions. We focus on true TACoS, unit economics, Buy Box share, and long-term organic ranking resilience.
                </p>
              </div>
              <div style={{ transform: "translateZ(20px)" }} className="pt-6 mt-6 border-t border-brand-border/60 text-xs font-space font-semibold text-lavender-deep">
                02 • Sustainable Equity
              </div>
            </div>
          </Card3DTilt>

          <Card3DTilt maxTilt={12} scale={1.03} glare={true} className="h-full">
            <div
              style={{ transformStyle: "preserve-3d" }}
              className="rounded-3xl p-8 bg-white border border-brand-border shadow-card hover:shadow-cardHover flex flex-col justify-between h-full transition-all"
            >
              <div style={{ transform: "translateZ(30px)" }}>
                <div className="w-12 h-12 rounded-2xl bg-lavender/25 flex items-center justify-center mb-6 shadow-soft">
                  <Globe2 className="w-6 h-6 text-lavender-deep" />
                </div>
                <h2 className="font-space font-bold text-xl text-brand-black mb-3">
                  India & Global Corridors
                </h2>
                <p className="font-inter text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  From tier-2 Indian logistics on Meesho and festive surges on Flipkart to international retail corridors across Amazon North America and Europe, we guide brands across domestic and cross-border borders.
                </p>
              </div>
              <div style={{ transform: "translateZ(20px)" }} className="pt-6 mt-6 border-t border-brand-border/60 text-xs font-space font-semibold text-lavender-deep">
                03 • Cross-Marketplace Scale
              </div>
            </div>
          </Card3DTilt>
        </div>

        {/* Global Hubs Section */}
        <div className="rounded-3xl p-8 lg:p-12 bg-white border border-brand-border shadow-card mb-20">
          <h2 className="font-space font-bold text-2xl sm:text-3xl text-brand-black mb-8">
            Operational Hubs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteConfig.contact.offices.map((office, idx) => (
              <Card3DTilt key={idx} maxTilt={6} scale={1.02} glare={false}>
                <div className="p-6 rounded-2xl bg-lavender-light/40 border border-brand-border/60 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-space font-bold text-lg text-brand-black">
                      {office.city}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-lavender/30 text-[11px] font-space font-semibold text-brand-black">
                      {office.country}
                    </span>
                  </div>
                  <p className="font-inter text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {office.address}
                  </p>
                  <div className="text-xs font-inter text-neutral-500 pt-2 border-t border-brand-border/40">
                    {siteConfig.contact.operatingHours}
                  </div>
                </div>
              </Card3DTilt>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <Card3DTilt maxTilt={6} scale={1.01} glare={true}>
          <div className="rounded-3xl p-8 lg:p-12 bg-dark-mesh text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="font-space text-xs font-bold text-lavender uppercase tracking-wider block">
                Direct Partnership
              </span>
              <h2 className="font-space font-extrabold text-2xl sm:text-3xl text-white">
                Ready to meet your dedicated {siteConfig.brandName} team?
              </h2>
              <p className="font-inter text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Let's analyze your current marketplace standing and outline where your biggest conversion and operational wins lie.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <button
                onClick={openAuditModal}
                className="px-8 py-4 rounded-xl font-space font-bold text-sm text-brand-black bg-lavender hover:bg-white transition-all shadow-glow cursor-pointer"
              >
                Request Free Audit
              </button>
              <Link
                href="/contact"
                className="px-6 py-4 rounded-xl font-space font-semibold text-sm text-neutral-300 hover:text-white border border-white/20 transition-colors"
              >
                Contact Offices
              </Link>
            </div>
          </div>
        </Card3DTilt>
      </div>
    </div>
  );
}
