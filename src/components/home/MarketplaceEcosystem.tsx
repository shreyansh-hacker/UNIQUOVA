"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Globe2, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";
import { AmazonLogo, FlipkartLogo, MeeshoLogo, ShopifyLogo } from "@/components/ui/PlatformLogos";
import Card3DTilt from "@/components/ui/Card3DTilt";
import ButtonAnimated from "@/components/ui/ButtonAnimated";
import TextReveal from "@/components/ui/TextReveal";
import TextScramble from "@/components/ui/TextScramble";

export default function MarketplaceEcosystem() {
  const renderLogo = (id: string) => {
    switch (id) {
      case "amazon":
        return <AmazonLogo className="h-7 w-auto text-brand-black" />;
      case "flipkart":
        return <FlipkartLogo className="h-7 w-auto" />;
      case "meesho":
        return <MeeshoLogo className="h-7 w-auto" />;
      case "shopify":
        return <ShopifyLogo className="h-7 w-auto" />;
      default:
        return null;
    }
  };

  return (
    <section id="ecosystem" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-brand-border shadow-soft mb-4">
            <Globe2 className="w-3.5 h-3.5 text-lavender-deep" />
            <span className="font-space text-xs font-semibold uppercase tracking-wider text-brand-black">
              Marketplace Mastery
            </span>
          </div>

          <h2 className="font-space font-extrabold text-3xl sm:text-4xl md:text-5xl text-brand-black tracking-tight mb-4">
            <TextReveal>Your Brand. Every Marketplace.</TextReveal>
          </h2>

          <p className="font-inter text-neutral-600 text-sm sm:text-base leading-relaxed">
            Marketplaces are not interchangeable. Each algorithm, compliance standard, and customer persona requires a dedicated playbook. We operate natively across India's largest channels and global retail corridors.
          </p>
        </div>

        {/* 4 Interactive 3D Platform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.platforms.map((platform) => {
            return (
              <Card3DTilt key={platform.id} maxTilt={14} scale={1.03} glare={true} className="h-full">
                <div
                  style={{ transformStyle: "preserve-3d" }}
                  className="group relative rounded-3xl p-6 sm:p-7 bg-white/95 border border-brand-border/80 shadow-soft hover:shadow-cardHover transition-all duration-300 flex flex-col justify-between h-full"
                >
                  {/* Top: Logo & Market Badge with 3D Depth */}
                  <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}>
                    <div className="flex items-center justify-between gap-2 mb-6">
                      <div className="p-2.5 rounded-2xl bg-lavender-light/50 border border-brand-border/50 group-hover:scale-110 transition-transform shadow-soft">
                        {renderLogo(platform.id)}
                      </div>
                      <span className="font-space text-[11px] font-semibold px-2.5 py-1 rounded-full bg-lavender/30 text-brand-black">
                        {platform.badge}
                      </span>
                    </div>

                    <h3 className="font-space font-bold text-lg text-brand-black tracking-tight mb-1">
                      <TextScramble text={`${platform.name} Growth`} />
                    </h3>
                    <p className="font-inter text-xs text-lavender-deep font-semibold mb-3">
                      {platform.tagline}
                    </p>
                    <p className="font-inter text-xs text-neutral-600 leading-relaxed mb-6">
                      {platform.description}
                    </p>

                    {/* Core Focus Checklist */}
                    <div className="space-y-2 mb-6 border-t border-brand-border/50 pt-4">
                      <span className="font-space text-[11px] font-bold tracking-wider uppercase text-neutral-500 block mb-2">
                        Key Competencies:
                      </span>
                      {platform.coreFocus.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs font-inter text-neutral-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-lavender-deep shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom: Dedicated Platform Link */}
                  <div style={{ transform: "translateZ(25px)" }} className="pt-4 border-t border-brand-border/40">
                    <Link
                      href={`/platforms/${platform.id}`}
                      className="inline-flex items-center justify-between w-full font-space text-xs font-semibold text-brand-black group-hover:text-lavender-deep transition-colors"
                    >
                      <span>Explore {platform.name} Services</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </Card3DTilt>
            );
          })}
        </div>

        {/* Supporting Trust Banner with 3D Tilt */}
        <div className="mt-12">
          <Card3DTilt maxTilt={6} scale={1.01} glare={true}>
            <div className="p-6 rounded-3xl bg-white/80 border border-brand-border/80 shadow-soft flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-lavender/30 flex items-center justify-center text-lavender-deep">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-space font-bold text-sm text-brand-black">
                    Unified Multi-Channel Orchestration
                  </div>
                  <div className="font-inter text-xs text-neutral-600">
                    Prevent price wars, stockouts, and catalog desynchronization across platforms.
                  </div>
                </div>
              </div>

              <ButtonAnimated
                href="/platforms"
                variant="glass"
                size="sm"
                showArrow={true}
                className="shrink-0 !rounded-xl"
              >
                Compare Platform Playbooks
              </ButtonAnimated>
            </div>
          </Card3DTilt>
        </div>
      </div>
    </section>
  );
}
