import { RemoteImage } from "@/components/RemoteImage";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/lib/site-data";

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-surface py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="Complete plumbing solutions for your home"
          description="From plumbing and gas on new home builds to renovations, maintenance, and urgent repairs — over 20 years of dependable service across the South Coast."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="overflow-hidden rounded-2xl border border-border bg-background transition-shadow hover:shadow-sm"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <RemoteImage src={service.image.src} alt={service.image.alt} />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-foreground">{service.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
