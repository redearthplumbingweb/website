import { SectionHeading } from "@/components/SectionHeading";
import { whyChooseUs } from "@/lib/site-data";

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-surface-dark py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,69,58,0.16),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(166,45,36,0.2),transparent_45%)]" />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          light
          eyebrow="Why Choose Us"
          title="Reliable service from a local professional"
          description="Over 20 years of straightforward advice, tidy work, and a commitment to getting the job done properly."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {whyChooseUs.map((item, index) => (
            <article
              key={item.title}
              className="flex gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/[0.07]"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/15 text-sm font-semibold text-accent">
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
