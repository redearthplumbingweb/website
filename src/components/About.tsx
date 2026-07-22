import { RemoteImage } from "@/components/RemoteImage";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig, templateImages, displayAddress } from "@/lib/site-data";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-background py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="space-y-8">
          <SectionHeading
            align="left"
            eyebrow="About Us"
            title="Local plumbing expertise built on 20 years of experience"
            description={siteConfig.description}
          />

          <dl className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <dt className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Location
              </dt>
              <dd className="mt-2 text-base text-foreground">
                {displayAddress}
              </dd>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <dt className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Phone
              </dt>
              <dd className="mt-2">
                <a
                  href={siteConfig.phoneHref}
                  className="text-base font-medium text-foreground transition-colors hover:text-primary"
                >
                  {siteConfig.phone}
                </a>
              </dd>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <dt className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Email
              </dt>
              <dd className="mt-2">
                <a
                  href={siteConfig.emailHref}
                  className="break-all text-base font-medium text-foreground transition-colors hover:text-primary"
                >
                  {siteConfig.email}
                </a>
              </dd>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <dt className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Experience
              </dt>
              <dd className="mt-2 text-base text-foreground">
                {siteConfig.yearsExperience}+ years in plumbing &amp; gas fitting
              </dd>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6 sm:col-span-2">
              <dt className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Service Area
              </dt>
              <dd className="mt-2 text-base leading-relaxed text-muted">
                {siteConfig.serviceArea}
              </dd>
            </div>
          </dl>
        </div>

        <figure className="overflow-hidden rounded-2xl border border-border bg-surface">
          <div className="relative aspect-[4/5]">
            <RemoteImage
              src={templateImages.about.src}
              alt={templateImages.about.alt}
            />
          </div>
        </figure>
      </div>
    </section>
  );
}
