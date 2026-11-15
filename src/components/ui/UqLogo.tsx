import React from "react";

interface UqLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  showText?: boolean;
  showTagline?: boolean;
  variant?: "dark" | "light";
}

export default function UqLogo({
  size = "md",
  className = "",
  showText = true,
  showTagline = true,
  variant = "dark",
}: UqLogoProps) {
  const dimensions = {
    sm: { icon: 28, text: "text-base", tagline: "text-[9px]" },
    md: { icon: 38, text: "text-lg", tagline: "text-[10px]" },
    lg: { icon: 48, text: "text-2xl", tagline: "text-xs" },
    xl: { icon: 64, text: "text-3xl", tagline: "text-sm" },
  }[size];

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Stylized UQ Monogram SVG */}
      <div
        className="relative shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
        style={{ width: dimensions.icon, height: dimensions.icon }}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_4px_12px_rgba(108,56,255,0.3)]"
        >
          <defs>
            <linearGradient id="uq-purple-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="50%" stopColor="#6C38FF" />
              <stop offset="100%" stopColor="#4F21D4" />
            </linearGradient>
            <linearGradient id="uq-tail-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2E2842" />
              <stop offset="100%" stopColor="#17151D" />
            </linearGradient>
            <filter id="uq-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* U loop: smooth flowing ribbon on the left */}
          <path
            d="M 22 24 
               C 22 24, 22 62, 22 64 
               C 22 78, 38 82, 46 72 
               C 50 67, 52 56, 52 46 
               L 52 24"
            stroke="url(#uq-purple-grad)"
            strokeWidth="14"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Q loop: interlocking oval ribbon on the right */}
          <path
            d="M 52 38 
               C 52 26, 64 22, 74 22 
               C 85 22, 92 32, 92 48 
               C 92 64, 85 74, 72 74 
               C 62 74, 55 68, 52 58"
            stroke="url(#uq-purple-grad)"
            strokeWidth="13"
            strokeLinecap="round"
          />

          {/* Q tail: stylized dynamic diagonal slash */}
          <path
            d="M 70 62 L 86 82"
            stroke={variant === "light" ? "#FFFFFF" : "#17151D"}
            strokeWidth="13"
            strokeLinecap="round"
          />
          {/* Accent dot on tail */}
          <circle cx="86" cy="82" r="2.5" fill="#6C38FF" />
        </svg>
      </div>

      {/* Brand Wordmark & Tagline */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 leading-none">
            <span
              className={`font-space font-extrabold tracking-tight ${dimensions.text} ${
                variant === "light" ? "text-white" : "text-brand-black"
              }`}
            >
              UNIQOVA<span className="text-[#6C38FF]">.</span>
            </span>
          </div>

          {showTagline && (
            <span
              className={`font-inter font-medium tracking-normal mt-1 ${dimensions.tagline} ${
                variant === "light" ? "text-neutral-300" : "text-neutral-500"
              }`}
            >
              Your Vision. Our Expertise.
            </span>
          )}
        </div>
      )}
    </div>
  );
}
