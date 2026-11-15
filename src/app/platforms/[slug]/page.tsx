import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Award,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { AmazonLogo, FlipkartLogo, MeeshoLogo, ShopifyLogo } from "@/components/ui/PlatformLogos";
import Card3DTilt from "@/components/ui/Card3DTilt";
import type { Metadata } from "next";

export function generateStaticParams() {
  return siteConfig.platforms.map((platform) => ({
    slug: platform.id,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const platform = siteConfig.platforms.find((p) => p.id === params.slug);
  if (!platform) return { title: "Platform Not Found" };

  return {
    title: `${platform.name} Account Management & Growth Agency — ${siteConfig.brandName}`,
    description: platform.description,
  };
}

export default function PlatformDetailPage({ params }: { params: { slug: string } }) {
  const platform = siteConfig.platforms.find((p) => p.id === params.slug);

  if (!platform) {
    notFound();
  }

  const renderLogo = (id: string) => {
    switch (id) {
      case "amazon":
        return <AmazonLogo className="h-9 w-auto text-brand-black" />;
      case "flipkart":
        return <FlipkartLogo className="h-9 w-auto" />;
      case "meesho":
        return <MeeshoLogo className="h-9 w-auto" />;
      case "shopify":
        return <ShopifyLogo className="h-9 w-auto" />;
      default:
        return null;
    }
  };

  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/platforms"
          className="inline-flex items-center gap-2 text-xs font-space font-semibold text-neutral-600 hover:text-brand-black mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Platforms</span>
        </Link>

        {/* Hero Card with 3D Tilt */}
        <Card3DTilt maxTilt={6} scale={1.01} glare={true} className="mb-12">
          <div
            style={{ transformStyle: "preserve-3d" }}
            className="rounded-3xl p-8 sm:p-12 bg-white border border-brand-border shadow-card"
          >
            <div style={{ transform: "translateZ(25px)" }}>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-lavender-light/50 border border-brand-border/60 shadow-soft">
                  {renderLogo(platform.id)}
                </div>
                <span className="font-space text-xs font-bold px-3 py-1 rounded-full bg-lavender/30 text-brand-black">
                  {platform.badge}
                </span>
              </div>

              <h1 className="font-space font-extrabold text-3xl sm:text-4xl md:text-5xl text-brand-black tracking-tight mb-3">
                {platform.name} Account Management & Growth
              </h1>

              <p className="font-inter text-sm sm:text-base font-semibold text-lavender-deep mb-4">
                {platform.tagline}
              </p>

              <p className="font-inter text-neutral-600 text-base sm:text-lg leading-relaxed mb-8 max-w-3xl">
                {platform.description}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 border-t border-brand-border/60">
                <Link
                  href="/#audit"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-space font-bold text-sm text-white bg-brand-black hover:bg-brand-charcoal transition-colors shadow-soft"
                >
                  <span>Get Free {platform.name} Audit</span>
                  <ArrowUpRight className="w-4 h-4 text-lavender" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-space font-semibold text-sm text-neutral-700 bg-lavender-light hover:bg-lavender/30 border border-brand-border transition-colors"
                >
                  <span>Talk to a {siteConfig.brandName} Specialist</span>
                </Link>
              </div>
            </div>
          </div>
        </Card3DTilt>

        {/* Platform Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card3DTilt maxTilt={8} scale={1.02} glare={true} className="h-full">
            <div className="rounded-3xl p-8 bg-white border border-brand-border shadow-soft space-y-6 h-full">
              <h2 className="font-space font-bold text-xl text-brand-black tracking-tight flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-lavender-deep" />
                <span>Core Operational Pillars on {platform.name}</span>
              </h2>

              <div className="space-y-3.5">
                {platform.coreFocus.map((focus, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-inter text-neutral-800">
                    <CheckCircle2 className="w-4 h-4 text-lavender-deep shrink-0 mt-0.5" />
                    <span className="leading-snug">{focus}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card3DTilt>

          <Card3DTilt maxTilt={8} scale={1.02} glare={true} className="h-full">
            <div className="rounded-3xl p-8 bg-brand-black text-white shadow-soft flex flex-col justify-between space-y-6 h-full">
              <div>
                <span className="font-space text-xs font-bold uppercase tracking-wider text-lavender block mb-3">
                  Geographic & Marketplace Reach
                </span>

                <h3 className="font-space font-bold text-lg text-white mb-4">
                  Supported Jurisdictions & Fulfillment Models
                </h3>

                <div className="space-y-2 mb-6">
                  {platform.markets.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white/10 border border-white/15 text-xs font-space font-medium text-white flex items-center justify-between shadow-soft"
                    >
                      <span>{m}</span>
                      <span className="text-[10px] text-lavender uppercase tracking-wider">Certified Playbook</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/15 text-xs text-neutral-400">
                <Award className="w-4 h-4 text-lavender inline-block mr-1.5 -mt-0.5" />
                <span>Full compliance with {platform.name} Terms of Service and API standards.</span>
              </div>
            </div>
          </Card3DTilt>
        </div>

        {/* CTA Banner */}
        <Card3DTilt maxTilt={6} scale={1.01} glare={true}>
          <div className="rounded-3xl p-8 sm:p-10 bg-lavender-light/60 border border-brand-border shadow-card flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-space font-bold text-xl text-brand-black mb-1">
                Ready to accelerate your {platform.name} presence?
              </h3>
              <p className="font-inter text-xs sm:text-sm text-neutral-600">
                Let {siteConfig.brandName}'s senior {platform.name} operators run an exhaustive diagnostic audit of your listings and campaigns.
              </p>
            </div>

            <Link
              href="/#audit"
              className="shrink-0 px-6 py-3.5 rounded-xl font-space font-bold text-xs sm:text-sm text-white bg-brand-black hover:bg-brand-charcoal transition-colors flex items-center gap-2"
            >
              <span>Claim Free Audit</span>
              <ArrowUpRight className="w-4 h-4 text-lavender" />
            </Link>
          </div>
        </Card3DTilt>
      </div>
    </div>
  );
}
