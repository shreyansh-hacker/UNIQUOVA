import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, Manrope } from "next/font/google";
import "./globals.css";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlobalBackground3D from "@/components/3d/GlobalBackground3D";
import IntroLoader from "@/components/ui/IntroLoader";
import CustomCursor from "@/components/ui/CustomCursor";
import { AuditModalProvider } from "@/context/AuditModalContext";
import { siteConfig } from "@/config/site";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#E9E7EF",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.brandName} — Premium E-Commerce Account Management & Growth Agency`,
    template: `%s | ${siteConfig.brandName}`,
  },
  description:
    "We help ambitious brands manage, optimize, and scale across Amazon, Flipkart, Meesho, and Shopify through hands-on marketplace operational expertise, listing optimization, advertising, and growth strategy.",
  keywords: [
    "marketplace management agency",
    "Amazon seller account management",
    "Flipkart account manager",
    "Meesho seller growth",
    "Shopify scaling agency",
    "Amazon PPC management",
    "A+ content design",
    "ecommerce growth agency",
  ],
  authors: [{ name: siteConfig.brandName }],
  creator: siteConfig.brandName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://uniquova.com",
    title: `${siteConfig.brandName} — E-Commerce Account Management & Growth Agency`,
    description:
      "Strategic marketplace management, listing optimization, and advertising scale across Amazon, Flipkart, Meesho, and Shopify.",
    siteName: siteConfig.brandName,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brandName} — E-Commerce Growth Agency`,
    description:
      "Marketplace management, listing optimization, and ad scaling across Amazon, Flipkart, Meesho & Shopify.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${manrope.variable}`}
    >
      <body className="font-inter bg-lavender-light text-brand-black antialiased selection:bg-lavender selection:text-brand-black relative">
        {/* Futuristic Intro Entrance Loader */}
        <IntroLoader />

        {/* Custom 3D Animated Spring Cursor & Sparking Stardust Particles */}
        <CustomCursor />

        {/* Global Ambient 3D Interactive Canvas across the entire page */}
        <GlobalBackground3D />

        <AuditModalProvider>
          {/* SECTION 01: Top Announcement Bar */}
          <AnnouncementBar />

          {/* SECTION 02: Sticky Navigation Bar */}
          <Navbar />

          {/* Page Main Content */}
          <div className="relative overflow-x-hidden min-h-[calc(100vh-200px)] z-10">
            {children}
          </div>

          {/* SECTION 12: Final Multi-Column Agency Footer */}
          <Footer />
        </AuditModalProvider>
      </body>
    </html>
  );
}
