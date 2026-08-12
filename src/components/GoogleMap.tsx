import { siteConfig } from "@/lib/site-data";

export function GoogleMap() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-background">
      <iframe
        title={`Map showing ${siteConfig.name} location`}
        src={siteConfig.maps.embed}
        className="aspect-[16/9] w-full min-h-[320px] sm:min-h-[420px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <div className="flex flex-col gap-3 border-t border-border px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">Batemans Bay, NSW</p>
        <a
          href={siteConfig.maps.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
        >
          Open in Google Maps
        </a>
      </div>
    </div>
  );
}
