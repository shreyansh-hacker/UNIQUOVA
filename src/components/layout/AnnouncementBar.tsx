"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, X } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Announcement"
      className="relative z-50 bg-brand-black text-brand-white text-xs font-inter py-2.5 px-4 border-b border-brand-charcoal transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex-1 flex items-center justify-center gap-2 sm:gap-3 text-center">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-lavender/20 text-lavender font-space text-[11px] font-medium tracking-wide">
            <Sparkles className="w-3 h-3 text-lavender" />
            Growth Agency
          </span>
          <span className="text-brand-grey font-normal hidden sm:inline">
            {siteConfig.announcement}
          </span>
          <span className="text-white font-medium sm:hidden">
            Scale across Amazon, Flipkart, Meesho & Shopify
          </span>
          <Link
            href="/#audit"
            className="group inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 hover:bg-lavender text-lavender hover:text-brand-black font-space text-[11px] font-semibold transition-all duration-300 ml-1 border border-white/15 hover:border-transparent hover:scale-105 active:scale-95 shadow-sm"
          >
            <span>Claim Free Audit</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="text-neutral-400 hover:text-white p-1 -mr-2 rounded transition-colors"
          aria-label="Dismiss announcement"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
}
