import Image from "next/image";
import { siteConfig } from "@/lib/site-data";

type LogoProps = {
  className?: string;
  size?: "header" | "footer";
};

export function Logo({ className = "", size = "header" }: LogoProps) {
  const height = size === "footer" ? "h-20" : "h-16";

  return (
    <Image
      src="/logo.png"
      alt={`${siteConfig.name} logo`}
      width={160}
      height={160}
      className={`${height} w-auto ${className}`}
      priority={size === "header"}
    />
  );
}
