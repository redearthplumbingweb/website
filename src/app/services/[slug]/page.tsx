import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Contact } from "@/components/Contact";
import { GradientPhoneLink } from "@/components/GradientPhoneLink";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { RemoteImage } from "@/components/RemoteImage";
import {
  getServiceBySlug,
  services,
  siteConfig,
} from "@/lib/site-data";
import {
  createPageMetadata,
  getBreadcrumbSchema,
  getServiceSchema,
  getWebPageSchema,
} from "@/lib/seo";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return createPageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    image: service.image.src,
    keywords: [
      service.title,
      `${service.title} Batemans Bay`,
      "plumber Batemans Bay",
      "Eurobodalla plumber",
    ],
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          getWebPageSchema({
            path: `/services/${service.slug}`,
            title: service.metaTitle,
            description: service.metaDescription,
            image: service.image.src,
          }),
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.title, path: `/services/${service.slug}` },
          ]),
          getServiceSchema(service),
        ]}
      />

      <PageHero
        eyebrow={service.title}
        title={service.h1}
        description={service.description}
        imageSrc={service.image.src}
        imageAlt={service.image.alt}
      />

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <div>
            <p className="text-lg leading-relaxed text-muted">{service.intro}</p>
            <h2 className="mt-10 font-display text-3xl text-foreground">
              What we can help with
            </h2>
            <ul className="mt-6 space-y-3">
              {service.highlights.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-base leading-relaxed text-foreground"
                >
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <GradientPhoneLink href={siteConfig.phoneHref} size="md">
                Call {siteConfig.phone}
              </GradientPhoneLink>
              <Link
                href="/areas"
                className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                See areas we service
              </Link>
            </div>
          </div>

          <figure className="overflow-hidden rounded-2xl border border-border bg-surface">
            <div className="relative aspect-[4/5]">
              <RemoteImage src={service.image.src} alt={service.image.alt} />
            </div>
          </figure>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="font-display text-3xl text-foreground">
            Related plumbing services
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="rounded-2xl border border-border bg-background p-6 transition-colors hover:border-primary"
              >
                <h3 className="font-display text-xl text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
