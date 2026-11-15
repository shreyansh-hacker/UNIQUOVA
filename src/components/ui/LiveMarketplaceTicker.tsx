import React from "react";
import { Sparkles, Activity, ShieldCheck, Zap } from "lucide-react";

export default function LiveMarketplaceTicker() {
  const tickerItems = [
    { label: "AMAZON SELLER CENTRAL", badge: "SPN GRADE", icon: Zap },
    { label: "FLIPKART F-ASSURED", badge: "TIER 1 ELITE", icon: ShieldCheck },
    { label: "MEESHO BHARAT VOLUME", badge: "0% COMMISSION", icon: Activity },
    { label: "SHOPIFY 2.0 D2C", badge: "OMNICHANNEL SYNC", icon: Sparkles },
    { label: "TACOS ADVERTISING DISCIPLINE", badge: "PPC CONTROL", icon: Zap },
    { label: "100% HUMAN OPERATOR GOVERNANCE", badge: "ZERO BOTS", icon: ShieldCheck },
    { label: "24-HOUR FORENSIC AUDIT DISPATCH", badge: "GUARANTEED", icon: Activity },
  ];

  return (
    <div
      className="relative z-20 w-full py-3.5 bg-brand-black text-white border-y border-white/10 overflow-hidden select-none"
      aria-label="Live Marketplace Telemetry"
    >
      <div className="flex w-max animate-[marquee_28s_linear_infinite] hover:[animation-play-state:paused]">
        {[...tickerItems, ...tickerItems].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="inline-flex items-center gap-3 px-6 text-xs font-space font-semibold tracking-wider text-neutral-300"
            >
              <span className="flex items-center gap-1.5 text-lavender">
                <Icon className="w-3.5 h-3.5 text-lavender" />
                <span className="text-white">{item.label}</span>
              </span>

              <span className="px-2 py-0.5 rounded-full bg-white/10 border border-white/15 text-[10px] text-lavender font-mono">
                {item.badge}
              </span>

              <span className="text-white/20 font-bold ml-2">•</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
