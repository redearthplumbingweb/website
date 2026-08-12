import type { Metadata } from "next";
import {
  faqs,
  serviceAreas,
  services,
  siteConfig,
  type Service,
} from "@/lib/site-data";

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
  "plumber Catalina",
  "plumber Malua Bay",
  "plumber Long Beach",
  "plumber Tomakin",
  "plumber Broulee",
  "gas fitting Sunshine Bay",
  "plumbing renovations Batemans Bay",
  "Eurobodalla plumber",
] as const;

const defaultTitle =
  "Red Earth Plumbing | Batemans Bay Plumber & Gas Fitter | 20+ Years Experience";
const defaultDescription =
  "Licensed plumber and gas fitter in Batemans Bay with 20+ years experience. New build plumbing, renovations, hot water, blocked drains and emergency call-outs across the Eurobodalla. Call 0423 764 630.";

/** Brand logo used for all Open Graph / Twitter share cards */
export const seoShareImage = {
  url: "/redearth-plumbing-logo-whitebackground.png",
  width: 1200,
  height: 630,
  alt: `${siteConfig.name} — licensed plumber and gas fitter in Batemans Bay`,
} as const;

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [...seoKeywords],
}: {
  title: string;
  description: string;
  path: string;
  /** Kept for call-site compatibility; share cards always use the brand logo */
  image?: string;
  keywords?: string[];
}): Metadata {
  const url = `${siteUrl}${path === "/" ? "" : path}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_AU",
      url,
      siteName: siteConfig.name,
      title,
      description,
      images: [seoShareImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [seoShareImage.url],
    },
  };
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s",
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
    images: [seoShareImage],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [seoShareImage.url],
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
    "@type": ["Plumber", "LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${siteUrl}/#business`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteUrl,
    telephone: siteConfig.phoneHref.replace("tel:", ""),
    email: siteConfig.email,
    taxID: siteConfig.abn,
    image: [
      `${siteUrl}/redearth-plumbing-logo-whitebackground.png`,
      `${siteUrl}/client-images/site-red-earth-truck.webp`,
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
    areaServed: serviceAreas.map((area) => ({
      "@type": "City",
      name: area.name,
    })),
    knowsAbout: services.map((service) => service.title),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Plumbing & Gas Fitting Services",
      itemListElement: services.map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        url: `${siteUrl}/services/${service.slug}`,
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
          url: `${siteUrl}/services/${service.slug}`,
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

export function getWebPageSchema({
  path,
  title,
  description,
  image,
}: {
  path: string;
  title: string;
  description: string;
  image?: string;
}) {
  const url = `${siteUrl}${path === "/" ? "" : path}`;

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: {
      "@id": `${siteUrl}/#website`,
    },
    about: {
      "@id": `${siteUrl}/#business`,
    },
    inLanguage: "en-AU",
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${siteUrl}${image ?? "/redearth-plumbing-logo-whitebackground.png"}`,
    },
  };
}

export function getBreadcrumbSchema(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function getFaqSchema(items = faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getServiceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.intro,
    url: `${siteUrl}/services/${service.slug}`,
    image: `${siteUrl}${service.image.src}`,
    provider: {
      "@id": `${siteUrl}/#business`,
    },
    areaServed: serviceAreas.map((area) => ({
      "@type": "City",
      name: area.name,
    })),
    serviceType: service.title,
  };
}

export function getSiteWideStructuredData() {
  return [getLocalBusinessSchema(), getWebSiteSchema()];
}

export function getHomeStructuredData() {
  return [
    getWebPageSchema({
      path: "/",
      title: defaultTitle,
      description: defaultDescription,
      image: "/client-images/bathroom-ensuite-bay-view.webp",
    }),
    getFaqSchema(),
  ];
}

export { defaultTitle, defaultDescription };
