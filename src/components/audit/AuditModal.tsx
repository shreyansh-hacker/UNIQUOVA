"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle2, AlertCircle, Loader2, Sparkles, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";
import { AuditFormData } from "@/types";
import ButtonAnimated from "@/components/ui/ButtonAnimated";

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuditModal({ isOpen, onClose }: AuditModalProps) {
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

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof AuditFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }
    if (!formData.brandName.trim()) {
      newErrors.brandName = "Please enter your brand or business name.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your business email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Please provide a contact phone number.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Spam honeypot check
    if (formData.honeypot) {
      console.warn("Honeypot field triggered");
      return;
    }

    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate realistic API processing
    try {
      await new Promise((resolve) => setTimeout(resolve, 1400));
      setIsSuccess(true);
    } catch {
      alert("Submission encountered an unexpected error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
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
    setErrors({});
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="audit-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-brand-black/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-3xl border border-brand-border shadow-2xl p-6 sm:p-8 my-8 text-brand-black">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-lavender-light hover:bg-lavender/40 text-brand-black transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-10 px-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-5 animate-bounce">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <span className="font-space font-bold text-2xl sm:text-3xl tracking-tight block mb-3">
              Audit Request Received
            </span>
            <p className="font-inter text-neutral-600 text-sm sm:text-base max-w-md mx-auto mb-6">
              Thank you, <strong className="text-brand-black">{formData.fullName}</strong>. Our senior marketplace audit team has been notified. We will review <strong className="text-brand-black">{formData.brandName}</strong> on {formData.marketplace} and contact you within 24 business hours.
            </p>
            <div className="p-4 rounded-2xl bg-lavender-light/60 border border-lavender/40 max-w-md mx-auto text-left text-xs text-neutral-600 mb-8 space-y-1.5">
              <div className="font-medium text-brand-black">What happens next:</div>
              <div>• 1. Account & listing telemetry inspection</div>
              <div>• 2. Buy Box & competitor pricing gap analysis</div>
              <div>• 3. Delivery of confidential roadmap deck via email</div>
            </div>
            <button
              onClick={resetForm}
              className="px-8 py-3 rounded-xl bg-brand-black text-white font-space font-semibold text-sm hover:bg-brand-charcoal transition-colors"
            >
              Done & Return
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6 pr-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lavender/25 text-brand-black text-xs font-space font-medium mb-2.5">
                <Sparkles className="w-3.5 h-3.5 text-lavender-deep" />
                Zero-Obligation Expert Review
              </div>
              <h2
                id="audit-modal-title"
                className="font-space font-bold text-2xl sm:text-3xl tracking-tight text-brand-black"
              >
                Request Your Free Marketplace Audit
              </h2>
              <p className="font-inter text-xs sm:text-sm text-neutral-600 mt-1.5">
                Our marketplace specialists will audit your catalog, advertising efficiency, and account health to identify immediate growth bottlenecks.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Anti-spam honeypot (hidden from human users) */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="modal-honeypot">Leave blank</label>
                <input
                  type="text"
                  id="modal-honeypot"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* Grid 1: Name & Brand */}
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
                    placeholder="e.g. Rahul Sharma / Sarah Jenkins"
                    className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-lavender-light/40 focus:bg-white transition-all ${
                      errors.fullName
                        ? "border-red-400 focus:border-red-500"
                        : "border-brand-border focus:border-lavender-accent"
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.fullName}
                    </p>
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
                    placeholder="e.g. Aura Naturals"
                    className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-lavender-light/40 focus:bg-white transition-all ${
                      errors.brandName
                        ? "border-red-400 focus:border-red-500"
                        : "border-brand-border focus:border-lavender-accent"
                    }`}
                  />
                  {errors.brandName && (
                    <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.brandName}
                    </p>
                  )}
                </div>
              </div>

              {/* Grid 2: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-inter font-semibold text-neutral-800 mb-1">
                    Work Email Address <span className="text-red-500">*</span>
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
                    className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-lavender-light/40 focus:bg-white transition-all ${
                      errors.email
                        ? "border-red-400 focus:border-red-500"
                        : "border-brand-border focus:border-lavender-accent"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-inter font-semibold text-neutral-800 mb-1">
                    Phone / WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: undefined });
                    }}
                    placeholder="+91 98765 43210 / +1..."
                    className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-lavender-light/40 focus:bg-white transition-all ${
                      errors.phone
                        ? "border-red-400 focus:border-red-500"
                        : "border-brand-border focus:border-lavender-accent"
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Grid 3: Marketplace & Store URL */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-inter font-semibold text-neutral-800 mb-1">
                    Primary Marketplace
                  </label>
                  <select
                    value={formData.marketplace}
                    onChange={(e) => setFormData({ ...formData, marketplace: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-brand-border bg-lavender-light/40 focus:bg-white transition-all cursor-pointer"
                  >
                    <option value="Amazon">Amazon (IN, US, UK, EU)</option>
                    <option value="Flipkart">Flipkart Seller Hub</option>
                    <option value="Meesho">Meesho Supplier Hub</option>
                    <option value="Shopify">Shopify D2C Store</option>
                    <option value="Multiple Marketplaces">Multiple Marketplaces</option>
                    <option value="Launching New Seller Account">Launching New Account</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-inter font-semibold text-neutral-800 mb-1">
                    Store / Brand Listing URL
                  </label>
                  <input
                    type="url"
                    value={formData.storeUrl}
                    onChange={(e) => setFormData({ ...formData, storeUrl: e.target.value })}
                    placeholder="https://amazon.in/dp/... or store.com"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-brand-border bg-lavender-light/40 focus:bg-white transition-all"
                  >
                  </input>
                </div>
              </div>

              {/* Grid 4: Monthly Sales & Service Need */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-inter font-semibold text-neutral-800 mb-1">
                    Monthly Marketplace Sales (Optional)
                  </label>
                  <select
                    value={formData.monthlySales}
                    onChange={(e) => setFormData({ ...formData, monthlySales: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-brand-border bg-lavender-light/40 focus:bg-white transition-all cursor-pointer"
                  >
                    <option value="Just starting / Pre-launch">Just starting / Pre-launch</option>
                    <option value="Under ₹5 Lakhs / $6k">Under ₹5 Lakhs / $6k</option>
                    <option value="₹5L - ₹25 Lakhs / $6k - $30k">₹5L – ₹25 Lakhs / $6k – $30k</option>
                    <option value="₹25L - ₹1 Crore / $30k - $120k">₹25L – ₹1 Crore / $30k – $120k</option>
                    <option value="₹1 Crore+ / $120k+">₹1 Crore+ / $120k+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-inter font-semibold text-neutral-800 mb-1">
                    What do you need help with?
                  </label>
                  <select
                    value={formData.primaryGoal}
                    onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-brand-border bg-lavender-light/40 focus:bg-white transition-all cursor-pointer"
                  >
                    <option value="Complete Account Management">Complete Account Management</option>
                    <option value="Listing Optimization & SEO">Listing Optimization & SEO</option>
                    <option value="A+ Content & Brand Store Design">A+ Content & Brand Store Design</option>
                    <option value="Advertising & PPC Management">Marketplace Advertising / PPC</option>
                    <option value="RTO Reduction & Catalog Fixes">RTO Reduction & Catalog Fixes</option>
                    <option value="Expansion to New Marketplace">Expansion to New Marketplace</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-inter font-semibold text-neutral-800 mb-1">
                  Additional Context or Specific Challenges (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your biggest bottlenecks: high advertising TACoS, rejected listings, Buy Box losses, or scaling goals..."
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-brand-border bg-lavender-light/40 focus:bg-white transition-all resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <ButtonAnimated
                  type="submit"
                  disabled={isSubmitting}
                  variant="primary"
                  size="md"
                  className="w-full !rounded-xl"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-lavender" />
                      <span>Analyzing marketplace parameters...</span>
                    </>
                  ) : (
                    <>
                      <span>Request Your Free Account Audit</span>
                      <ShieldCheck className="w-4 h-4 text-lavender" />
                    </>
                  )}
                </ButtonAnimated>
              </div>

              <div className="flex items-center justify-center gap-4 text-[11px] text-neutral-500 pt-1">
                <span>🔒 100% Confidential NDA</span>
                <span>•</span>
                <span>No software installation required</span>
                <span>•</span>
                <span>Response in 24h</span>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
