import type { Metadata } from "next";
import Link from "next/link";
import { Contact } from "@/components/Contact";
import { Gallery } from "@/components/Gallery";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { GradientPhoneLink } from "@/components/GradientPhoneLink";
import { clientImages, siteConfig } from "@/lib/site-data";
import {
  createPageMetadata,
  getBreadcrumbSchema,
  getWebPageSchema,
} from "@/lib/seo";

const title = "Plumbing Project Gallery | Batemans Bay & South Coast";
const description =
  "Browse Red Earth Plumbing project photos from Batemans Bay and the NSW South Coast — bathrooms, drainage, new builds, hot water and residential installs.";

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path: "/gallery",
  image: clientImages.siteDrainageOverview,
  keywords: [
    "plumber gallery Batemans Bay",
    "bathroom plumbing Batemans Bay",
    "drainage plumber Eurobodalla",
    "plumbing projects South Coast NSW",
  ],
});

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={[
          getWebPageSchema({
            path: "/gallery",
            title,
            description,
            image: clientImages.siteDrainageOverview,
          }),
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Gallery", path: "/gallery" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Gallery"
        title="Real plumbing jobs across the South Coast"
        description="A look at residential plumbing, gas fitting, bathrooms and drainage work completed around Batemans Bay and beyond."
        imageSrc={clientImages.siteDrainageOverview}
        imageAlt="Residential site drainage and retaining wall works overlooking bushland"
      />
      <Gallery />

      <section className="border-y border-border bg-surface py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-6 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Need similar work?
            </p>
            <h2 className="mt-3 font-display text-3xl text-foreground sm:text-4xl">
              Get your plumbing sorted the right way
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              From new builds to emergency repairs — call for honest advice and
              dependable workmanship in Batemans Bay and surrounds.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <GradientPhoneLink href={siteConfig.phoneHref} size="md">
              Call {siteConfig.phone}
            </GradientPhoneLink>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-border bg-background px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Explore services
            </Link>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
