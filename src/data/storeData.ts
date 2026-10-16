export interface BrandItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  gradient: string;
  accentColor: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  rating: number;
  quote: string;
  highlight: string;
  date?: string;
  verified?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export const STORE_INFO = {
  name: "Luxmi Mobile Hub",
  category: "Mobile Phone & Gadgets Store",
  tagline: "Mobile Phones • Gadgets • Accessories",
  description:
    "Luxmi Mobile Hub deals in all types of gadgets from Apple, Samsung, OnePlus and other popular brands. Visit us in Indri for phones, gadgets, accessories and future upgrades.",
  address: {
    line1: "First Floor of Luxmi Readymade Store",
    line2: "Naya Bazar, Near Water Tank 2",
    locality: "New Bazaar, Khukhani",
    city: "Indri",
    district: "Karnal",
    state: "Haryana",
    pincode: "132041",
    full: "First Floor of Luxmi Readymade Store, Naya Bazar, Near Water Tank 2, New Bazaar, Khukhani, Indri, Haryana 132041",
  },
  landmarks: [
    "First Floor of Luxmi Readymade Store",
    "Near Water Tank 2 in Naya Bazar",
  ],
  googleRating: 4.9,
  reviewsCount: 40,
  // Note: Clear placeholders as mandated when exact official numbers are pending from business owner
  phonePlaceholder: "+91 98XXX XXXXX",
  whatsappNumber: "", // If empty, wa.me link works with direct pre-filled prompt or owner number
  whatsappMessage:
    "Hello Luxmi Mobile Hub, I would like to inquire about smartphones and gadgets at your Indri store.",
  googleMapsDirectionsUrl:
    "https://www.google.com/maps/search/?api=1&query=Luxmi+Readymade+Store+Naya+Bazar+Indri+Haryana+132041",
  googleReviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=Luxmi+Mobile+Hub+Naya+Bazar+Indri+Haryana",
  instagramHandle: "@luxmimobilehub",
  instagramUrl: "https://www.instagram.com/",
  visitingHours: "10:00 AM – 8:30 PM (Mon – Sun)",
};

export const BRANDS_DATA: BrandItem[] = [
  {
    id: "apple",
    name: "Apple",
    tagline: "Premium smartphones and technology.",
    description:
      "Explore the latest iPhone models, Apple ecosystem gadgets, and genuine accessories with seamless build quality and performance.",
    features: ["Flagship iPhone Lineup", "Retina Displays & Bionic Silicon", "Official Accessories & Audio"],
    gradient: "from-zinc-900 via-neutral-900 to-black",
    accentColor: "border-zinc-500/30 text-zinc-100",
  },
  {
    id: "samsung",
    name: "Samsung",
    tagline: "Innovative smartphones and smart devices.",
    description:
      "Discover industry-leading Dynamic AMOLED displays, versatile pro-grade cameras, and cutting-edge Galaxy series devices for every lifestyle.",
    features: ["Galaxy S & A Series", "Vibrant 120Hz Displays", "Ecosystem Wearables & Buds"],
    gradient: "from-blue-950/50 via-neutral-900 to-black",
    accentColor: "border-blue-500/30 text-blue-200",
  },
  {
    id: "oneplus",
    name: "OnePlus",
    tagline: "Performance-focused smartphones and technology.",
    description:
      "Engineered for speed, smooth OxygenOS responsiveness, ultra-fast charging capabilities, and flagship power at exceptional value.",
    features: ["Fast Warp & SUPERVOOC Charging", "Fluid 120Hz Displays", "Sleek Ergonomic Finishes"],
    gradient: "from-red-950/40 via-neutral-900 to-black",
    accentColor: "border-red-500/30 text-red-200",
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "smartphones",
    title: "Smartphones",
    description: "Explore devices from leading smartphone brands including Apple, Samsung, and OnePlus.",
    iconName: "Smartphone",
  },
  {
    id: "gadgets",
    title: "Gadgets",
    description: "Discover useful technology and connected devices to elevate your everyday digital lifestyle.",
    iconName: "Cpu",
  },
  {
    id: "accessories",
    title: "Accessories",
    description: "Find accessories for your everyday mobile needs, from premium cases and screen guards to fast adapters.",
    iconName: "Headphones",
  },
  {
    id: "upgrades",
    title: "Upgrades",
    description: "Looking for your next phone? Talk to our team about upgrading to the latest model.",
    iconName: "TrendingUp",
  },
  {
    id: "product-guidance",
    title: "Product Guidance",
    description: "Get help choosing a phone according to your requirements, usage patterns, and budget.",
    iconName: "Compass",
  },
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Nitin Kashyap",
    rating: 5,
    quote: "Best shop in town. Awesome experience.",
    highlight: "Awesome experience",
    verified: true,
  },
  {
    id: "rev-2",
    name: "Mishty Bajaj",
    rating: 5,
    quote: "I’ll be coming back for accessories and future phone upgrades.",
    highlight: "Future phone upgrades",
    verified: true,
  },
  {
    id: "rev-3",
    name: "Naman Arora11",
    rating: 5,
    quote: "Best price. Best phone.",
    highlight: "Best price & phone",
    verified: true,
  },
];

export const TRUST_POINTS = [
  {
    value: "4.9★",
    label: "Google Rating",
    sub: "Consistently rated top tier in Indri",
  },
  {
    value: "40+",
    label: "Customer Reviews",
    sub: "Satisfied local patrons & tech buyers",
  },
  {
    value: "3+",
    label: "Major Brands",
    sub: "Apple, Samsung, OnePlus & more",
  },
  {
    value: "Indri",
    label: "Local Store",
    sub: "Naya Bazar convenient prime location",
  },
];

export const SNIPPETS = [
  "\"Best shop in town\"",
  "\"Best price\"",
  "\"Best phone\"",
];
