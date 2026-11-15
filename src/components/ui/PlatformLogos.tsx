import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
}

export function AmazonLogo({ className = "h-8 w-auto", size }: LogoProps) {
  return (
    <svg
      viewBox="0 0 100 30"
      className={className}
      style={size ? { height: size, width: "auto" } : undefined}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Amazon Logo"
    >
      {/* Amazon stylized representation */}
      <text
        x="0"
        y="18"
        fontFamily="sans-serif"
        fontWeight="800"
        fontSize="17"
        letterSpacing="-0.5"
      >
        amazon
      </text>
      {/* Signature curved smile arrow */}
      <path
        d="M 5 22 C 25 28 50 28 65 21"
        fill="none"
        stroke="#FF9900"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M 64 19 L 66 22 L 61 23 Z"
        fill="#FF9900"
      />
    </svg>
  );
}

export function FlipkartLogo({ className = "h-8 w-auto", size }: LogoProps) {
  return (
    <svg
      viewBox="0 0 110 32"
      className={className}
      style={size ? { height: size, width: "auto" } : undefined}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Flipkart Logo"
    >
      {/* Bag Icon */}
      <rect x="2" y="7" width="18" height="20" rx="3" fill="#2874F0" />
      <path
        d="M 7 7 C 7 3, 15 3, 15 7"
        fill="none"
        stroke="#FFE500"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <text
        x="7"
        y="22"
        fontFamily="sans-serif"
        fontWeight="900"
        fontSize="14"
        fill="#FFE500"
        fontStyle="italic"
      >
        f
      </text>
      {/* Wordmark */}
      <text
        x="26"
        y="22"
        fontFamily="sans-serif"
        fontWeight="800"
        fontSize="17"
        fill="currentColor"
        fontStyle="italic"
        letterSpacing="-0.5"
      >
        Flipkart
      </text>
      <circle cx="98" cy="18" r="4" fill="#FFE500" />
    </svg>
  );
}

export function MeeshoLogo({ className = "h-8 w-auto", size }: LogoProps) {
  return (
    <svg
      viewBox="0 0 100 30"
      className={className}
      style={size ? { height: size, width: "auto" } : undefined}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Meesho Logo"
    >
      <circle cx="10" cy="15" r="9" fill="#E03B7C" />
      <path
        d="M 6 18 L 8 11 L 10 15 L 12 11 L 14 18"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text
        x="24"
        y="21"
        fontFamily="sans-serif"
        fontWeight="800"
        fontSize="17"
        fill="currentColor"
        letterSpacing="-0.5"
      >
        meesho
      </text>
    </svg>
  );
}

export function ShopifyLogo({ className = "h-8 w-auto", size }: LogoProps) {
  return (
    <svg
      viewBox="0 0 105 32"
      className={className}
      style={size ? { height: size, width: "auto" } : undefined}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Shopify Logo"
    >
      {/* Bag Icon */}
      <path
        d="M 17 6 L 19 8 L 7 11 L 5 28 L 22 28 L 24 10 Z"
        fill="#96BF48"
      />
      <path
        d="M 12 7 C 12 4, 16 4, 17 6 C 18 5, 20 6, 21 8"
        fill="none"
        stroke="#5E8E3E"
        strokeWidth="1.5"
      />
      {/* White 'S' on bag */}
      <text
        x="10"
        y="22"
        fontFamily="sans-serif"
        fontWeight="900"
        fontSize="12"
        fill="#FFFFFF"
      >
        S
      </text>
      {/* Wordmark */}
      <text
        x="29"
        y="22"
        fontFamily="sans-serif"
        fontWeight="800"
        fontSize="17"
        fill="currentColor"
        letterSpacing="-0.5"
      >
        shopify
      </text>
    </svg>
  );
}
