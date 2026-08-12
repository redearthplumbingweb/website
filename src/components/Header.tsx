"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { navLinks, siteConfig } from "@/lib/site-data";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-6 w-6 transition-transform duration-300 ${open ? "rotate-90" : "rotate-0"}`}
      fill="none"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d={open ? "M6 18 18 6M6 6l12 12" : "M4 7h16M4 12h16M4 17h16"}
      />
    </svg>
  );
}

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [pastHero, setPastHero] = useState(!isHome);

  useEffect(() => {
    setOpen(false);

    if (!isHome) {
      setPastHero(true);
      return;
    }

    const hero = document.getElementById("hero");
    if (!hero) {
      setPastHero(true);
      return;
    }

    const updateVisibility = () => {
      const isPastHero = hero.getBoundingClientRect().bottom <= 0;
      setPastHero((previous) => {
        if (isPastHero && !previous) setOpen(false);
        return isPastHero;
      });
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, [isHome, pathname]);

  return (
    <>
      {isHome ? (
        <button
          type="button"
          className={`fixed top-4 right-4 z-50 inline-flex items-center justify-center rounded-full border border-white/25 bg-black/20 p-2.5 text-white backdrop-blur-sm transition-all duration-300 active:scale-95 md:hidden ${
            pastHero
              ? "pointer-events-none translate-y-2 opacity-0"
              : "translate-y-0 opacity-100"
          }`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Open menu</span>
          <MenuIcon open={open} />
        </button>
      ) : null}

      <header
        className={`fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-white/95 shadow-sm backdrop-blur-md transition-all duration-500 ease-in-out ${
          pastHero
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" aria-label={`${siteConfig.name} home`}>
            <Logo />
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {navLinks.map((link) => {
              const active =
                !link.href.startsWith("/#") &&
                (pathname === link.href ||
                  pathname.startsWith(`${link.href}/`));

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${
                    active ? "text-primary" : "text-muted"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href={siteConfig.phoneHref}
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-primary-dark hover:shadow-md"
            >
              {siteConfig.phone}
            </a>
          </nav>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground transition-transform duration-300 active:scale-95 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">Open menu</span>
            <MenuIcon open={open} />
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-0 z-40 grid overflow-hidden bg-white shadow-lg transition-[grid-template-rows,opacity] duration-500 ease-in-out md:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 pointer-events-none"
        }`}
      >
        <div className="overflow-hidden">
          <nav
            className="border-b border-border px-6 pb-4 pt-24"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-lg px-3 py-3 text-base font-medium text-foreground transition-all duration-300 hover:bg-surface hover:text-primary ${
                    open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
                  }`}
                  style={{ transitionDelay: open ? `${index * 60 + 80}ms` : "0ms" }}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div
                className={`pt-2 transition-all duration-300 ${
                  open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
                }`}
                style={{ transitionDelay: open ? `${navLinks.length * 60 + 120}ms` : "0ms" }}
              >
                <a
                  href={siteConfig.phoneHref}
                  className="flex w-full justify-center rounded-full bg-primary px-4 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-primary-dark sm:inline-flex sm:w-auto sm:px-5 sm:py-2.5"
                >
                  Call {siteConfig.phone}
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
