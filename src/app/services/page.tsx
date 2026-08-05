import type { Metadata } from "next";
import Link from "next/link";
import { Contact } from "@/components/Contact";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { GradientPhoneLink } from "@/components/GradientPhoneLink";
import { clientImages, siteConfig } from "@/lib/site-data";
import {
  createPageMetadata,
  getBreadcrumbSchema,
  getFaqSchema,
  getWebPageSchema,
} from "@/lib/seo";

const title = "Plumbing & Gas Fitting Services in Batemans Bay";
const description =
  "Licensed plumbing and gas fitting services in Batemans Bay — new builds, hot water, blocked drains, bathrooms, emergency plumbing and more across the Eurobodalla. Call 0423 764 630.";

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path: "/services",
  image: clientImages.siteRedEarthTruck,
  keywords: [
    "plumbing services Batemans Bay",
    "gas fitting Batemans Bay",
    "plumber Eurobodalla",
    "hot water Batemans Bay",
    "blocked drains Batemans Bay",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          getWebPageSchema({
            path: "/services",
            title,
            description,
            image: clientImages.siteRedEarthTruck,
          }),
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          getFaqSchema(),
        ]}
      />
      <PageHero
        eyebrow="Services"
        title="Plumbing & gas fitting in Batemans Bay"
        description="Licensed local service for new builds, renovations, hot water, drains and emergency call-outs across the NSW South Coast."
        imageSrc={clientImages.siteRedEarthTruck}
        imageAlt="Red Earth Plumbing ute on an active construction site"
      />
      <Services />
      <WhyChooseUs />
      <Faq />

      <section className="border-y border-border bg-background py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-6 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Ready to book?
            </p>
            <h2 className="mt-3 font-display text-3xl text-foreground sm:text-4xl">
              Talk through your job with a local plumber
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Call {siteConfig.name} for advice, quotes, or urgent repairs —
              no forms, just a straightforward conversation.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <GradientPhoneLink href={siteConfig.phoneHref} size="md">
              Call {siteConfig.phone}
            </GradientPhoneLink>
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              See our work
            </Link>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
