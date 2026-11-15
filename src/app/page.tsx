import React from "react";
import Hero from "@/components/home/Hero";
import LiveMarketplaceTicker from "@/components/ui/LiveMarketplaceTicker";
import MarketplaceEcosystem from "@/components/home/MarketplaceEcosystem";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import HowWeWorkSection from "@/components/home/HowWeWorkSection";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import AuditCTASection from "@/components/home/AuditCTASection";
import FAQSection from "@/components/home/FAQSection";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* SECTION 03: HERO */}
      <Hero />

      {/* LIVE MARKETPLACE TELEMETRY MARQUEE */}
      <LiveMarketplaceTicker />

      {/* SECTION 04: MARKETPLACE ECOSYSTEM */}
      <MarketplaceEcosystem />

      {/* SECTION 05: SERVICES */}
      <ServicesSection />

      {/* SECTION 06: WHY CHOOSE US */}
      <WhyChooseUsSection />

      {/* SECTION 07: HOW WE WORK */}
      <HowWeWorkSection />

      {/* SECTION 08: CASE STUDIES */}
      <CaseStudiesSection />

      {/* SECTION 09: TESTIMONIALS */}
      <TestimonialsSection />

      {/* SECTION 10: FREE ACCOUNT AUDIT CTA & FORM */}
      <AuditCTASection />

      {/* SECTION 11: FAQ */}
      <FAQSection />
    </main>
  );
}
