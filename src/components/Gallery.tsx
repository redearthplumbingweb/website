import { RemoteImage } from "@/components/RemoteImage";
import { SectionHeading } from "@/components/SectionHeading";
import { galleryItems } from "@/lib/site-data";

export function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-24 bg-background py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="Quality workmanship, every job"
          description="A selection of residential plumbing and fit-out work across the South Coast."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <figure
              key={item.title}
              className="group overflow-hidden rounded-2xl border border-border bg-surface"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <RemoteImage
                  src={item.src}
                  alt={item.alt}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="px-5 py-4 text-sm font-medium text-foreground">
                {item.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
