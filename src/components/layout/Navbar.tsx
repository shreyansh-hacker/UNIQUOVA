"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, ChevronRight, Shield, Sparkles, Activity } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useAuditModal } from "@/context/AuditModalContext";
import ButtonAnimated from "@/components/ui/ButtonAnimated";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const pathname = usePathname();
  const { openAuditModal } = useAuditModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Platforms", href: "/platforms" },
    { name: "Process", href: "/#process" },
    { name: "Reviews", href: "/#reviews" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "About Us", href: "/about" },
    { name: "FAQ", href: "/#faq" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full transition-all duration-300 py-3 sm:py-4 px-3 sm:px-6 pointer-events-none">
        <div
          className={`pointer-events-auto max-w-7xl mx-auto rounded-2xl sm:rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isScrolled
              ? "bg-white/70 backdrop-blur-2xl backdrop-saturate-150 border border-white/80 shadow-[0_12px_40px_0_rgba(23,21,29,0.08)] py-2.5 px-4 sm:px-6"
              : "bg-white/40 backdrop-blur-xl border border-white/50 shadow-soft py-3 px-4 sm:px-6"
          } relative overflow-hidden`}
        >
          {/* Apple Specular Top Rim Highlight */}
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-90 pointer-events-none" />
          
          <div className="flex items-center justify-between gap-4">
            {/* Left: Brand Identity */}
            <Link
              href="/"
              className="group flex items-center gap-2.5 focus:outline-none shrink-0"
              aria-label={`${siteConfig.brandName} Home`}
            >
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-b from-brand-black to-brand-charcoal flex items-center justify-center text-white shadow-soft group-hover:scale-105 transition-all overflow-hidden border border-white/20">
                <span className="font-space font-extrabold text-sm sm:text-base text-lavender tracking-tighter">
                  UQ
                </span>
                {/* Glossy sheen reflection on logo */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-60 pointer-events-none" />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-space font-extrabold text-base sm:text-lg tracking-tight text-brand-black group-hover:text-lavender-deep transition-colors leading-tight">
                    {siteConfig.brandName}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse hidden sm:inline-block" />
                </div>
                <span className="font-inter text-[9px] uppercase tracking-widest text-neutral-500 font-semibold -mt-0.5">
                  Growth Agency
                </span>
              </div>
            </Link>

            {/* Center: Apple Liquid Glass Navigation Pill */}
            <nav className="hidden lg:flex items-center gap-0.5 p-1 rounded-full bg-black/[0.03] border border-black/[0.04] shadow-inner relative">
              {navLinks.map((link, idx) => {
                const isActive = pathname === link.href;
                const isHovered = hoveredIndex === idx;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={`relative px-3 xl:px-3.5 py-1.5 text-xs xl:text-sm font-inter transition-all duration-200 rounded-full z-10 ${
                      isActive
                        ? "text-brand-black font-semibold"
                        : "text-neutral-700 hover:text-brand-black font-medium"
                    }`}
                  >
                    {/* Active & Hover Pill Animation */}
                    {(isActive || isHovered) && (
                      <span
                        className={`absolute inset-0 rounded-full transition-all duration-300 -z-10 ${
                          isActive
                            ? "bg-white/90 shadow-sm border border-brand-border/60"
                            : "bg-white/60 shadow-none border border-transparent"
                        }`}
                      />
                    )}
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Actions */}
            <div className="hidden sm:flex items-center gap-2.5 shrink-0">
              <Link
                href="/contact"
                className="text-xs xl:text-sm font-inter font-medium text-neutral-700 hover:text-brand-black px-3 py-2 transition-colors rounded-full hover:bg-black/[0.03]"
              >
                Contact
              </Link>

              {/* Apple-Grade Animated Magnetic CTA Button */}
              <ButtonAnimated
                onClick={openAuditModal}
                variant="primary"
                size="sm"
                showArrow={true}
                className="!rounded-full px-5 py-2.5"
              >
                Get Free Audit
              </ButtonAnimated>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex lg:hidden items-center gap-2">
              <ButtonAnimated
                onClick={openAuditModal}
                variant="primary"
                size="sm"
                className="!rounded-full px-3 py-1.5 sm:hidden text-xs"
              >
                Audit
              </ButtonAnimated>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-white/80 border border-brand-border text-brand-black hover:bg-white transition-all shadow-soft cursor-pointer hover:scale-105 active:scale-95"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Frosted Glass Navigation Sheet */}
        {mobileMenuOpen && (
          <div className="pointer-events-auto lg:hidden mt-2 max-w-7xl mx-auto rounded-3xl bg-white/90 backdrop-blur-2xl border border-white/80 shadow-2xl p-6 transition-all animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-4 py-3 rounded-2xl text-base font-space font-bold transition-all flex items-center justify-between ${
                      isActive
                        ? "bg-lavender/30 text-brand-black shadow-sm"
                        : "text-neutral-700 hover:bg-neutral-100 hover:text-brand-black"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-neutral-400" />
                  </Link>
                );
              })}
            </div>

            <div className="pt-6 mt-4 border-t border-brand-border/60 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openAuditModal();
                }}
                className="w-full py-3.5 rounded-2xl bg-brand-black text-white font-space font-bold text-sm shadow-soft text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Free Account Audit</span>
                <ArrowUpRight className="w-4 h-4 text-lavender" />
              </button>

              <Link
                href="/contact"
                className="w-full py-3 rounded-2xl bg-white border border-brand-border text-brand-black font-space font-semibold text-sm text-center hover:bg-neutral-50 transition-colors"
              >
                Direct Contact
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
