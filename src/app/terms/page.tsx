import React from "react";
import Link from "next/link";
import { ArrowLeft, FileCheck2, Scale, AlertTriangle } from "lucide-react";
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Agency engagement terms and conditions for ${siteConfig.brandName}.`,
};

export default function TermsPage() {
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
              Legal Framework
            </span>
            <h1 className="font-space font-extrabold text-3xl sm:text-4xl text-brand-black tracking-tight">
              Terms of Engagement & Service
            </h1>
            <p className="font-inter text-xs text-neutral-500 mt-2">
              Last Updated: November 2026 • Governing website usage and service proposals.
            </p>
          </div>

          <div className="space-y-6 font-inter text-sm text-neutral-700 leading-relaxed">
            <section className="space-y-3">
              <h2 className="font-space font-bold text-lg text-brand-black">
                1. Service Agency Model
              </h2>
              <p>
                {siteConfig.legalName} ("the Agency") provides professional human-delivered marketplace account management, advertising optimization, creative production, and strategic consulting. Our website serves as an informational portal and audit intake channel; our client services are formalized through bilateral Statements of Work (SOWs) and Master Services Agreements (MSAs).
              </p>
              <p className="p-4 rounded-xl bg-lavender-light/40 border border-brand-border text-xs text-neutral-800">
                <strong>Important Notice:</strong> We are not a software vendor, automated bot platform, or SaaS subscription service. All operational activities are performed by trained human account operators.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-space font-bold text-lg text-brand-black">
                2. Marketplace Platform Policies & Compliance
              </h2>
              <p>
                All account management and advertising work performed by the Agency is conducted in strict compliance with the respective marketplace terms of service (including Amazon Services Business Solutions Agreement, Flipkart Marketplace Seller Agreement, Meesho Supplier Terms, and Shopify Merchant Terms).
              </p>
              <p>
                We do not engage in unauthorized black-hat reviews, manipulative feedback schemes, brush order tactics, or policy circumvention.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-space font-bold text-lg text-brand-black">
                3. Free Account Audit Terms
              </h2>
              <p>
                Our complimentary marketplace audits are offered on a voluntary, non-binding diagnostic basis. Audit observations are based on publicly viewable listing data or limited client-provided reports. An audit does not constitute a formal guarantee of specific percentage gains or revenue targets.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-space font-bold text-lg text-brand-black">
                4. Intellectual Property & Brand Assets
              </h2>
              <p>
                All creative assets produced under a paid client engagement (including bespoke A+ Content designs, infographics, and ad copy) become the exclusive property of the client upon receipt of final settlement. The methodology, workflows, and analytical frameworks of the Agency remain the proprietary intellectual property of {siteConfig.brandName}.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-space font-bold text-lg text-brand-black">
                5. Limitation of Liability & Third-Party Actions
              </h2>
              <p>
                Marketplaces (Amazon, Flipkart, Meesho, Shopify) maintain sole and absolute discretion over their search algorithms, Buy Box algorithms, fulfillment fee schedules, and account enforcement policies. The Agency exercises professional best practices but is not liable for unilateral platform-wide policy updates or third-party marketplace disruptions.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
