"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Globe2, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";
import { AmazonLogo, FlipkartLogo, MeeshoLogo, ShopifyLogo } from "@/components/ui/PlatformLogos";
import { useAuditModal } from "@/context/AuditModalContext";
import Card3DTilt from "@/components/ui/Card3DTilt";

export default function PlatformsPage() {
  const { openAuditModal } = useAuditModal();

  const renderLogo = (id: string) => {
    switch (id) {
      case "amazon":
        return <AmazonLogo className="h-8 w-auto text-brand-black" />;
      case "flipkart":
        return <FlipkartLogo className="h-8 w-auto" />;
      case "meesho":
        return <MeeshoLogo className="h-8 w-auto" />;
      case "shopify":
        return <ShopifyLogo className="h-8 w-auto" />;
      default:
        return null;
    }
  };

  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-brand-border shadow-soft mb-4">
            <Globe2 className="w-3.5 h-3.5 text-lavender-deep" />
            <span className="font-space text-xs font-semibold uppercase tracking-wider text-brand-black">
              Marketplace Specialization
            </span>
          </div>

          <h1 className="font-space font-extrabold text-4xl sm:text-5xl md:text-6xl text-brand-black tracking-tight mb-6">
            Engineered for Each Platform's Algorithm.
          </h1>

          <p className="font-inter text-neutral-600 text-base sm:text-lg leading-relaxed">
            Marketplace algorithms are fundamentally different. Amazon rewards keyword indexing and conversion velocity; Flipkart prioritizes regional cluster fulfillment and smart pricing; Meesho requires ultra-low margin, high-volume catalog precision; Shopify demands DTC conversion rate optimization. At {siteConfig.brandName}, we master all four.
          </p>
        </div>

        {/* 4 Platforms In-Depth 3D Tilt Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {siteConfig.platforms.map((platform) => (
            <Card3DTilt key={platform.id} maxTilt={10} scale={1.02} glare={true} className="h-full">
              <div
                style={{ transformStyle: "preserve-3d" }}
                className="rounded-3xl p-8 lg:p-10 bg-white border border-brand-border shadow-card hover:shadow-cardHover flex flex-col justify-between h-full transition-all"
              >
                <div style={{ transform: "translateZ(30px)" }}>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="p-3 rounded-2xl bg-lavender-light/50 border border-brand-border/60 shadow-soft">
                      {renderLogo(platform.id)}
                    </div>
                    <span className="px-3 py-1 rounded-full bg-lavender/25 text-brand-black font-space text-xs font-semibold">
                      {platform.badge}
                    </span>
                  </div>

                  <h2 className="font-space font-bold text-2xl text-brand-black tracking-tight mb-2">
                    {platform.name} Account Management & Growth
                  </h2>

                  <p className="font-inter text-xs text-lavender-deep font-semibold mb-4">
                    {platform.tagline}
                  </p>

                  <p className="font-inter text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                    {platform.description}
                  </p>

                  {/* Core Focus Area */}
                  <div className="space-y-2.5 p-5 rounded-2xl bg-lavender-light/40 border border-brand-border/60 mb-6 shadow-soft">
                    <span className="font-space text-xs font-bold uppercase tracking-wider text-neutral-500 block mb-2">
                      Core Operational Pillars:
                    </span>
                    {platform.coreFocus.map((focus, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs font-inter text-neutral-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-lavender-deep shrink-0 mt-0.5" />
                        <span className="leading-snug">{focus}</span>
                      </div>
                    ))}
                  </div>

                  {/* Covered Markets */}
                  <div className="flex flex-wrap items-center gap-2 mb-6">
                    <span className="text-xs font-space font-semibold text-neutral-500 mr-2">
                      Markets:
                    </span>
                    {platform.markets.map((m, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-neutral-100 text-neutral-700 text-xs font-inter"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div
                  style={{ transform: "translateZ(20px)" }}
                  className="pt-6 border-t border-brand-border/60 flex items-center justify-between"
                >
                  <Link
                    href={`/platforms/${platform.id}`}
                    className="font-space font-bold text-xs sm:text-sm text-brand-black hover:text-lavender-deep inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Explore {platform.name} Playbook</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  <button
                    onClick={openAuditModal}
                    className="px-4 py-2 rounded-xl bg-brand-black text-white font-space text-xs font-semibold hover:bg-brand-charcoal transition-colors cursor-pointer"
                  >
                    Audit My {platform.name} Store
                  </button>
                </div>
              </div>
            </Card3DTilt>
          ))}
        </div>

        {/* Global Multi-Platform Advisory Banner */}
        <Card3DTilt maxTilt={6} scale={1.01} glare={true}>
          <div className="rounded-3xl p-8 lg:p-12 bg-dark-mesh text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="font-space text-xs font-bold text-lavender uppercase tracking-wider block">
                Omnichannel Synchronization
              </span>
              <h2 className="font-space font-extrabold text-2xl sm:text-3xl text-white">
                Selling across multiple marketplaces simultaneously?
              </h2>
              <p className="font-inter text-xs sm:text-sm text-neutral-300 leading-relaxed">
                We help you avoid listing cannibalization, reconcile cross-channel pricing, synchronize inventory pools, and expand without administrative chaos.
              </p>
            </div>

            <div className="shrink-0">
              <button
                onClick={openAuditModal}
                className="px-8 py-4 rounded-xl font-space font-bold text-sm text-brand-black bg-lavender hover:bg-white transition-all shadow-glow cursor-pointer"
              >
                Request Multi-Marketplace Audit
              </button>
            </div>
          </div>
        </Card3DTilt>
      </div>
    </div>
  );
}
