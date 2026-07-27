import Link from "next/link";
import { RemoteImage } from "@/components/RemoteImage";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/lib/site-data";

type ServicesProps = {
  limit?: number;
  showViewAll?: boolean;
};

export function Services({ limit, showViewAll = false }: ServicesProps) {
  const items = limit ? services.slice(0, limit) : services;

  return (
    <section id="services" className="scroll-mt-24 bg-surface py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="Complete plumbing solutions for your home"
          description="From plumbing and gas on new home builds to renovations, maintenance, and urgent repairs — over 20 years of dependable service across the South Coast."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((service) => (
            <article
              key={service.title}
              className="group overflow-hidden rounded-2xl border border-border bg-background shadow-[0_1px_0_rgba(42,36,32,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_18px_40px_-28px_rgba(166,45,36,0.45)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <RemoteImage
                  src={service.image.src}
                  alt={service.image.alt}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/35 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-foreground transition-colors group-hover:text-primary">
                  {service.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{service.description}</p>
              </div>
            </article>
          ))}
        </div>

        {showViewAll ? (
          <div className="mt-12 flex justify-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-7 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary hover:text-primary"
            >
              View all services
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
