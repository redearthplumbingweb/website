import type { Metadata } from "next";
import { services, siteConfig } from "@/lib/site-data";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.redearthplumbing.com.au";

export const seoKeywords = [
  "Red Earth Plumbing",
  "plumber Batemans Bay",
  "gas fitter Batemans Bay",
  "plumber Sunshine Bay",
  "emergency plumber Batemans Bay",
  "plumbing new builds Eurobodalla",
  "hot water plumber Batemans Bay",
  "blocked drains Batemans Bay",
  "bathroom plumbing Batemans Bay",
  "licensed plumber NSW South Coast",
  "plumber Batehaven",
  "plumber Surfside",
  "gas fitting Sunshine Bay",
  "plumbing renovations Batemans Bay",
] as const;

const defaultTitle =
  "Red Earth Plumbing | Batemans Bay Plumber & Gas Fitter | 20+ Years Experience";
const defaultDescription =
  "Licensed plumber and gas fitter in Batemans Bay with 20+ years experience. New build plumbing, renovations, hot water, blocked drains and emergency call-outs across the Eurobodalla. Call 0423 764 630.";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Red Earth Plumbing",
  },
  description: defaultDescription,
  keywords: [...seoKeywords],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Plumbing",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: siteUrl,
    siteName: siteConfig.name,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: "/hero-banner-logo.png",
        width: 1600,
        height: 400,
        alt: `${siteConfig.name} — licensed plumber and gas fitter in Batemans Bay`,
      },
      {
        url: "/redearth-plumbing-logo-whitebackground.png",
        width: 720,
        height: 280,
        alt: `${siteConfig.name} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/hero-banner-logo.png"],
  },
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  other: {
    "geo.region": "AU-NSW",
    "geo.placename": siteConfig.address.region,
    "geo.position": "-35.706;150.175",
    ICBM: "-35.706, 150.175",
  },
};

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Plumber", "LocalBusiness"],
    "@id": `${siteUrl}/#business`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteUrl,
    telephone: siteConfig.phoneHref.replace("tel:", ""),
    email: siteConfig.email,
    image: [
      `${siteUrl}/hero-banner-logo.png`,
      `${siteUrl}/redearth-plumbing-logo-whitebackground.png`,
    ],
    logo: `${siteUrl}/redearth-plumbing-logo-whitebackground.png`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.suburb,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.postcode,
      addressCountry: "AU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -35.706,
      longitude: 150.175,
    },
    areaServed: [
      { "@type": "City", name: "Batemans Bay" },
      { "@type": "City", name: "Sunshine Bay" },
      { "@type": "City", name: "Batehaven" },
      { "@type": "City", name: "Surfside" },
      {
        "@type": "AdministrativeArea",
        name: "Eurobodalla Shire",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Plumbing & Gas Fitting Services",
      itemListElement: services.map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
          areaServed: siteConfig.serviceArea,
          provider: {
            "@id": `${siteUrl}/#business`,
          },
        },
      })),
    },
    sameAs: [siteConfig.maps.link],
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: siteConfig.name,
    url: siteUrl,
    description: defaultDescription,
    inLanguage: "en-AU",
    publisher: {
      "@id": `${siteUrl}/#business`,
    },
  };
}

export function getWebPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteUrl}/#webpage`,
    url: siteUrl,
    name: defaultTitle,
    description: defaultDescription,
    isPartOf: {
      "@id": `${siteUrl}/#website`,
    },
    about: {
      "@id": `${siteUrl}/#business`,
    },
    inLanguage: "en-AU",
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${siteUrl}/hero-banner-logo.png`,
    },
  };
}

export function getStructuredData() {
  return [getLocalBusinessSchema(), getWebSiteSchema(), getWebPageSchema()];
}

export { defaultTitle, defaultDescription };
