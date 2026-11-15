"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
  ShieldCheck,
  Lock,
} from "lucide-react";
import Audit3DCanvas from "@/components/3d/Audit3DCanvas";
import Card3DTilt from "@/components/ui/Card3DTilt";
import ButtonAnimated from "@/components/ui/ButtonAnimated";
import TextReveal from "@/components/ui/TextReveal";
import { AuditFormData } from "@/types";

export default function AuditCTASection() {
  const [formData, setFormData] = useState<AuditFormData>({
    fullName: "",
    brandName: "",
    email: "",
    phone: "",
    marketplace: "Amazon",
    storeUrl: "",
    monthlySales: "Under ₹5 Lakhs / $6k",
    primaryGoal: "Complete Account Management",
    message: "",
    honeypot: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof AuditFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof AuditFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }
    if (!formData.brandName.trim()) {
      newErrors.brandName = "Brand / business name is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Business email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Contact phone number is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Spam honeypot
    if (formData.honeypot) {
      console.warn("Spam detected");
      return;
    }

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1400));
      setIsSuccess(true);
    } catch {
      alert("Submission failed. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="audit" className="py-24 lg:py-32 relative overflow-hidden bg-brand-black text-white">
      {/* Background ambient lavender light */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-lavender/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-lavender-deep/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 dot-grid-dark opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline, Copy & Interactive 3D Audit Visual */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-lavender" />
              <span className="font-space text-xs font-semibold uppercase tracking-wider text-lavender">
                Comprehensive Forensic Review
              </span>
            </div>

            <h2 className="font-space font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
              <TextReveal>Let's Find What's Holding Your Marketplace Back.</TextReveal>
            </h2>

            <p className="font-inter text-neutral-300 text-sm sm:text-base leading-relaxed">
              Get an expert review of your marketplace presence and discover opportunities to improve your operations, listings, and growth strategy.
            </p>

            {/* 3D Audit Polyhedron Visual Canvas */}
            <div className="w-full flex items-center justify-center py-2">
              <Audit3DCanvas />
            </div>

            {/* Value Props Checklist */}
            <div className="space-y-3 pt-2 border-t border-white/15 text-xs font-inter text-neutral-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-lavender shrink-0" />
                <span>Catalog search indexing & reverse-ASIN gap audit</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-lavender shrink-0" />
                <span>PPC advertising efficiency & TACoS benchmark review</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-lavender shrink-0" />
                <span>100% confidential under mutual non-disclosure</span>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Audit Form with 3D Card Tilt */}
          <div className="lg:col-span-7">
            <Card3DTilt maxTilt={6} scale={1.01} glare={true}>
              <div
                style={{ transformStyle: "preserve-3d" }}
                className="rounded-3xl p-6 sm:p-10 bg-brand-charcoal/90 border border-white/15 backdrop-blur-xl shadow-2xl"
              >
                {isSuccess ? (
                  <div className="text-center py-12 px-4 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-lavender/25 text-lavender border border-lavender/40 mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <h3 className="font-space font-bold text-2xl sm:text-3xl text-white">
                      Audit Request Confirmed
                    </h3>
                    <p className="font-inter text-neutral-300 text-sm max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-white">{formData.fullName}</strong>. Our senior marketplace audit team has queued your store for forensic review. We will contact you at <strong className="text-white">{formData.email}</strong> within 24 business hours.
                    </p>
                    <button
                      onClick={() => {
                        setIsSuccess(false);
                        setFormData({
                          fullName: "",
                          brandName: "",
                          email: "",
                          phone: "",
                          marketplace: "Amazon",
                          storeUrl: "",
                          monthlySales: "Under ₹5 Lakhs / $6k",
                          primaryGoal: "Complete Account Management",
                          message: "",
                          honeypot: "",
                        });
                      }}
                      className="mt-4 px-6 py-3 rounded-xl bg-lavender text-brand-black font-space font-bold text-xs hover:bg-white transition-colors cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <div className="border-b border-white/10 pb-4 mb-2">
                      <span className="font-space font-bold text-xl text-white block">
                        Request Your Free Account Audit
                      </span>
                      <span className="font-inter text-xs text-neutral-400">
                        Fill out your brand details below. Zero obligation, purely actionable diagnostic findings.
                      </span>
                    </div>

                    {/* Honeypot for spam bots */}
                    <div className="hidden" aria-hidden="true">
                      <input
                        type="text"
                        name="honeypot"
                        value={formData.honeypot}
                        onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    {/* Row 1: Name & Brand */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-inter font-medium text-neutral-300 mb-1">
                          Full Name <span className="text-lavender">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => {
                            setFormData({ ...formData, fullName: e.target.value });
                            if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                          }}
                          placeholder="John Doe"
                          className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-brand-black/60 text-white placeholder-neutral-500 focus:outline-none transition-colors ${
                            errors.fullName
                              ? "border-red-400 focus:border-red-500"
                              : "border-white/15 focus:border-lavender"
                          }`}
                        />
                        {errors.fullName && (
                          <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.fullName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-inter font-medium text-neutral-300 mb-1">
                          Business / Brand Name <span className="text-lavender">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.brandName}
                          onChange={(e) => {
                            setFormData({ ...formData, brandName: e.target.value });
                            if (errors.brandName) setErrors({ ...errors, brandName: undefined });
                          }}
                          placeholder="Aura Essentials"
                          className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-brand-black/60 text-white placeholder-neutral-500 focus:outline-none transition-colors ${
                            errors.brandName
                              ? "border-red-400 focus:border-red-500"
                              : "border-white/15 focus:border-lavender"
                          }`}
                        />
                        {errors.brandName && (
                          <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.brandName}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Row 2: Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-inter font-medium text-neutral-300 mb-1">
                          Business Email Address <span className="text-lavender">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: undefined });
                          }}
                          placeholder="founder@yourbrand.com"
                          className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-brand-black/60 text-white placeholder-neutral-500 focus:outline-none transition-colors ${
                            errors.email
                              ? "border-red-400 focus:border-red-500"
                              : "border-white/15 focus:border-lavender"
                          }`}
                        />
                        {errors.email && (
                          <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-inter font-medium text-neutral-300 mb-1">
                          Phone / WhatsApp Number <span className="text-lavender">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => {
                            setFormData({ ...formData, phone: e.target.value });
                            if (errors.phone) setErrors({ ...errors, phone: undefined });
                          }}
                          placeholder="+91 98765 43210"
                          className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-brand-black/60 text-white placeholder-neutral-500 focus:outline-none transition-colors ${
                            errors.phone
                              ? "border-red-400 focus:border-red-500"
                              : "border-white/15 focus:border-lavender"
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Row 3: Current Marketplace & Store URL */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-inter font-medium text-neutral-300 mb-1">
                          Current Marketplace
                        </label>
                        <select
                          value={formData.marketplace}
                          onChange={(e) => setFormData({ ...formData, marketplace: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-white/15 bg-brand-black/60 text-white focus:outline-none focus:border-lavender cursor-pointer"
                        >
                          <option value="Amazon">Amazon (India or Global)</option>
                          <option value="Flipkart">Flipkart Seller Hub</option>
                          <option value="Meesho">Meesho Supplier Panel</option>
                          <option value="Shopify">Shopify D2C</option>
                          <option value="Multiple Channels">Multiple Channels</option>
                          <option value="New Seller Account Launch">New Seller Account Launch</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-inter font-medium text-neutral-300 mb-1">
                          Store / Product URL
                        </label>
                        <input
                          type="url"
                          value={formData.storeUrl}
                          onChange={(e) => setFormData({ ...formData, storeUrl: e.target.value })}
                          placeholder="https://amazon.in/dp/..."
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-white/15 bg-brand-black/60 text-white placeholder-neutral-500 focus:outline-none focus:border-lavender"
                        />
                      </div>
                    </div>

                    {/* Row 4: Monthly Sales Range & Goal */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-inter font-medium text-neutral-300 mb-1">
                          Monthly Sales Range (Optional)
                        </label>
                        <select
                          value={formData.monthlySales}
                          onChange={(e) => setFormData({ ...formData, monthlySales: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-white/15 bg-brand-black/60 text-white focus:outline-none focus:border-lavender cursor-pointer"
                        >
                          <option value="Pre-launch / New Seller">Pre-launch / New Seller</option>
                          <option value="Under ₹5 Lakhs / $6k">Under ₹5 Lakhs / $6k</option>
                          <option value="₹5L - ₹25 Lakhs / $6k - $30k">₹5L – ₹25 Lakhs / $6k – $30k</option>
                          <option value="₹25L - ₹1 Crore / $30k - $120k">₹25L – ₹1 Crore / $30k – $120k</option>
                          <option value="₹1 Crore+ / $120k+">₹1 Crore+ / $120k+</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-inter font-medium text-neutral-300 mb-1">
                          Primary Support Needed
                        </label>
                        <select
                          value={formData.primaryGoal}
                          onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-white/15 bg-brand-black/60 text-white focus:outline-none focus:border-lavender cursor-pointer"
                        >
                          <option value="Complete Account Management">Complete Account Management</option>
                          <option value="Listing Optimization & Keyword Indexing">Listing Optimization & Keywords</option>
                          <option value="A+ Content & Brand Store">A+ Content & Brand Store</option>
                          <option value="Marketplace Advertising & PPC">Marketplace Advertising & PPC</option>
                          <option value="RTO Reduction & Catalog Fixes">RTO Reduction & Catalog Fixes</option>
                          <option value="Multi-Marketplace Expansion">Multi-Marketplace Expansion</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-inter font-medium text-neutral-300 mb-1">
                        Additional Message (Optional)
                      </label>
                      <textarea
                        rows={2}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Mention any specific issues like account health warnings, high advertising spend, or listing suspensions..."
                        className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-white/15 bg-brand-black/60 text-white placeholder-neutral-500 focus:outline-none focus:border-lavender resize-none"
                      />
                    </div>

                    {/* CTA Submit Button with Physics & Animation */}
                    <div className="pt-2">
                      <ButtonAnimated
                        type="submit"
                        disabled={isSubmitting}
                        variant="lavender"
                        size="lg"
                        className="w-full !rounded-2xl shadow-glow hover:shadow-glowDark"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin text-brand-black" />
                            <span>Generating Diagnostic Intake...</span>
                          </>
                        ) : (
                          <>
                            <span>Request Your Free Account Audit</span>
                            <ShieldCheck className="w-4 h-4 text-brand-black" />
                          </>
                        )}
                      </ButtonAnimated>
                    </div>

                    <div className="flex items-center justify-center gap-3 text-[11px] text-neutral-400 pt-1">
                      <span className="flex items-center gap-1">
                        <Lock className="w-3 h-3 text-lavender" /> Strict Client Privacy
                      </span>
                      <span>•</span>
                      <span>Real Human Operators</span>
                      <span>•</span>
                      <span>Zero Spam Guaranteed</span>
                    </div>
                  </form>
                )}
              </div>
            </Card3DTilt>
          </div>
        </div>
      </div>
    </section>
  );
}
