"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowUp, Mail, Phone, MapPin, Shield, CheckCircle2, Activity, Globe2, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";
import ButtonAnimated from "@/components/ui/ButtonAnimated";
import UqLogo from "@/components/ui/UqLogo";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [emailInput, setEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [bengaluruTime, setBengaluruTime] = useState("");
  const [londonTime, setLondonTime] = useState("");

  // Update live hub clocks
  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      setBengaluruTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
      setLondonTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Europe/London",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput || !emailInput.includes("@")) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmailInput("");
    }, 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-brand-black text-brand-white border-t border-brand-charcoal overflow-hidden pt-20 pb-12">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 bg-lavender/10 blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 dot-grid-dark opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top VIP Intelligence Dispatch Card */}
        <div className="mb-16 rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 backdrop-blur-xl relative overflow-hidden shadow-2xl">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-lavender/15 rounded-full blur-[90px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-space text-lavender font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5 text-lavender" />
                <span>Private Growth Dispatch</span>
              </div>
              <h3 className="font-space font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                Marketplace Intelligence Delivered Weekly.
              </h3>
              <p className="font-inter text-neutral-400 text-xs sm:text-sm max-w-xl leading-relaxed">
                Algorithmic indexing changes on Amazon, Flipkart Big Billion Days logistics advisories, Meesho zero-commission fee audits, and TACoS strategies — no spam, strictly operator insights.
              </p>
            </div>

            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-space text-sm font-semibold animate-in fade-in">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Intelligence briefing confirmed. Welcome to the operator network.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5">
                  <input
                    type="email"
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="founder@yourbrand.com"
                    className="flex-1 px-4 py-3.5 rounded-2xl bg-white/10 border border-white/15 text-white placeholder-neutral-500 text-sm font-inter focus:outline-none focus:border-lavender focus:ring-1 focus:ring-lavender transition-all"
                  />
                  <ButtonAnimated
                    type="submit"
                    variant="lavender"
                    size="md"
                    className="!rounded-2xl shrink-0"
                  >
                    Subscribe
                  </ButtonAnimated>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Live Marketplace Telemetry & Hub Clock Strip */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm text-xs font-space">
          <div className="flex items-center gap-2.5 text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white font-bold">AMAZON SPN:</span>
            <span className="text-neutral-400 font-mono">99.98% SLA ONLINE</span>
          </div>

          <div className="flex items-center gap-2.5 text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white font-bold">FLIPKART CORE:</span>
            <span className="text-neutral-400 font-mono">TIER-1 VERIFIED</span>
          </div>

          <div className="flex items-center gap-2.5 text-neutral-300">
            <Globe2 className="w-3.5 h-3.5 text-lavender" />
            <span className="text-white font-bold">BENGALURU:</span>
            <span className="text-lavender font-mono">{bengaluruTime || "04:30 PM IST"}</span>
          </div>

          <div className="flex items-center gap-2.5 text-neutral-300">
            <Globe2 className="w-3.5 h-3.5 text-lavender" />
            <span className="text-white font-bold">LONDON:</span>
            <span className="text-lavender font-mono">{londonTime || "11:00 AM GMT"}</span>
          </div>
        </div>

        {/* Main Footer Navigation Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Col 1-5: Brand & Positioning */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center group">
              <UqLogo size="md" variant="light" />
            </Link>

            <p className="font-inter text-neutral-400 text-sm max-w-sm leading-relaxed">
              Premier international marketplace growth and seller account management agency. We scale ambitious brands across Amazon, Flipkart, Meesho, and Shopify through hands-on operational governance.
            </p>

            <div className="flex items-center gap-2 text-xs text-lavender font-space font-medium pt-2">
              <Shield className="w-4 h-4 text-lavender" />
              <span>100% Dedicated Human Marketplace Operators • Zero Automated Bots</span>
            </div>

            {/* Channels Strip */}
            <div className="pt-4 flex items-center flex-wrap gap-2 text-white/70">
              <span className="text-[11px] font-space tracking-wider uppercase text-neutral-500 mr-1">
                Supported Platforms:
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-neutral-300 font-space font-medium">
                Amazon India & Global
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-neutral-300 font-space font-medium">
                Flipkart Hub
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-neutral-300 font-space font-medium">
                Meesho Supply
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-neutral-300 font-space font-medium">
                Shopify D2C
              </span>
            </div>
          </div>

          {/* Col 6-12: Links Matrix */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Services */}
            <div>
              <h4 className="font-space font-bold text-xs tracking-wider text-white uppercase mb-4">
                Services
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-400 font-inter">
                {siteConfig.services.map((svc) => (
                  <li key={svc.id}>
                    <Link
                      href={`/services/${svc.slug}`}
                      className="hover:text-lavender transition-colors inline-block"
                    >
                      {svc.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Platforms & Navigation */}
            <div>
              <h4 className="font-space font-bold text-xs tracking-wider text-white uppercase mb-4">
                Navigation
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-400 font-inter">
                {siteConfig.platforms.map((plat) => (
                  <li key={plat.id}>
                    <Link
                      href={`/platforms/${plat.id}`}
                      className="hover:text-lavender transition-colors inline-block"
                    >
                      {plat.name} Management
                    </Link>
                  </li>
                ))}
                <li className="pt-2">
                  <Link
                    href="/case-studies"
                    className="hover:text-lavender transition-colors inline-flex items-center gap-1 text-white font-medium"
                  >
                    Case Studies <ArrowUpRight className="w-3 h-3 text-lavender" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#reviews"
                    className="hover:text-lavender transition-colors inline-block"
                  >
                    Verified Client Reviews
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#faq"
                    className="hover:text-lavender transition-colors inline-block"
                  >
                    Operational FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Global Hubs & Direct Contact */}
            <div>
              <h4 className="font-space font-bold text-xs tracking-wider text-white uppercase mb-4">
                Global Hubs
              </h4>
              <div className="space-y-4 text-xs text-neutral-400 font-inter">
                <div>
                  <div className="font-semibold text-white flex items-center gap-1.5 mb-1">
                    <MapPin className="w-3.5 h-3.5 text-lavender" />
                    <span>Bengaluru, India</span>
                  </div>
                  <p className="text-neutral-400 leading-snug">
                    {siteConfig.contact.offices[0].address}
                  </p>
                </div>

                <div>
                  <div className="font-semibold text-white flex items-center gap-1.5 mb-1">
                    <MapPin className="w-3.5 h-3.5 text-lavender" />
                    <span>London, UK</span>
                  </div>
                  <p className="text-neutral-400 leading-snug">
                    {siteConfig.contact.offices[1].address}
                  </p>
                </div>

                <div className="pt-2 space-y-1.5">
                  <div className="flex items-center gap-2 text-neutral-300">
                    <Mail className="w-3.5 h-3.5 text-lavender" />
                    <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-300">
                    <Phone className="w-3.5 h-3.5 text-lavender" />
                    <span>{siteConfig.contact.phone}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Large Editorial Brand Watermark */}
        <div className="relative py-8 select-none pointer-events-none opacity-[0.04] text-center overflow-hidden">
          <span className="font-space font-black text-7xl sm:text-9xl md:text-[14rem] tracking-tighter text-white block leading-none">
            UNIQUOVA
          </span>
        </div>

        {/* Bottom Legal & Back to Top Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-inter border-t border-white/5">
          <div>
            © {currentYear} {siteConfig.brandName}. All rights reserved. E-Commerce Growth Agency.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-neutral-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-neutral-300 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/contact" className="hover:text-neutral-300 transition-colors">
              Direct Contact
            </Link>

            {/* Back to Top Smooth Button with Magnetic Animation */}
            <ButtonAnimated
              onClick={scrollToTop}
              variant="glass"
              size="sm"
              className="!rounded-full !bg-white/10 hover:!bg-white/20 !text-white !border-white/15 px-3 py-1.5 font-space text-[11px]"
              ariaLabel="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3 text-lavender group-hover:-translate-y-0.5 transition-transform" />
            </ButtonAnimated>
          </div>
        </div>
      </div>
    </footer>
  );
}
