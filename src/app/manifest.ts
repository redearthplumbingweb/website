import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "Red Earth",
    description: siteConfig.tagline,
    start_url: "/",
    display: "standalone",
    background_color: "#faf7f4",
    theme_color: "#a62d24",
    lang: "en-AU",
    icons: [
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
