import Link from "next/link";
import { Logo } from "@/components/Logo";
import { navLinks, siteConfig, displayAddress } from "@/lib/site-data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <Logo size="footer" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            Licensed plumbing and gas fitting for new builds, renovations, and repairs — {siteConfig.yearsExperience} years of experience across the South Coast.
          </p>
          <address className="mt-4 space-y-1 not-italic text-sm text-muted">
            <p>{displayAddress}</p>
            <p>
              <a
                href={siteConfig.phoneHref}
                className="transition-colors hover:text-primary"
              >
                {siteConfig.phone}
              </a>
            </p>
            <p>
              <a
                href={siteConfig.emailHref}
                className="break-all transition-colors hover:text-primary"
              >
                {siteConfig.email}
              </a>
            </p>
            <p>ABN {siteConfig.abnDisplay}</p>
          </address>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-3" aria-label="Footer navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>{displayAddress}</p>
        </div>
      </div>
    </footer>
  );
}
