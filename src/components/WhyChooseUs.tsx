import { SectionHeading } from "@/components/SectionHeading";
import { whyChooseUs } from "@/lib/site-data";

export function WhyChooseUs() {
  return (
    <section className="bg-surface-dark py-24 text-white">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          light
          eyebrow="Why Choose Us"
          title="Reliable service from a local professional"
          description="Over 20 years of straightforward advice, tidy work, and a commitment to getting the job done properly."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {whyChooseUs.map((item, index) => (
            <article key={item.title} className="flex gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-accent">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="font-display text-xl">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-white/70">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
