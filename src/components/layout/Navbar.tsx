"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import UqLogo from "@/components/ui/UqLogo";
import { useAuditModal } from "@/context/AuditModalContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();
  const { openAuditModal } = useAuditModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  const navItems = [
    { name: "Home", href: "/", isHome: true },
    { name: "About", href: "/about" },
    {
      name: "Services",
      href: "/services",
      hasDropdown: true,
      subItems: [
        { name: "E-commerce Solutions", href: "/services" },
        { name: "Website Development", href: "/services" },
        { name: "App Development", href: "/services" },
        { name: "Graphic Designing", href: "/services" },
        { name: "Branding & Strategy", href: "/services" },
      ],
    },
    { name: "Our Work", href: "/case-studies" },
    { name: "Industries", href: "/platforms" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full transition-all duration-300 py-3 sm:py-4 px-4 sm:px-8 pointer-events-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 pointer-events-auto">
          {/* LEFT: Stylized UQ Logo & Brand Wordmark */}
          <Link
            href="/"
            className="group flex items-center focus:outline-none shrink-0"
            aria-label="UNIQOVA Home"
          >
            <UqLogo size="md" variant="dark" />
          </Link>

          {/* CENTER: Floating Frosted Glass Capsule Navigation Bar */}
          <nav className="hidden lg:flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-white/70 backdrop-blur-xl border border-white/80 shadow-[0_8px_30px_rgba(23,21,29,0.06)] relative">
            {navItems.map((item) => {
              const isActive = item.isHome ? pathname === "/" : pathname.startsWith(item.href);

              if (item.hasDropdown) {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className={`inline-flex items-center gap-1 px-4 py-2 text-xs font-inter font-medium rounded-full transition-all duration-200 ${
                        isActive
                          ? "bg-primary text-white shadow-[0_4px_14px_rgba(108,56,255,0.35)]"
                          : "text-neutral-700 hover:text-brand-black hover:bg-black/[0.04]"
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          servicesDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </Link>

                    {/* Dropdown Menu */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-56 animate-fade-in z-50">
                        <div className="bg-white/95 backdrop-blur-2xl rounded-2xl p-2 border border-white/80 shadow-[0_12px_36px_rgba(23,21,29,0.1)] flex flex-col gap-1">
                          {item.subItems?.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="px-3.5 py-2 text-xs font-inter text-neutral-700 hover:text-primary hover:bg-primary/5 rounded-xl transition-colors font-medium flex items-center justify-between group/sub"
                            >
                              <span>{sub.name}</span>
                              <span className="opacity-0 group-hover/sub:opacity-100 group-hover/sub:translate-x-0.5 transition-all text-primary">
                                →
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 text-xs font-inter transition-all duration-200 rounded-full font-medium ${
                    isActive
                      ? "bg-primary text-white shadow-[0_4px_14px_rgba(108,56,255,0.35)]"
                      : "text-neutral-700 hover:text-brand-black hover:bg-black/[0.04]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT: "Let's Talk ->" Dark Pill Button */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-brand-black text-white font-inter text-xs sm:text-sm font-semibold shadow-[0_4px_16px_rgba(23,21,29,0.2)] hover:bg-[#252230] hover:shadow-[0_8px_24px_rgba(23,21,29,0.3)] transition-all duration-200 active:scale-95"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full bg-white/80 border border-brand-border text-brand-black hover:bg-white shadow-soft transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Animated Navigation Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl lg:hidden flex flex-col justify-between p-6 pt-24 animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-space text-2xl font-bold text-brand-black hover:text-primary transition-colors py-1 flex items-center justify-between"
              >
                <span>{item.name}</span>
                <span className="text-sm font-normal text-neutral-400">→</span>
              </Link>
            ))}
          </div>

          <div className="space-y-4 pt-6 border-t border-brand-border">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-brand-black text-white font-medium text-sm shadow-soft"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openAuditModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-primary text-white font-medium text-sm shadow-soft"
            >
              <span>Get Free Account Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
