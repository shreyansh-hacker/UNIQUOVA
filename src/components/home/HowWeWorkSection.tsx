"use client";

import React, { useState } from "react";
import { ArrowRight, Compass, Layers, Sparkles, TrendingUp } from "lucide-react";
import { siteConfig } from "@/config/site";
import Card3DTilt from "@/components/ui/Card3DTilt";
import TextReveal from "@/components/ui/TextReveal";
import TextScramble from "@/components/ui/TextScramble";

export default function HowWeWorkSection() {
  const [activeStep, setActiveStep] = useState(0);

  const stepIcons = [
    <Compass key="1" className="w-5 h-5 text-lavender-deep" />,
    <Layers key="2" className="w-5 h-5 text-lavender-deep" />,
    <Sparkles key="3" className="w-5 h-5 text-lavender-deep" />,
    <TrendingUp key="4" className="w-5 h-5 text-lavender-deep" />,
  ];

  return (
    <section id="process" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-brand-border shadow-soft mb-4">
            <span className="font-space text-xs font-semibold uppercase tracking-wider text-brand-black">
              Disciplined Execution
            </span>
          </div>

          <h2 className="font-space font-extrabold text-3xl sm:text-4xl md:text-5xl text-brand-black tracking-tight mb-4">
            <TextReveal>A Clear Process. A Smarter Way to Grow.</TextReveal>
          </h2>

          <p className="font-inter text-neutral-600 text-sm sm:text-base leading-relaxed">
            We replace reactive guesswork with a systematic 4-phase growth operating cadence.
          </p>
        </div>

        {/* 4 Connected Interactive 3D Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {siteConfig.processSteps.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <Card3DTilt key={step.step} maxTilt={12} scale={1.03} glare={true} className="h-full">
                <div
                  onClick={() => setActiveStep(idx)}
                  style={{ transformStyle: "preserve-3d" }}
                  className={`group cursor-pointer rounded-3xl p-7 transition-all duration-300 relative flex flex-col justify-between h-full ${
                    isSelected
                      ? "bg-white border-2 border-lavender-accent shadow-cardHover -translate-y-2"
                      : "bg-white/85 border border-brand-border/80 shadow-soft hover:bg-white hover:-translate-y-1"
                  }`}
                >
                  {/* Top Number & Tag with 3D Depth */}
                  <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-space font-extrabold text-2xl text-lavender-deep">
                        {step.step}
                      </span>
                      <div className="p-2.5 rounded-xl bg-lavender/25 border border-lavender/40 shadow-soft">
                        {stepIcons[idx]}
                      </div>
                    </div>

                    <span className="font-space text-[11px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                      {step.label}
                    </span>

                    <h3 className="font-space font-bold text-xl text-brand-black tracking-tight mb-3">
                      <TextScramble text={step.name} />
                    </h3>

                    <p className="font-inter text-xs text-neutral-600 leading-relaxed mb-4">
                      {step.summary}
                    </p>
                  </div>

                  {/* Bottom Details Drawer with 3D Depth */}
                  <div style={{ transform: "translateZ(20px)" }} className="pt-4 border-t border-brand-border/60">
                    <p className="font-inter text-[11px] text-neutral-500 leading-relaxed">
                      {step.details}
                    </p>
                    <div className="mt-4 flex items-center gap-1.5 text-xs font-space font-semibold text-lavender-deep">
                      <span>Phase Milestone</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Card3DTilt>
            );
          })}
        </div>

        {/* Flow Indicator Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-lavender-light/60 border border-lavender/40 text-center max-w-2xl mx-auto text-xs font-inter text-neutral-700 shadow-soft">
          <strong className="text-brand-black font-space">Weekly Governance Rhythm:</strong> Every engagement includes weekly KPI tracking, bid audit notes, inventory health alerts, and strategic monthly executive reviews.
        </div>
      </div>
    </section>
  );
}
