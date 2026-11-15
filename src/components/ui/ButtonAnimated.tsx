"use client";

import React, { useState, useRef, MouseEvent, ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export interface ButtonAnimatedProps {
  children: ReactNode;
  variant?: "primary" | "lavender" | "glass" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  className?: string;
  showArrow?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  magnetic?: boolean;
  ariaLabel?: string;
}

export default function ButtonAnimated({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  showArrow = false,
  type = "button",
  disabled = false,
  magnetic = true,
  ariaLabel,
}: ButtonAnimatedProps) {
  const btnRef = useRef<HTMLElement | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  // Magnetic hover tracking
  const handleMouseMove = (e: MouseEvent) => {
    if (!magnetic || disabled) return;
    const el = btnRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * 0.18;
    const deltaY = (e.clientY - centerY) * 0.18;

    setOffset({ x: deltaX, y: deltaY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setOffset({ x: 0, y: 0 });
  };

  // Click ripple effect
  const handleClick = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (disabled) return;
    const el = btnRef.current;
    if (el) {
      const rect = el.getBoundingClientRect();
      const rippleX = e.clientX - rect.left;
      const rippleY = e.clientY - rect.top;
      const id = Date.now();

      setRipples((prev) => [...prev, { x: rippleX, y: rippleY, id }]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 700);
    }

    if (onClick) onClick(e);
  };

  // Base styling for sizes
  const sizeClasses = {
    sm: "px-4 py-2 text-xs rounded-xl gap-2",
    md: "px-6 py-3.5 text-xs sm:text-sm rounded-2xl gap-2.5",
    lg: "px-8 py-4 sm:py-4.5 text-sm sm:text-base rounded-2xl gap-3",
  }[size];

  // Variant styling
  const variantClasses = {
    primary:
      "bg-brand-black text-white border border-white/20 shadow-card hover:shadow-cardHover hover:border-lavender/50",
    lavender:
      "bg-lavender text-brand-black border border-white/60 shadow-glow hover:bg-white hover:border-lavender hover:shadow-cardHover",
    glass:
      "bg-white/75 backdrop-blur-xl text-brand-black border border-white/90 shadow-soft hover:bg-white hover:border-lavender/60 hover:shadow-card",
    outline:
      "bg-transparent text-brand-black border border-brand-border hover:bg-white hover:border-brand-black shadow-soft",
    ghost:
      "bg-transparent text-brand-black hover:bg-white/80 border border-transparent hover:border-brand-border/60",
  }[variant];

  const commonClasses = `group relative inline-flex items-center justify-center font-space font-bold select-none cursor-pointer overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.97] ${sizeClasses} ${variantClasses} ${
    disabled ? "opacity-50 pointer-events-none" : ""
  } ${className}`;

  const transformStyle = magnetic
    ? {
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0px) scale(${isHovered ? 1.02 : 1})`,
        transition: isHovered
          ? "transform 0.15s ease-out, box-shadow 0.3s ease, border-color 0.3s ease"
          : "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease",
      }
    : undefined;

  const content = (
    <>
      {/* Specular Ambient Light Sweep Reflection */}
      <span className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden rounded-inherit">
        <span
          className={`absolute top-0 -inset-full w-1/2 h-full block bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 transition-all duration-700 ${
            isHovered ? "translate-x-[400%]" : "-translate-x-full"
          }`}
        />
      </span>

      {/* Pulsing Outer Glow halo (primary & lavender) */}
      {(variant === "primary" || variant === "lavender") && (
        <span
          className={`absolute -inset-1 rounded-inherit bg-lavender/30 blur-md pointer-events-none transition-opacity duration-500 -z-10 ${
            isHovered ? "opacity-100 scale-105" : "opacity-0 scale-95"
          }`}
        />
      )}

      {/* Click Ripple Elements */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-white/30 pointer-events-none animate-ping"
          style={{
            left: ripple.x - 20,
            top: ripple.y - 20,
            width: 40,
            height: 40,
          }}
        />
      ))}

      {/* Button Text / Children */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>

      {/* Animated Arrow Icon */}
      {showArrow && (
        <span className="relative z-10 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-lavender group-hover:text-brand-black group-hover:scale-110 group-hover:rotate-45">
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300" />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        ref={btnRef as React.RefObject<HTMLAnchorElement>}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        className={commonClasses}
        style={transformStyle}
        aria-label={ariaLabel}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      ref={btnRef as React.RefObject<HTMLButtonElement>}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      disabled={disabled}
      className={commonClasses}
      style={transformStyle}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
