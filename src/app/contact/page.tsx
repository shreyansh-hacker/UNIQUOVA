"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Loader2,
  MessageSquare,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { AuditFormData } from "@/types";
import Card3DTilt from "@/components/ui/Card3DTilt";

export default function ContactPage() {
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
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!formData.brandName.trim()) newErrors.brandName = "Brand name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return;
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1400));
      setIsSuccess(true);
    } catch {
      alert("Submission error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-brand-border shadow-soft mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-lavender-deep" />
            <span className="font-space text-xs font-semibold uppercase tracking-wider text-brand-black">
              Direct Communication
            </span>
          </div>

          <h1 className="font-space font-extrabold text-4xl sm:text-5xl md:text-6xl text-brand-black tracking-tight mb-6">
            Let's Discuss Your Marketplace Goals.
          </h1>

          <p className="font-inter text-neutral-600 text-base sm:text-lg leading-relaxed">
            Reach out directly to {siteConfig.brandName}'s senior marketplace partners. Whether you are launching a new brand or managing a complex multi-marketplace enterprise, our team is ready to evaluate your operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Agency Channels & Offices in 3D Cards */}
          <div className="lg:col-span-5 space-y-8">
            <Card3DTilt maxTilt={8} scale={1.02} glare={true}>
              <div
                style={{ transformStyle: "preserve-3d" }}
                className="rounded-3xl p-8 bg-white border border-brand-border shadow-card hover:shadow-cardHover space-y-6 transition-all"
              >
                <h2 style={{ transform: "translateZ(25px)" }} className="font-space font-bold text-xl text-brand-black">
                  Direct Channels
                </h2>

                <div style={{ transform: "translateZ(20px)" }} className="space-y-4 text-sm font-inter">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-lavender/30 flex items-center justify-center shrink-0 shadow-soft">
                      <Mail className="w-5 h-5 text-lavender-deep" />
                    </div>
                    <div>
                      <span className="text-xs text-neutral-500 font-medium block">
                        General & Partnership Inquiries
                      </span>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="font-space font-semibold text-brand-black hover:text-lavender-deep transition-colors"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-lavender/30 flex items-center justify-center shrink-0 shadow-soft">
                      <Phone className="w-5 h-5 text-lavender-deep" />
                    </div>
                    <div>
                      <span className="text-xs text-neutral-500 font-medium block">
                        Direct WhatsApp & Phone Line
                      </span>
                      <span className="font-space font-semibold text-brand-black">
                        {siteConfig.contact.phone}
                      </span>
                      <span className="text-xs text-neutral-500 block">
                        International: {siteConfig.contact.international}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-lavender/30 flex items-center justify-center shrink-0 shadow-soft">
                      <Clock className="w-5 h-5 text-lavender-deep" />
                    </div>
                    <div>
                      <span className="text-xs text-neutral-500 font-medium block">
                        Operating Hours
                      </span>
                      <span className="text-xs text-neutral-700 leading-snug">
                        {siteConfig.contact.operatingHours}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Card3DTilt>

            {/* Hubs */}
            <Card3DTilt maxTilt={8} scale={1.02} glare={true}>
              <div
                style={{ transformStyle: "preserve-3d" }}
                className="rounded-3xl p-8 bg-white border border-brand-border shadow-card hover:shadow-cardHover space-y-6 transition-all"
              >
                <h2 style={{ transform: "translateZ(25px)" }} className="font-space font-bold text-xl text-brand-black">
                  Physical Office Hubs
                </h2>

                <div style={{ transform: "translateZ(20px)" }} className="space-y-4">
                  {siteConfig.contact.offices.map((office, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-lavender-light/40 border border-brand-border/60 shadow-soft">
                      <div className="flex items-center gap-2 font-space font-bold text-sm text-brand-black mb-1">
                        <MapPin className="w-4 h-4 text-lavender-deep" />
                        <span>{office.city}, {office.country}</span>
                      </div>
                      <p className="text-xs font-inter text-neutral-600 leading-relaxed">
                        {office.address}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Card3DTilt>
          </div>

          {/* Right Column: Contact & Intake Form with 3D Tilt */}
          <div className="lg:col-span-7">
            <Card3DTilt maxTilt={6} scale={1.01} glare={true}>
              <div
                style={{ transformStyle: "preserve-3d" }}
                className="rounded-3xl p-8 sm:p-10 bg-white border border-brand-border shadow-card hover:shadow-cardHover transition-all"
              >
                {isSuccess ? (
                  <div className="text-center py-12 px-4 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-soft">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <h3 className="font-space font-bold text-2xl text-brand-black">
                      Inquiry Transmitted to {siteConfig.brandName}
                    </h3>
                    <p className="font-inter text-neutral-600 text-sm max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-brand-black">{formData.fullName}</strong>. A dedicated marketplace director has received your message regarding <strong className="text-brand-black">{formData.brandName}</strong> and will connect within 24 business hours.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="mt-4 px-6 py-2.5 rounded-xl bg-brand-black text-white font-space font-semibold text-xs cursor-pointer hover:bg-brand-charcoal"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <div className="border-b border-brand-border/60 pb-4 mb-2">
                      <span className="font-space font-bold text-xl text-brand-black block">
                        Send Us an Inquiry / Request Audit
                      </span>
                      <span className="font-inter text-xs text-neutral-500">
                        We respond directly within 24 business hours.
                      </span>
                    </div>

                    {/* Honeypot */}
                    <div className="hidden" aria-hidden="true">
                      <input
                        type="text"
                        value={formData.honeypot}
                        onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-inter font-semibold text-neutral-800 mb-1">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => {
                            setFormData({ ...formData, fullName: e.target.value });
                            if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                          }}
                          placeholder="Your name"
                          className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-lavender-light/40 focus:bg-white transition-all ${
                            errors.fullName ? "border-red-400" : "border-brand-border focus:border-lavender-accent"
                          }`}
                        />
                        {errors.fullName && (
                          <p className="text-[11px] text-red-500 mt-1">{errors.fullName}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-inter font-semibold text-neutral-800 mb-1">
                          Brand / Business Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.brandName}
                          onChange={(e) => {
                            setFormData({ ...formData, brandName: e.target.value });
                            if (errors.brandName) setErrors({ ...errors, brandName: undefined });
                          }}
                          placeholder="Your brand"
                          className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-lavender-light/40 focus:bg-white transition-all ${
                            errors.brandName ? "border-red-400" : "border-brand-border focus:border-lavender-accent"
                          }`}
                        />
                        {errors.brandName && (
                          <p className="text-[11px] text-red-500 mt-1">{errors.brandName}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-inter font-semibold text-neutral-800 mb-1">
                          Work Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: undefined });
                          }}
                          placeholder="you@brand.com"
                          className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-lavender-light/40 focus:bg-white transition-all ${
                            errors.email ? "border-red-400" : "border-brand-border focus:border-lavender-accent"
                          }`}
                        />
                        {errors.email && (
                          <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-inter font-semibold text-neutral-800 mb-1">
                          Phone / WhatsApp <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => {
                            setFormData({ ...formData, phone: e.target.value });
                            if (errors.phone) setErrors({ ...errors, phone: undefined });
                          }}
                          placeholder="+91..."
                          className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-lavender-light/40 focus:bg-white transition-all ${
                            errors.phone ? "border-red-400" : "border-brand-border focus:border-lavender-accent"
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-inter font-semibold text-neutral-800 mb-1">
                          Primary Marketplace
                        </label>
                        <select
                          value={formData.marketplace}
                          onChange={(e) => setFormData({ ...formData, marketplace: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-brand-border bg-lavender-light/40 focus:bg-white cursor-pointer"
                        >
                          <option value="Amazon">Amazon</option>
                          <option value="Flipkart">Flipkart</option>
                          <option value="Meesho">Meesho</option>
                          <option value="Shopify">Shopify</option>
                          <option value="Multiple">Multiple Channels</option>
                          <option value="New Launch">New Seller Account</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-inter font-semibold text-neutral-800 mb-1">
                          Store / Product URL
                        </label>
                        <input
                          type="url"
                          value={formData.storeUrl}
                          onChange={(e) => setFormData({ ...formData, storeUrl: e.target.value })}
                          placeholder="https://..."
                          className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-brand-border bg-lavender-light/40 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-inter font-semibold text-neutral-800 mb-1">
                        Message / What do you need help with?
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your marketplace goals or current bottlenecks..."
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-brand-border bg-lavender-light/40 focus:bg-white resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 px-6 rounded-xl font-space font-bold text-sm text-white bg-brand-black hover:bg-brand-charcoal transition-all shadow-card flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin text-lavender" />
                            <span>Sending inquiry...</span>
                          </>
                        ) : (
                          <>
                            <span>Submit Inquiry & Free Audit Request</span>
                            <ShieldCheck className="w-4 h-4 text-lavender" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </Card3DTilt>
          </div>
        </div>
      </div>
    </div>
  );
}
