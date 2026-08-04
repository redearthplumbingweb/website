import type { Metadata } from "next";
import Link from "next/link";
import { Contact } from "@/components/Contact";
import { PageHero } from "@/components/PageHero";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { GradientPhoneLink } from "@/components/GradientPhoneLink";
import { clientImages, siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Plumbing & Gas Fitting Services",
  description:
    "New build plumbing, gas fitting, hot water systems, blocked drains, bathroom and kitchen renovations, and emergency plumbing across Batemans Bay and the Eurobodalla.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Plumbing & gas fitting done properly"
        description="From new home builds to emergency call-outs — licensed, local service across Batemans Bay and the South Coast."
        imageSrc={clientImages.siteRedEarthTruck}
        imageAlt="Red Earth Plumbing ute on an active construction site"
      />
      <Services />
      <WhyChooseUs />

      <section className="border-y border-border bg-background py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-6 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Ready to book?
            </p>
            <h2 className="mt-3 font-display text-3xl text-foreground sm:text-4xl">
              Talk through your job with a local plumber
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Call {siteConfig.name} for advice, quotes, or urgent repairs —
              no forms, just a straightforward conversation.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <GradientPhoneLink href={siteConfig.phoneHref} size="md">
              Call {siteConfig.phone}
            </GradientPhoneLink>
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              See our work
            </Link>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
