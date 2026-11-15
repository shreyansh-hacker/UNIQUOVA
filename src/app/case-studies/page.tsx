"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FileText,
  CheckCircle2,
  ShieldCheck,
  ArrowUpRight,
  Filter,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { useAuditModal } from "@/context/AuditModalContext";

export default function CaseStudiesPage() {
  const { openAuditModal } = useAuditModal();
  const [filterMarketplace, setFilterMarketplace] = useState<string>("All");

  const filteredStudies =
    filterMarketplace === "All"
      ? siteConfig.caseStudies
      : siteConfig.caseStudies.filter((cs) =>
          cs.marketplace.toLowerCase().includes(filterMarketplace.toLowerCase())
        );

  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-brand-border shadow-soft mb-4">
            <FileText className="w-3.5 h-3.5 text-lavender-deep" />
            <span className="font-space text-xs font-semibold uppercase tracking-wider text-brand-black">
              Engagement Archive
            </span>
          </div>

          <h1 className="font-space font-extrabold text-4xl sm:text-5xl md:text-6xl text-brand-black tracking-tight mb-6">
            Methodology & Case Studies.
          </h1>

          <p className="font-inter text-neutral-600 text-base sm:text-lg leading-relaxed">
            Examine our forensic approach to marketplace troubleshooting, catalog restructuring, and ad optimization. In strict adherence to confidentiality guidelines, client identities are protected and engagement templates are standardized.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-10 scrollbar-none">
          <div className="flex items-center gap-1.5 text-xs font-space font-bold text-neutral-400 uppercase tracking-wider mr-2">
            <Filter className="w-3.5 h-3.5" />
            <span>Platform:</span>
          </div>
          {["All", "Amazon", "Flipkart", "Meesho"].map((platform) => (
            <button
              key={platform}
              onClick={() => setFilterMarketplace(platform)}
              className={`px-4 py-2 rounded-xl text-xs font-space font-semibold transition-all cursor-pointer ${
                filterMarketplace === platform
                  ? "bg-brand-black text-white shadow-soft"
                  : "bg-white/80 text-neutral-700 hover:bg-white border border-brand-border"
              }`}
            >
              {platform}
            </button>
          ))}
        </div>

        {/* Case Studies Cards */}
        <div className="space-y-12">
          {filteredStudies.map((cs) => (
            <div
              key={cs.id}
              className="rounded-3xl p-8 lg:p-12 bg-white border border-brand-border shadow-card"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                {/* Left: Metadata & Problem */}
                <div className="lg:col-span-5 space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full bg-lavender/30 text-brand-black font-space text-xs font-semibold">
                        {cs.marketplace}
                      </span>
                      <span className="text-xs font-inter text-neutral-500 font-medium">
                        {cs.timeframe}
                      </span>
                    </div>

                    <h2 className="font-space font-bold text-2xl sm:text-3xl text-brand-black tracking-tight mb-2">
                      {cs.title}
                    </h2>

                    <div className="text-xs font-inter text-neutral-500 font-medium">
                      Category: <span className="text-brand-black font-semibold">{cs.category}</span>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-lavender-light/50 border border-brand-border">
                    <span className="font-space text-xs font-bold uppercase tracking-wider text-neutral-500 block mb-2">
                      The Challenge Diagnosed:
                    </span>
                    <p className="font-inter text-xs sm:text-sm text-neutral-700 leading-relaxed">
                      {cs.challenge}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-brand-border shadow-soft">
                    <span className="font-space text-xs font-bold uppercase tracking-wider text-lavender-deep block mb-2">
                      Strategic Interventions:
                    </span>
                    <p className="font-inter text-xs sm:text-sm text-neutral-700 leading-relaxed">
                      {cs.strategy}
                    </p>
                  </div>
                </div>

                {/* Right: Work Delivered & Verified Outcome */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-6 lg:border-l lg:border-brand-border/60 lg:pl-10">
                  <div>
                    <span className="font-space text-xs font-bold uppercase tracking-wider text-neutral-500 block mb-4">
                      Execution & Work Delivered:
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {cs.workDelivered.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-xl bg-lavender-light/40 border border-brand-border/60 flex items-start gap-2.5 text-xs font-inter text-neutral-800"
                        >
                          <CheckCircle2 className="w-4 h-4 text-lavender-deep shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Outcome Container */}
                    <div className="p-6 rounded-2xl bg-brand-black text-white shadow-soft">
                      <span className="font-space text-xs font-bold uppercase tracking-wider text-lavender block mb-2">
                        Outcome Direction:
                      </span>
                      <p className="font-inter text-xs sm:text-sm text-neutral-300 leading-relaxed">
                        {cs.outcome}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-brand-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-neutral-500 font-inter">
                    <span className="italic">{cs.statusNote}</span>
                    <button
                      onClick={openAuditModal}
                      className="px-4 py-2 rounded-xl bg-lavender-light text-brand-black hover:bg-lavender/40 font-space font-semibold transition-colors shrink-0"
                    >
                      Audit Your Brand Like This
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
