import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield, Lock, Eye } from "lucide-react";
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy and client confidentiality commitment for ${siteConfig.brandName}.`,
};

export default function PrivacyPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-space font-semibold text-neutral-600 hover:text-brand-black mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="rounded-3xl p-8 sm:p-12 bg-white border border-brand-border shadow-card space-y-8">
          <div className="border-b border-brand-border/60 pb-6">
            <span className="font-space text-xs font-bold uppercase tracking-wider text-lavender-deep block mb-2">
              Legal & Trust
            </span>
            <h1 className="font-space font-extrabold text-3xl sm:text-4xl text-brand-black tracking-tight">
              Privacy & Client Confidentiality Policy
            </h1>
            <p className="font-inter text-xs text-neutral-500 mt-2">
              Last Updated: November 2026 • Effective for all client engagements and audit inquiries.
            </p>
          </div>

          <div className="space-y-6 font-inter text-sm text-neutral-700 leading-relaxed">
            <section className="space-y-3">
              <h2 className="font-space font-bold text-lg text-brand-black">
                1. Our Commitment to Client Confidentiality
              </h2>
              <p>
                At {siteConfig.brandName} ("we," "our," or "the Agency"), we treat our clients' marketplace data, supplier relationships, sales figures, and ad performance metrics with extreme confidentiality. We recognize that your catalog, margin structures, and advertising telemetry represent high-value trade secrets.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-space font-bold text-lg text-brand-black">
                2. Information We Collect
              </h2>
              <p>
                When you interact with our website or request a Free Account Audit, we collect:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-neutral-600">
                <li>Contact Information: Full name, business email address, phone number / WhatsApp.</li>
                <li>Store Details: Brand name, marketplace store URLs, platform choices (Amazon, Flipkart, Meesho, Shopify).</li>
                <li>Diagnostic Details: Self-reported monthly revenue bracket, catalog categories, and operational pain points.</li>
                <li>Audit Telemetry: Read-only access to Seller Central / advertising reports strictly when authorized by you via user-permission delegation.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-space font-bold text-lg text-brand-black">
                3. How We Use Your Data
              </h2>
              <p>
                We use collected information solely for:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-neutral-600">
                <li>Conducting your requested marketplace audit and delivering diagnostic findings.</li>
                <li>Communicating with you regarding tailored service scopes and operational proposals.</li>
                <li>Managing day-to-day marketplace seller account operations under contract.</li>
                <li>Preventing malicious submissions, spam bots, and security vulnerabilities.</li>
              </ul>
              <p className="font-semibold text-brand-black">
                We never sell, rent, license, or disclose your brand metrics to competitors or third-party data aggregators.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-space font-bold text-lg text-brand-black">
                4. Mutual Non-Disclosure Agreement (NDA)
              </h2>
              <p>
                Upon entering into an active account management retainer, {siteConfig.legalName} executes a binding mutual non-disclosure agreement protecting all proprietary catalog assets, profit margins, supplier terms, and performance data.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-space font-bold text-lg text-brand-black">
                5. Contacting Our Data Protection Officer
              </h2>
              <p>
                If you have questions about our privacy practices, data deletion requests, or confidential audit handling, please contact us at:
              </p>
              <div className="p-4 rounded-xl bg-lavender-light/40 border border-brand-border/60 font-space text-xs text-brand-black space-y-1">
                <div>Email: {siteConfig.contact.email}</div>
                <div>Offices: Bengaluru (India) & London (UK)</div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
