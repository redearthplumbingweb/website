import { RemoteImage } from "@/components/RemoteImage";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-surface-dark text-white">
      <RemoteImage
        src={imageSrc}
        alt={imageAlt}
        priority
        className="hero-photo object-cover"
      />
      <div className="hero-overlay absolute inset-0 bg-surface-dark/75" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,69,58,0.22),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(166,45,36,0.32),transparent_55%)]" />

      <div className="relative z-10 mx-auto flex min-h-[42vh] max-w-6xl flex-col justify-end px-6 pb-16 pt-28 lg:px-8">
        <p className="hero-item hero-item-eyebrow mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent sm:text-sm sm:tracking-[0.3em]">
          {eyebrow}
        </p>
        <h1 className="hero-item hero-item-headline max-w-3xl font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="hero-item hero-item-actions mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
          {description}
        </p>
      </div>
    </section>
  );
}
