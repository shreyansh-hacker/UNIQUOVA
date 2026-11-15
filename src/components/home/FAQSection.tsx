"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles, MessageCircleQuestion, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import Card3DTilt from "@/components/ui/Card3DTilt";
import Link from "next/link";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 lg:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-brand-border shadow-soft mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-lavender-deep" />
            <span className="font-space text-xs font-semibold uppercase tracking-wider text-brand-black">
              Frequently Asked Questions
            </span>
          </div>

          <h2 className="font-space font-extrabold text-3xl sm:text-4xl md:text-5xl text-brand-black tracking-tight mb-4">
            Clarity Before Commitment.
          </h2>

          <p className="font-inter text-neutral-600 text-sm sm:text-base leading-relaxed mb-3">
            Everything you need to know about our marketplace management engagements, operational scope, and partnership models.
          </p>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lavender/20 border border-lavender/40 text-[11px] font-space font-medium text-brand-charcoal">
            <Sparkles className="w-3 h-3 text-lavender-deep" />
            <span>Hover over any question to instantly inspect our operational answers</span>
          </div>
        </div>

        {/* 3D Interactive Accordion List with Instant Hover Response */}
        <div className="space-y-3.5">
          {siteConfig.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const indexNumber = (idx + 1).toString().padStart(2, "0");

            return (
              <Card3DTilt key={idx} maxTilt={3} scale={1.01} glare={false}>
                <div
                  onMouseEnter={() => setOpenIndex(idx)}
                  className={`rounded-2xl transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-white border-2 border-lavender-accent shadow-cardHover"
                      : "bg-white/80 hover:bg-white border border-brand-border/80 shadow-soft"
                  }`}
                >
                  <button
                    onClick={() => toggle(idx)}
                    onFocus={() => setOpenIndex(idx)}
                    className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`font-space font-mono text-xs sm:text-sm font-bold transition-colors ${
                          isOpen ? "text-lavender-deep" : "text-neutral-400"
                        }`}
                      >
                        {indexNumber}
                      </span>
                      <span
                        className={`font-space font-bold text-base sm:text-lg transition-colors ${
                          isOpen ? "text-brand-black" : "text-neutral-800"
                        }`}
                      >
                        {faq.question}
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5 shrink-0">
                      {isOpen && (
                        <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-lavender-light text-[10px] font-space font-semibold text-lavender-deep">
                          ACTIVE INSIGHT
                        </span>
                      )}
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isOpen
                            ? "rotate-180 bg-lavender/40 text-lavender-deep shadow-sm"
                            : "bg-lavender-light text-brand-black"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </button>

                  {/* Smooth Collapsible Answer Container */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100 pb-6 px-6" : "grid-rows-[0fr] opacity-0 pb-0 px-6"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pt-2 text-xs sm:text-sm font-inter text-neutral-600 leading-relaxed border-t border-brand-border/40">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card3DTilt>
            );
          })}
        </div>

        {/* Quick Help Footer Pill */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 p-4 rounded-2xl bg-white/70 backdrop-blur-sm border border-brand-border shadow-soft text-xs sm:text-sm text-neutral-600">
            <span className="flex items-center gap-2 font-space font-semibold text-brand-black">
              <MessageCircleQuestion className="w-4 h-4 text-lavender-deep" />
              Have a specific marketplace challenge not listed here?
            </span>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 font-space font-bold text-brand-black hover:text-lavender-deep transition-colors underline decoration-lavender underline-offset-4"
            >
              Consult an Operator Directly <ArrowUpRight className="w-3.5 h-3.5 text-lavender-deep" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
