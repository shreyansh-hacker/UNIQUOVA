import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  FileCheck,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import Card3DTilt from "@/components/ui/Card3DTilt";
import type { Metadata } from "next";

export function generateStaticParams() {
  return siteConfig.services.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = siteConfig.services.find((s) => s.slug === params.slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} — ${siteConfig.brandName} Growth Services`,
    description: service.shortDesc,
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = siteConfig.services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-xs font-space font-semibold text-neutral-600 hover:text-brand-black mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Services</span>
        </Link>

        {/* Hero Card with 3D Tilt */}
        <Card3DTilt maxTilt={6} scale={1.01} glare={true} className="mb-12">
          <div
            style={{ transformStyle: "preserve-3d" }}
            className="rounded-3xl p-8 sm:p-12 bg-white border border-brand-border shadow-card"
          >
            <div style={{ transform: "translateZ(25px)" }}>
              <div className="flex items-center gap-2 mb-4">
                <span className="font-space text-xs font-bold px-3 py-1 rounded-full bg-lavender/30 text-brand-black">
                  Service {service.number}
                </span>
                <span className="text-xs font-inter text-neutral-500 font-medium">
                  {service.timeframe}
                </span>
              </div>

              <h1 className="font-space font-extrabold text-3xl sm:text-4xl md:text-5xl text-brand-black tracking-tight mb-4">
                {service.title}
              </h1>

              <p className="font-inter text-neutral-600 text-base sm:text-lg leading-relaxed mb-8 max-w-3xl">
                {service.fullDesc}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 border-t border-brand-border/60">
                <Link
                  href="/#audit"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-space font-bold text-sm text-white bg-brand-black hover:bg-brand-charcoal transition-colors shadow-soft"
                >
                  <span>Audit Your {service.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-lavender" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-space font-semibold text-sm text-neutral-700 bg-lavender-light hover:bg-lavender/30 border border-brand-border transition-colors"
                >
                  <span>Speak with a {siteConfig.brandName} Specialist</span>
                </Link>
              </div>
            </div>
          </div>
        </Card3DTilt>

        {/* Detailed Deliverables & Execution Scope */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-7">
            <Card3DTilt maxTilt={8} scale={1.02} glare={true} className="h-full">
              <div className="rounded-3xl p-8 bg-white border border-brand-border shadow-soft space-y-6 h-full">
                <h2 className="font-space font-bold text-xl sm:text-2xl text-brand-black tracking-tight flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-lavender-deep" />
                  <span>Full Scope of Deliverables</span>
                </h2>

                <p className="font-inter text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  When our team takes ownership of this service, every deliverable is tracked with strict service level agreements (SLAs) and verifiable milestones:
                </p>

                <div className="space-y-3.5 pt-2">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-inter text-neutral-800">
                      <CheckCircle2 className="w-4 h-4 text-lavender-deep shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card3DTilt>
          </div>

          <div className="md:col-span-5">
            <Card3DTilt maxTilt={8} scale={1.02} glare={true} className="h-full">
              <div className="rounded-3xl p-8 bg-brand-black text-white shadow-soft flex flex-col justify-between space-y-6 h-full">
                <div>
                  <span className="font-space text-xs font-bold uppercase tracking-wider text-lavender block mb-3">
                    Platform Applicability
                  </span>

                  <h3 className="font-space font-bold text-lg text-white mb-3">
                    Cross-Marketplace Execution
                  </h3>

                  <p className="font-inter text-xs text-neutral-300 leading-relaxed mb-6">
                    Tailored specifically to the distinct technical requirements, API standards, and consumer search behavior of each channel:
                  </p>

                  <div className="space-y-2">
                    {service.platforms.map((p, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-white/10 border border-white/15 text-xs font-space font-medium text-white flex items-center justify-between"
                      >
                        <span>{p}</span>
                        <span className="text-[10px] text-lavender uppercase tracking-wider">Active Playbook</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/15 text-xs text-neutral-400">
                  <ShieldCheck className="w-4 h-4 text-lavender inline-block mr-1.5 -mt-0.5" />
                  <span>Managed by certified human marketplace operators at {siteConfig.brandName}.</span>
                </div>
              </div>
            </Card3DTilt>
          </div>
        </div>

        {/* 4-Phase Execution Framework */}
        <Card3DTilt maxTilt={5} scale={1.01} glare={false} className="mb-12">
          <div className="rounded-3xl p-8 sm:p-10 bg-lavender-light/50 border border-brand-border">
            <h2 className="font-space font-bold text-xl sm:text-2xl text-brand-black tracking-tight mb-6">
              Our 4-Phase Delivery Framework
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-brand-border shadow-soft">
                <span className="font-space font-bold text-xs text-lavender-deep block mb-1">Phase 1</span>
                <div className="font-space font-bold text-sm text-brand-black mb-1">Forensic Audit</div>
                <p className="font-inter text-xs text-neutral-600 leading-snug">
                  Deep dive into past data, index gaps, and competitor vulnerabilities.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-brand-border shadow-soft">
                <span className="font-space font-bold text-xs text-lavender-deep block mb-1">Phase 2</span>
                <div className="font-space font-bold text-sm text-brand-black mb-1">Architecture Plan</div>
                <p className="font-inter text-xs text-neutral-600 leading-snug">
                  Prioritizing high-impact SKUs, campaign structures, and creative assets.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-brand-border shadow-soft">
                <span className="font-space font-bold text-xs text-lavender-deep block mb-1">Phase 3</span>
                <div className="font-space font-bold text-sm text-brand-black mb-1">Deployment</div>
                <p className="font-inter text-xs text-neutral-600 leading-snug">
                  Hands-on publishing, ticketing, ad launch, and catalog updates.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-brand-border shadow-soft">
                <span className="font-space font-bold text-xs text-lavender-deep block mb-1">Phase 4</span>
                <div className="font-space font-bold text-sm text-brand-black mb-1">Compounding Scale</div>
                <p className="font-inter text-xs text-neutral-600 leading-snug">
                  Continuous weekly refinements, search term pruning, and growth tracking.
                </p>
              </div>
            </div>
          </div>
        </Card3DTilt>

        {/* CTA Banner */}
        <Card3DTilt maxTilt={6} scale={1.01} glare={true}>
          <div className="rounded-3xl p-8 sm:p-10 bg-white border border-brand-border shadow-card flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-space font-bold text-xl text-brand-black mb-1">
                Want to see how your current {service.title} stacks up?
              </h3>
              <p className="font-inter text-xs sm:text-sm text-neutral-600">
                Request a zero-obligation account audit and receive actionable diagnostic feedback within 24 hours.
              </p>
            </div>

            <Link
              href="/#audit"
              className="shrink-0 px-6 py-3.5 rounded-xl font-space font-bold text-xs sm:text-sm text-white bg-brand-black hover:bg-brand-charcoal transition-colors flex items-center gap-2"
            >
              <span>Request Free Audit</span>
              <ArrowUpRight className="w-4 h-4 text-lavender" />
            </Link>
          </div>
        </Card3DTilt>
      </div>
    </div>
  );
}
