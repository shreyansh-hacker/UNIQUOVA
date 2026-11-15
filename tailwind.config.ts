import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6C38FF",    // Reference mockup vibrant violet
          hover: "#5B28E8",
          dark: "#4F21D4",
          light: "#8B5CF6",
          subtle: "#F5F2FF",
          glow: "rgba(108, 56, 255, 0.4)",
        },
        lavender: {
          light: "#E9E7EF",      // Light Lavender Grey
          DEFAULT: "#B9A7E8",    // Soft Lavender
          accent: "#9D84E0",     // Refined interactive lavender
          deep: "#8162D6",
          dark: "#5C3EB8",
        },
        brand: {
          black: "#17151D",      // Rich Black
          charcoal: "#1F1C27",   // Secondary dark
          cardDark: "#262232",   // Elevated dark surface
          white: "#FFFFFF",      // Pure White
          grey: "#D8D5DF",       // Neutral Grey
          subtle: "#F4F3F7",     // Soft off-white
          border: "rgba(216, 213, 223, 0.4)",
        },
      },
      fontFamily: {
        space: ["var(--font-space)", "Space Grotesk", "sans-serif"],
        inter: ["var(--font-inter)", "Inter", "sans-serif"],
        manrope: ["var(--font-manrope)", "Manrope", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(23, 21, 29, 0.05)",
        card: "0 20px 40px -15px rgba(185, 167, 232, 0.12), 0 0 1px 1px rgba(216, 213, 223, 0.6)",
        cardHover: "0 25px 50px -12px rgba(157, 132, 224, 0.22), 0 0 1px 1px rgba(185, 167, 232, 0.8)",
        glow: "0 0 50px -10px rgba(185, 167, 232, 0.45)",
        glowDark: "0 0 60px -15px rgba(185, 167, 232, 0.25)",
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      },
      animation: {
        'float-slow': 'float 7s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite',
        'float-1': 'floatCard1 5.5s ease-in-out infinite',
        'float-2': 'floatCard2 6.5s ease-in-out infinite 0.8s',
        'float-3': 'floatCard3 6s ease-in-out infinite 1.5s',
        'float-4': 'floatCard1 7s ease-in-out infinite 2s',
        'float-5': 'floatCard2 5s ease-in-out infinite 1.2s',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'spin-slow': 'spin 22s linear infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        floatCard1: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(0.8deg)' },
        },
        floatCard2: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(-1deg)' },
        },
        floatCard3: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(1.2deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
