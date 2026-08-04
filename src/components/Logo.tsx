import Image from "next/image";
import { siteConfig } from "@/lib/site-data";

type LogoProps = {
  className?: string;
  size?: "header" | "footer";
};

export function Logo({ className = "", size = "header" }: LogoProps) {
  const height = size === "footer" ? "h-14" : "h-12";

  return (
    <Image
      src="/redearth-plumbing-logo-whitebackground.png"
      alt={`${siteConfig.name} logo`}
      width={360}
      height={140}
      className={`${height} w-auto rounded-xl ${className}`}
      priority={size === "header"}
    />
  );
}
