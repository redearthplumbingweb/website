import { SectionHeading } from "@/components/SectionHeading";
import { faqs } from "@/lib/site-data";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-background py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Common questions from South Coast homeowners"
          description="Quick answers about plumbing and gas fitting services across Batemans Bay and the Eurobodalla."
        />

        <div className="mx-auto mt-14 max-w-3xl space-y-4">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-border bg-surface px-6 py-5 open:bg-background"
            >
              <summary className="cursor-pointer list-none font-display text-lg text-foreground marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  {item.question}
                  <span
                    aria-hidden="true"
                    className="mt-1 text-primary transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
