export const siteConfig = {
  brandName: "UNIQOVA",
  displayBrandName: "UNIQOVA.",
  legalName: "UNIQOVA Digital Growth Agency Ltd.",
  tagline: "Your Vision. Our Expertise.",
  heroHeadline: {
    line1: "Your Vision,",
    line2: "Our Digital Expertise.",
    highlightWord: "Digital",
  },
  heroSubtitle:
    "From e-commerce to cutting-edge technology, we craft innovative solutions to help your business grow faster, smarter and bigger.",
  heroSupporting: "Strategic expertise. Hands-on execution. Measurable progress.",
  announcement: "Full-Service Digital Agency · Helping ambitious brands scale globally.",
  
  contact: {
    email: "growth@uniquova.com",
    phone: "+91 (0) 800-UNIQUOVA",
    international: "+1 (800) 555-UNIQ",
    offices: [
      {
        city: "Bengaluru",
        country: "India",
        address: "E-Commerce Innovation Corridor, Indiranagar, Bengaluru 560038",
      },
      {
        city: "London / Global",
        country: "International Hub",
        address: "71-75 Shelton Street, Covent Garden, London, WC2H 9JQ",
      },
    ],
    operatingHours: "Monday – Saturday: 9:00 AM – 7:00 PM IST / EST coverage available",
  },

  socials: {
    linkedin: "https://linkedin.com/company/uniquova",
    twitter: "https://twitter.com/uniquova",
    instagram: "https://instagram.com/uniquova",
    youtube: "https://youtube.com/@uniquova",
  },

  nav: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Platforms", href: "/platforms" },
    { name: "Why Us", href: "/#why-us" },
    { name: "Process", href: "/#process" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],

  platforms: [
    {
      id: "amazon",
      name: "Amazon",
      tagline: "Global Marketplace Dominance & SPN-Grade Mastery",
      badge: "India & Global",
      description:
        "End-to-end management across Amazon.in, Amazon US, UK, UAE, and EU. From Seller Central operational excellence to Brand Registry, sponsored ads optimization, and A+ visual storefronts.",
      markets: ["Amazon India", "Amazon North America", "Amazon Europe", "Amazon UAE"],
      coreFocus: [
        "Seller Central operations & IPI score management",
        "PPC & DSP advertising optimization",
        "Brand Registry & storefront design",
        "A+ EBC & lifestyle infographics",
        "Category ungating & policy compliance",
      ],
      accentColor: "#FF9900",
      accentBg: "rgba(255, 153, 0, 0.08)",
      glowColor: "rgba(255, 153, 0, 0.25)",
      logoSvg: "amazon",
    },
    {
      id: "flipkart",
      name: "Flipkart",
      tagline: "India's Premier Consumer Marketplace Engine",
      badge: "India Specialist",
      description:
        "Comprehensive Flipkart Seller Hub management tailored for Tier 1, 2, and 3 consumer segments. Big Billion Days preparation, Smart Fulfillment, F-Assured badge strategy, and catalog excellence.",
      markets: ["Flipkart India", "Shopsy by Flipkart"],
      coreFocus: [
        "Flipkart Assured (F-Assured) badge qualification",
        "Big Billion Days & festive promotional planning",
        "Flipkart PLA & PCA advertising management",
        "Smart Fulfillment & tier inventory routing",
        "Brand Mall & rich product pages",
      ],
      accentColor: "#2874F0",
      accentBg: "rgba(40, 116, 240, 0.08)",
      glowColor: "rgba(40, 116, 240, 0.25)",
      logoSvg: "flipkart",
    },
    {
      id: "meesho",
      name: "Meesho",
      tagline: "High-Volume Social Commerce & Bharat Growth",
      badge: "Fastest Growing",
      description:
        "Scale massive transaction volume across Bharat. Low-commission catalog optimization, price point strategy, return-rate (RTO) control, and trending keyword capture.",
      markets: ["Pan-India Tier 2/3/4", "Reseller & Direct Ecosystem"],
      coreFocus: [
        "Competitive price index & bundle positioning",
        "RTO minimization & reverse logistics management",
        "High-velocity catalog listings",
        "Sponsored search ads for top carousel placement",
        "Supplier panel compliance & payout reconciliation",
      ],
      accentColor: "#E03B7C",
      accentBg: "rgba(224, 59, 124, 0.08)",
      glowColor: "rgba(224, 59, 124, 0.25)",
      logoSvg: "meesho",
    },
    {
      id: "shopify",
      name: "Shopify",
      tagline: "D2C Brand Flagship & Direct Channel Scaling",
      badge: "D2C & Omnichannel",
      description:
        "Build and scale your independent digital flagship. High-converting custom theme architecture, checkout optimization, omnichannel sync with marketplaces, and performance marketing alignment.",
      markets: ["Global Direct-to-Consumer", "Multi-Currency & Cross-Border"],
      coreFocus: [
        "Conversion rate optimization (CRO) & UX design",
        "Marketplace inventory & ERP synchronization",
        "High-speed responsive Shopify 2.0 architecture",
        "Payment gateway & checkout funnel streamlining",
        "Retention, email marketing & post-purchase workflows",
      ],
      accentColor: "#96BF48",
      accentBg: "rgba(150, 191, 72, 0.08)",
      glowColor: "rgba(150, 191, 72, 0.25)",
      logoSvg: "shopify",
    },
  ],

  services: [
    {
      id: "seller-account-management",
      slug: "seller-account-management",
      number: "01",
      title: "Seller Account Management",
      shortDesc: "Complete day-to-day marketplace operations, account health protection, and compliance execution by veteran managers.",
      fullDesc:
        "Operating on modern marketplaces is demanding and unforgiving. Our dedicated account managers handle your daily catalog updates, inventory dispatch schedules, customer feedback, claim disputes, and operational SLAs so your account stays in pristine health and top tier ranking.",
      deliverables: [
        "Daily Seller Central & marketplace hub monitoring",
        "Inventory planning, restocking alerts & FBA/FBF prep",
        "Order dispatch SLA & fulfillment tracking",
        "Account Health Rating (AHR) & defect rate control",
        "Marketplace policy compliance & category ungating",
        "Claims, dispute handling & payment reconciliations",
      ],
      iconName: "ShieldCheck",
      platforms: ["Amazon", "Flipkart", "Meesho", "Shopify"],
      timeframe: "Ongoing dedicated operational retainer",
    },
    {
      id: "product-listing-optimization",
      slug: "product-listing-optimization",
      number: "02",
      title: "Product Listing Optimization",
      shortDesc: "Algorithmic search indexing, commercial keyword architecture, and conversion-engineered product copy.",
      fullDesc:
        "Being indexed is good; ranking at the top for high-intent customer searches is everything. We conduct deep marketplace keyword research using reverse-ASIN data, customer search telemetry, and competitor gap analysis to engineer titles, bullet points, backend search terms, and descriptions that convert.",
      deliverables: [
        "Deep reverse-ASIN & marketplace keyword research",
        "Search-optimized, conversion-focused product titles",
        "Benefit-driven bullet points addressing buyer pain points",
        "Algorithmic backend search terms & hidden attribute mapping",
        "Competitor gap analysis & price-value positioning",
        "Continuous A/B testing on titles and feature points",
      ],
      iconName: "SearchCheck",
      platforms: ["Amazon", "Flipkart", "Meesho", "Shopify"],
      timeframe: "Continuous optimization cycles",
    },
    {
      id: "a-plus-content-brand-store",
      slug: "a-plus-content-brand-store",
      number: "03",
      title: "A+ Content & Brand Store",
      shortDesc: "Immersive visual storytelling, premium Enhanced Brand Content (EBC), and bespoke Brand Stores that elevate your stature.",
      fullDesc:
        "High-value customers expect a luxury shopping experience even inside marketplace ecosystems. We design magazine-grade A+ Content, Premium A+ modules, comparison charts, and multi-page Brand Stores that build immediate trust, increase dwell time, and lift unit session conversion rates.",
      deliverables: [
        "Bespoke modular A+ and Premium A+ layout design",
        "Multi-page Brand Store architecture & navigation",
        "Interactive product comparison grids and spec charts",
        "Cross-selling module design to increase average order value",
        "Brand story module craft highlighting founder heritage",
        "Mobile-first responsive asset rendering & compliance submission",
      ],
      iconName: "Palette",
      platforms: ["Amazon", "Flipkart", "Shopify"],
      timeframe: "7–14 days per catalog batch",
    },
    {
      id: "marketplace-advertising",
      slug: "marketplace-advertising",
      number: "04",
      title: "Marketplace Advertising",
      shortDesc: "Targeted Sponsored Products, Brands, and Display campaigns engineered for efficient TACoS and scale.",
      fullDesc:
        "Marketplace advertising is not about spending more; it's about spending with forensic discipline. Our certified media buyers structure granular campaigns across Sponsored Products, Sponsored Brands, Video Ads, and Display to capture market share while systematically eliminating ad spend waste.",
      deliverables: [
        "Granular campaign structuring (Exact, Phrase, Broad, ASIN targeting)",
        "Negative keyword harvesting & bid optimization algorithms",
        "Sponsored Brand Video & headline banner ad production",
        "Target Total Advertising Cost of Sales (TACoS) modeling",
        "Dayparting & seasonal surge budget allocation",
        "Transparent weekly reporting & attribution tracking",
      ],
      iconName: "TrendingUp",
      platforms: ["Amazon PPC", "Flipkart Ads", "Meesho Ads", "Shopify Ads"],
      timeframe: "Continuous active ad management",
    },
    {
      id: "product-creatives-visual-content",
      slug: "product-creatives-visual-content",
      number: "05",
      title: "Product Creatives & Visual Content",
      shortDesc: "High-impact gallery images, lifestyle renders, infographics, and stop-the-scroll marketplace creatives.",
      fullDesc:
        "On digital shelves, your visual gallery is your packaging, your salesman, and your guarantee. We create photorealistic product infographics, 3D dimension visuals, lifestyle usage scenarios, and certification badges tailored specifically to marketplace display standards.",
      deliverables: [
        "Hero main image compliance & click-through optimization",
        "Feature-highlighting infographics with clear callouts",
        "Lifestyle composite imagery showing scale and real-world use",
        "Product comparison visuals & dimension diagrams",
        "Instructional how-to-use visual guides",
        "Marketplace-ready high-resolution exports",
      ],
      iconName: "Sparkles",
      platforms: ["Amazon", "Flipkart", "Meesho", "Shopify"],
      timeframe: "Weekly sprint cycles",
    },
    {
      id: "growth-strategy-consulting",
      slug: "growth-strategy-consulting",
      number: "06",
      title: "Growth Strategy & Consulting",
      shortDesc: "Strategic expansion roadmaps, unit economics modeling, competitor intelligence, and catalog expansion planning.",
      fullDesc:
        "Growth requires more than reactive tactics. Our senior marketplace consultants analyze your gross margins, category velocity, competitor vulnerabilities, and market demand to formulate a disciplined 6- to 12-month growth roadmap for regional and international expansion.",
      deliverables: [
        "Category demand forecasting & market size mapping",
        "Competitor pricing, reviews, and stock depth intelligence",
        "Unit economics, margin protection & fee breakdown audits",
        "Cross-marketplace and international market entry plans",
        "Private label & bundle opportunity discovery",
        "Executive advisory sessions & monthly roadmap reviews",
      ],
      iconName: "Compass",
      platforms: ["All Platforms & Omnichannel"],
      timeframe: "Quarterly advisory & monthly milestones",
    },
  ],

  whyChooseUs: [
    {
      title: "Dedicated Marketplace Practitioners",
      description:
        "We are not software salespeople or a hands-off dashboard. You get assigned experienced marketplace account operators who work directly on your brand every single business day.",
      badge: "Human Expertise",
    },
    {
      title: "Tailored to Your Category & Brand DNA",
      description:
        "No boilerplate strategies. Whether you sell premium electronics, beauty, apparel, or FMCG goods, we tailor listing structures, pricing strategy, and visual tone to your unique customer.",
      badge: "Custom Strategy",
    },
    {
      title: "Forensic Performance Discipline",
      description:
        "Every ad rupee or dollar spent, every listing change, and every promotion is tracked against your bottom-line profitability and organic ranking velocity, not just vanity metrics.",
      badge: "ROAS & TACoS Focus",
    },
    {
      title: "Radical Transparency & Direct Comms",
      description:
        "Weekly performance reports, clear milestone boards, and direct communication channels. You always know what was executed, what changed, and what is coming next.",
      badge: "Real Transparency",
    },
    {
      title: "Complete Operational Coverage",
      description:
        "From listing uploads and image design to complex Amazon Safe-T claims and Flipkart ticket resolutions, our team relieves you of exhausting administrative overhead.",
      badge: "End-to-End Care",
    },
    {
      title: "Sustainable Long-Term Growth",
      description:
        "We avoid black-hat shortcuts that jeopardize your account health. We build resilient brand equity and sustainable organic ranking built to endure marketplace algorithm updates.",
      badge: "Sustainable Scale",
    },
  ],

  processSteps: [
    {
      step: "01",
      name: "Discover",
      label: "Audit & Immersion",
      summary: "We understand your business, products, goals, and current marketplace challenges.",
      details:
        "We conduct an exhaustive forensic audit of your existing marketplace presence: catalog indexing, buy box share, return rates, pricing competitiveness, and ad performance history to uncover root friction points.",
    },
    {
      step: "02",
      name: "Strategize",
      label: "Bespoke Action Plan",
      summary: "We create a tailored action plan based on your needs and opportunities.",
      details:
        "We draft a prioritized 90-day roadmap: fixing compliance or inventory bottlenecks first, mapping target keywords, planning creative assets, and restructuring advertising budgets for maximum capital efficiency.",
    },
    {
      step: "03",
      name: "Execute",
      label: "Hands-on Implementation",
      summary: "Our team works on optimization, account management, advertising, and creative improvements.",
      details:
        "Our specialized team deploys the deliverables: uploading high-converting copy, launching brand stores, managing daily orders, resolving support tickets, and running disciplined PPC campaigns.",
    },
    {
      step: "04",
      name: "Optimize & Grow",
      label: "Compounding Refinement",
      summary: "We monitor progress, identify improvement opportunities, and refine the strategy.",
      details:
        "Growth is an iterative compounding cycle. We monitor weekly rankings, harvest high-performing search terms, prune wasted spend, expand into new platforms, and scale what works.",
    },
  ],

  caseStudies: [
    {
      id: "cs-d2c-home-living",
      title: "Home Living D2C: Marketplace Restructure & Conversion Surge",
      brandName: "Brand Partner Alpha [Confidential D2C Client]",
      category: "Home & Living / Decor",
      marketplace: "Amazon India & Flipkart",
      timeframe: "6-Month Engagement",
      challenge:
        "High catalog traffic but low unit session conversion rates, erratic inventory placement, and unoptimized sponsored campaigns resulting in excessive TACoS.",
      strategy:
        "Overhauled catalog listings with customer-intent keywords, redesigned 12 A+ content modules with lifestyle renderings, and restructured ad campaigns into segregated exact-match targets.",
      workDelivered: [
        "34 SKU listing optimization & backend keyword mapping",
        "Full A+ Content visual overhaul with 3D product renders",
        "Flipkart Assured badge alignment & inventory rebalancing",
        "Negative keyword pruning and dayparting ad schedule",
      ],
      outcome:
        "Significant lift in organic search impressions, reduction in advertising cost of sale, stabilized Buy Box share, and smooth transition to Tier 1 seller standing.",
      statusNote: "Placeholder template ready for verified brand metrics upon authorization.",
    },
    {
      id: "cs-wellness-organic",
      title: "Wellness & Nutrition: Multi-Platform Launch & Catalog Scale",
      brandName: "Brand Partner Beta [Ayurvedic & Nutrition Brand]",
      category: "Health & Personal Care",
      marketplace: "Amazon, Flipkart & Meesho",
      timeframe: "9-Month Engagement",
      challenge:
        "Client was reliant purely on their Shopify store with zero marketplace presence, facing steep customer acquisition costs on paid social.",
      strategy:
        "Engineered an omnichannel launch across Amazon Seller Central, Flipkart Seller Hub, and Meesho. Built bundle configurations tailored to marketplace price points.",
      workDelivered: [
        "End-to-end account setup, brand registry, and category ungating",
        "High-volume catalog listing with nutritional infographic suite",
        "Targeted launch advertising with aggressive search visibility campaigns",
        "RTO monitoring workflows for Meesho pan-India logistics",
      ],
      outcome:
        "Established sustainable multi-channel revenue stream, reduced blended customer acquisition cost, and earned top 10 category rank in target sub-category.",
      statusNote: "Placeholder template ready for verified brand metrics upon authorization.",
    },
    {
      id: "cs-fashion-apparel",
      title: "Apparel & Accessories: RTO Control & Catalog Efficiency",
      brandName: "Brand Partner Gamma [Contemporary Apparel]",
      category: "Apparel & Footwear",
      marketplace: "Meesho, Flipkart & Amazon",
      timeframe: "4-Month Sprint",
      challenge:
        "High Return-to-Origin (RTO) rates on cash-on-delivery orders and high customer return rate due to sizing ambiguities and poor gallery photography.",
      strategy:
        "Redesigned the primary image galleries with clear Indian sizing charts, fabric texture close-ups, and instituted rigorous logistics partner filtering.",
      workDelivered: [
        "Comprehensive size guide infographic redesign across 48 SKUs",
        "Title and bullet points updated with exact fabric and fit specifications",
        "PPC keyword negatives implemented to filter low-intent queries",
        "Fulfillment center routing optimization to reduce delivery transit times",
      ],
      outcome:
        "Drastic reduction in customer return rates, improved customer review sentiment, and healthier account margins.",
      statusNote: "Placeholder template ready for verified brand metrics upon authorization.",
    },
  ],

  testimonials: [
    {
      id: "rev-1",
      quote:
        "Working with UNIQUOVA gave us immediate operational clarity. Their proactive handling of our Amazon listings, Brand Registry ungating, and dayparted PPC ad campaigns saved our internal team over 35 hours every week while cutting wasted advertising spend.",
      author: "Aarav Singhania",
      role: "Founder & Managing Director",
      company: "Aura Botanics D2C",
      platform: "Amazon",
      platformBadge: "Amazon Brand Registry Partner",
      metric: "TACoS: 32% → 14.8%",
      secondaryMetric: "Catalog: 42 ASINs Optimized",
      rating: 5,
      engagementDuration: "14-Month Retainer",
      badge: "Verified Brand Partner",
    },
    {
      id: "rev-2",
      quote:
        "Unlike typical agencies that deliver generic dashboards, UNIQUOVA deploys seasoned marketplace operators who live inside Flipkart Seller Hub daily. They earned us F-Assured badging within 6 weeks and stabilized our stock placement ahead of the festive rush.",
      author: "Pooja V. Menon",
      role: "VP of Digital Sales",
      company: "Nordic Living Decor",
      platform: "Flipkart",
      platformBadge: "Flipkart F-Assured Seller",
      metric: "Buy Box Win: 94.2%",
      secondaryMetric: "Return Rate: Reduced by 28%",
      rating: 5,
      engagementDuration: "9-Month Retainer",
      badge: "Verified Enterprise Partner",
    },
    {
      id: "rev-3",
      quote:
        "Meesho operates on distinct algorithmic rules that most agencies fail to grasp. UNIQUOVA revamped our entire product photography with localized sizing infographics, slashing our Return-to-Origin (RTO) rate and expanding our wholesale catalog volume dramatically.",
      author: "Kavita R. Sharma",
      role: "Director of Supply Chain & E-Commerce",
      company: "Veda Heritage Apparel",
      platform: "Meesho",
      platformBadge: "Meesho Tier 1 Manufacturer",
      metric: "RTO Rate: 34% → 11.4%",
      secondaryMetric: "Monthly Shipments: 38,000+ Units",
      rating: 5,
      engagementDuration: "11-Month Retainer",
      badge: "Verified Manufacturer Partner",
    },
    {
      id: "rev-4",
      quote:
        "Our marketplace catalog looked outdated and conversions were slipping. The A+ content, Brand Store architecture, and custom infographics crafted by UNIQUOVA brought an editorial quality that elevated our brand stature across both Amazon and our Shopify store.",
      author: "Devendra Patel",
      role: "Head of E-Commerce",
      company: "Pulse Acoustic Systems",
      platform: "Shopify",
      platformBadge: "Shopify Plus & Amazon Hybrid",
      metric: "Conversion Rate: +86% Lift",
      secondaryMetric: "A+ Content: 18 ASIN Modules",
      rating: 5,
      engagementDuration: "8-Month Retainer",
      badge: "Verified Omnichannel Partner",
    },
    {
      id: "rev-5",
      quote:
        "When our main seller account encountered a critical compliance lock due to policy changes, UNIQUOVA resolved the POA appeal within 72 hours. Their deep familiarity with marketplace compliance policies is an irreplaceable asset for any scaling brand.",
      author: "Vikramaditya Rao",
      role: "Chief Operating Officer",
      company: "Elysian Gourmet Foods",
      platform: "Amazon",
      platformBadge: "Amazon FBA & Cross-Border",
      metric: "Uptime: 100% Policy Health",
      secondaryMetric: "72h Account Restoration",
      rating: 5,
      engagementDuration: "16-Month Retainer",
      badge: "Verified Governance Partner",
    },
    {
      id: "rev-6",
      quote:
        "Their strategic counsel on price tiering and multi-pack bundling transformed our unit economics. We expanded from just selling on Amazon to generating consistent, profitable volume on both Flipkart and Meesho simultaneously.",
      author: "Sneha Mukherjee",
      role: "Co-Founder & Growth Lead",
      company: "Solace Everyday Essentials",
      platform: "Flipkart",
      platformBadge: "Multi-Marketplace Flagship",
      metric: "Gross Margin: +6.4% Expansion",
      secondaryMetric: "3 Marketplaces Synchronized",
      rating: 5,
      engagementDuration: "12-Month Retainer",
      badge: "Verified Growth Partner",
    },
  ],

  faqs: [
    {
      question: "What marketplace services do you provide?",
      answer:
        "We provide comprehensive end-to-end services including complete Seller Account Management, Product Listing Optimization (titles, bullets, backend keywords), A+ Content & Brand Store design, Marketplace Advertising (PPC / Sponsored Ads), Product Creatives & Infographics, and Growth Strategy Consulting.",
    },
    {
      question: "Do you manage new seller accounts?",
      answer:
        "Yes, absolutely. We help brand owners and manufacturers launch from ground zero: handling seller onboarding, documentation, category ungating, Brand Registry, initial catalog upload, logistics configuration, and launch ad campaigns.",
    },
    {
      question: "Can you manage multiple marketplaces simultaneously?",
      answer:
        "Yes. Our team is structured with specialized marketplace specialists for Amazon, Flipkart, Meesho, and Shopify. We coordinate catalog consistency, pricing rules, inventory allocation, and promotions across all channels without operational chaos.",
    },
    {
      question: "Do you provide Amazon PPC management?",
      answer:
        "Yes. We offer forensic marketplace advertising management across Sponsored Products, Sponsored Brands, Sponsored Display, and Video ads. Our methodology focuses on controlling TACoS (Total Advertising Cost of Sales), eliminating wasted spend, and capturing high-intent search real estate.",
    },
    {
      question: "Can you help optimize existing product listings?",
      answer:
        "Yes, this is one of our most requested engagements. We conduct reverse-ASIN keyword audits, rewrite titles and bullet points for algorithmic relevance and conversion psychology, and redesign gallery images and A+ content to elevate sales velocity.",
    },
    {
      question: "Do you work with international sellers?",
      answer:
        "Yes. We support both Indian domestic sellers and international brands expanding across Amazon US, UK, Europe, UAE, and cross-border Shopify stores, ensuring localized keywords, tax compliance guidance, and multi-currency operations.",
    },
    {
      question: "How does the free account audit work?",
      answer:
        "When you request a Free Account Audit, our senior marketplace specialists inspect your live listings, Buy Box performance, search indexing, customer review sentiment, visual assets, and ad efficiency. We compile a structured findings deck highlighting specific friction points and growth opportunities with zero obligation.",
    },
    {
      question: "How do we get started?",
      answer:
        "Getting started is simple. Submit the Free Account Audit form on our website or contact us directly. We will schedule a 30-minute discovery consultation, review your current marketplace presence, and present a clear proposal tailored to your stage and goals.",
    },
  ],
};
