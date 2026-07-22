import Image from "next/image";
import { RemoteImage } from "@/components/RemoteImage";
import { GradientPhoneLink } from "@/components/GradientPhoneLink";
import { siteConfig, templateImages } from "@/lib/site-data";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-surface-dark text-white">
      <RemoteImage
        src={templateImages.hero.src}
        alt={templateImages.hero.alt}
        priority
        className="hero-photo object-cover"
      />

      <div className="hero-overlay absolute inset-0 bg-surface-dark/70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,69,58,0.18),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(166,45,36,0.28),transparent_50%)]" />

      <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-center px-6 py-24 lg:px-8">
        <Image
          src="/hero-banner-logo.png"
          alt={siteConfig.name}
          width={1600}
          height={400}
          priority
          className="hero-item hero-item-logo mb-8 w-full max-w-xl rounded-2xl sm:max-w-2xl lg:max-w-3xl"
        />

        <p className="hero-item hero-item-eyebrow mb-4 max-w-full text-xs font-semibold uppercase tracking-[0.15em] text-accent sm:text-sm sm:tracking-[0.3em]">
          {siteConfig.hero.eyebrow}
        </p>
        <h1 className="hero-item hero-item-headline max-w-3xl font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
          {siteConfig.hero.headline}
        </h1>
        <div className="hero-item hero-item-actions mt-10 flex w-full max-w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <GradientPhoneLink href={siteConfig.phoneHref} size="md" animated>
            Call {siteConfig.phone}
          </GradientPhoneLink>
          <a
            href="#services"
            className="inline-flex w-full items-center justify-center rounded-full border border-white/20 px-4 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5 sm:w-auto sm:px-8"
          >
            Explore Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
