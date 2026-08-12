import type { Metadata } from "next";
import Link from "next/link";
import { Contact } from "@/components/Contact";
import { Faq } from "@/components/Faq";
import { GradientPhoneLink } from "@/components/GradientPhoneLink";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { clientImages, serviceAreas, services, siteConfig } from "@/lib/site-data";
import {
  createPageMetadata,
  getBreadcrumbSchema,
  getFaqSchema,
  getWebPageSchema,
} from "@/lib/seo";

const title = "Plumbing Service Areas | Batemans Bay & Eurobodalla";
const description =
  "Red Earth Plumbing services Batemans Bay, Sunshine Bay, Batehaven, Surfside, Catalina, Malua Bay, Long Beach, Tomakin, Broulee and the wider Eurobodalla. Call 0423 764 630.";

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path: "/areas",
  image: clientImages.siteDrainageOverview,
  keywords: [
    "plumber Batemans Bay",
    "plumber Sunshine Bay",
    "plumber Batehaven",
    "plumber Surfside",
    "plumber Malua Bay",
    "plumber Eurobodalla",
    "plumber NSW South Coast",
  ],
});

export default function AreasPage() {
  return (
    <>
      <JsonLd
        data={[
          getWebPageSchema({
            path: "/areas",
            title,
            description,
            image: clientImages.siteDrainageOverview,
          }),
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Service Areas", path: "/areas" },
          ]),
          getFaqSchema(),
        ]}
      />

      <PageHero
        eyebrow="Service Areas"
        title="Plumbing across Batemans Bay & the Eurobodalla"
        description="Local licensed plumbing and gas fitting for coastal suburbs and surrounding South Coast communities."
        imageSrc={clientImages.siteDrainageOverview}
        imageAlt="Residential site drainage works overlooking bushland near Batemans Bay"
      />

      <section className="bg-background py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="max-w-3xl text-lg leading-relaxed text-muted">
            {siteConfig.name} is a locally owned plumbing and gas fitting
            business serving homeowners, renovators and builders across
            Batemans Bay and the wider Eurobodalla region. If your suburb is
            nearby and not listed, call — we may still be able to help.
          </p>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.map((area) => (
              <article
                key={area.name}
                className="rounded-2xl border border-border bg-surface p-6"
              >
                <h2 className="font-display text-2xl text-foreground">
                  Plumber in {area.name}
                </h2>
                <p className="mt-3 leading-relaxed text-muted">
                  {area.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-16">
            <h2 className="font-display text-3xl text-foreground">
              Services available in these areas
            </h2>
            <ul className="mt-6 flex flex-wrap gap-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12">
            <GradientPhoneLink href={siteConfig.phoneHref} size="md">
              Call {siteConfig.phone}
            </GradientPhoneLink>
          </div>
        </div>
      </section>

      <Faq />
      <Contact />
    </>
  );
}
