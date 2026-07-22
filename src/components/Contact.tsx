import { GoogleMap } from "@/components/GoogleMap";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig, displayAddress } from "@/lib/site-data";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-surface py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Get in touch"
          description="Ready to book a job or need urgent assistance? Call or email us directly — no forms, just a straightforward conversation."
        />

        <div className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-border bg-background p-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Phone
            </p>
            <a
              href={siteConfig.phoneHref}
              className="mt-4 block break-words text-lg font-medium text-foreground transition-colors hover:text-primary sm:text-xl"
            >
              {siteConfig.phone}
            </a>
          </div>

          <div className="rounded-2xl border border-border bg-background p-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Email
            </p>
            <a
              href={siteConfig.emailHref}
              className="mt-4 block break-all text-base font-medium text-foreground transition-colors hover:text-primary sm:text-lg"
            >
              {siteConfig.email}
            </a>
          </div>

          <div className="rounded-2xl border border-border bg-background p-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Address
            </p>
            <p className="mt-4 text-lg leading-relaxed text-foreground">
              {displayAddress}
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-background p-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Service Area
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              {siteConfig.address.region} &amp; surrounds
            </p>
          </div>
        </div>

        <div className="mt-12">
          <GoogleMap />
        </div>
      </div>
    </section>
  );
}
