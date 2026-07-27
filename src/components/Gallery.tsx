import Link from "next/link";
import { RemoteImage } from "@/components/RemoteImage";
import { SectionHeading } from "@/components/SectionHeading";
import { galleryItems } from "@/lib/site-data";

type GalleryProps = {
  limit?: number;
  showViewAll?: boolean;
};

export function Gallery({ limit, showViewAll = false }: GalleryProps) {
  const items = limit ? galleryItems.slice(0, limit) : galleryItems;

  return (
    <section id="gallery" className="scroll-mt-24 bg-background py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="Quality workmanship, every job"
          description="A selection of residential plumbing and fit-out work across the South Coast."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <figure
              key={item.title}
              className="group overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_1px_0_rgba(42,36,32,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_18px_40px_-28px_rgba(42,36,32,0.35)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <RemoteImage
                  src={item.src}
                  alt={item.alt}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-surface-dark/80 via-surface-dark/20 to-transparent p-5 pt-16 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:opacity-100">
                  <figcaption className="text-sm font-medium text-white">
                    {item.title}
                  </figcaption>
                </div>
              </div>
            </figure>
          ))}
        </div>

        {showViewAll ? (
          <div className="mt-12 flex justify-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-7 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary hover:text-primary"
            >
              View full gallery
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
