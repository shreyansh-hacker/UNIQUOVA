"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ShieldCheck, FileText } from "lucide-react";
import { siteConfig } from "@/config/site";
import Card3DTilt from "@/components/ui/Card3DTilt";

export default function CaseStudiesSection() {
  const [selectedCase, setSelectedCase] = useState(0);
  const currentCase = siteConfig.caseStudies[selectedCase];

  return (
    <section id="case-studies" className="py-24 lg:py-32 relative bg-white/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-border shadow-soft mb-4">
              <FileText className="w-3.5 h-3.5 text-lavender-deep" />
              <span className="font-space text-xs font-semibold uppercase tracking-wider text-brand-black">
                Structured Engagements
              </span>
            </div>

            <h2 className="font-space font-extrabold text-3xl sm:text-4xl md:text-5xl text-brand-black tracking-tight">
              Growth Should Be More Than a Promise.
            </h2>
          </div>

          <div className="max-w-md">
            <p className="font-inter text-neutral-600 text-sm leading-relaxed mb-4">
              Our case studies illustrate our structured operational playbook, problem diagnosis, and strategic execution framework.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-inter text-neutral-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Standardized case study format ready for verified metrics</span>
            </div>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {siteConfig.caseStudies.map((cs, idx) => (
            <button
              key={cs.id}
              onClick={() => setSelectedCase(idx)}
              className={`px-5 py-3 rounded-2xl font-space text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                selectedCase === idx
                  ? "bg-brand-black text-white shadow-card scale-105"
                  : "bg-white/80 text-neutral-700 hover:bg-white border border-brand-border"
              }`}
            >
              Case 0{idx + 1}: {cs.category}
            </button>
          ))}
        </div>

        {/* Editorial 3D Tilt Case Study Display Card */}
        <Card3DTilt maxTilt={8} scale={1.01} glare={true}>
          <div
            style={{ transformStyle: "preserve-3d" }}
            className="rounded-3xl bg-white border border-brand-border shadow-card hover:shadow-cardHover p-8 lg:p-12 transition-all"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Left Column: Context & Challenge */}
              <div style={{ transform: "translateZ(25px)" }} className="lg:col-span-5 space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-lavender/30 text-brand-black font-space text-xs font-semibold">
                      {currentCase.marketplace}
                    </span>
                    <span className="text-xs font-inter text-neutral-500 font-medium">
                      {currentCase.timeframe}
                    </span>
                  </div>
                  <h3 className="font-space font-bold text-2xl sm:text-3xl text-brand-black tracking-tight">
                    {currentCase.title}
                  </h3>
                  <div className="text-xs font-inter text-neutral-500 font-semibold">
                    Partner: {currentCase.brandName}
                  </div>
                </div>

                {/* Challenge Box */}
                <div className="p-5 rounded-2xl bg-lavender-light/50 border border-brand-border shadow-soft">
                  <span className="font-space text-xs font-bold uppercase tracking-wider text-neutral-500 block mb-2">
                    The Operational Challenge:
                  </span>
                  <p className="font-inter text-xs sm:text-sm text-neutral-700 leading-relaxed">
                    {currentCase.challenge}
                  </p>
                </div>

                {/* Strategy Box */}
                <div className="p-5 rounded-2xl bg-white border border-brand-border shadow-soft">
                  <span className="font-space text-xs font-bold uppercase tracking-wider text-lavender-deep block mb-2">
                    Strategic Intervention:
                  </span>
                  <p className="font-inter text-xs sm:text-sm text-neutral-700 leading-relaxed">
                    {currentCase.strategy}
                  </p>
                </div>
              </div>

              {/* Right Column: Work Delivered & Outcome */}
              <div
                style={{ transform: "translateZ(30px)" }}
                className="lg:col-span-7 flex flex-col justify-between space-y-6 lg:border-l lg:border-brand-border/60 lg:pl-10"
              >
                <div>
                  <span className="font-space text-xs font-bold uppercase tracking-wider text-neutral-500 block mb-4">
                    Execution & Work Delivered:
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {currentCase.workDelivered.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-lavender-light/40 border border-brand-border/60 flex items-start gap-2.5 text-xs font-inter text-neutral-800 shadow-soft"
                      >
                        <CheckCircle2 className="w-4 h-4 text-lavender-deep shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Outcome Box */}
                  <div className="p-6 rounded-2xl bg-brand-black text-white shadow-soft">
                    <span className="font-space text-xs font-bold uppercase tracking-wider text-lavender block mb-2">
                      Verified Outcome Direction:
                    </span>
                    <p className="font-inter text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      {currentCase.outcome}
                    </p>
                  </div>
                </div>

                {/* Footnote on verified case study structure */}
                <div className="pt-4 border-t border-brand-border/60 flex items-center justify-between text-xs text-neutral-500 font-inter">
                  <span>{currentCase.statusNote}</span>
                  <Link
                    href="/case-studies"
                    className="font-space font-semibold text-brand-black hover:text-lavender-deep inline-flex items-center gap-1"
                  >
                    All Case Studies <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Card3DTilt>
      </div>
    </section>
  );
}
