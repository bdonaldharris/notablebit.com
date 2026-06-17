"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes } from "@/app/_content/site";
import { Button } from "@/app/_components/ui";
import logoWhite from "@/assets/originals/logo-white-text.png";
import bitvoicesLogo from "@/assets/originals/bitvoices-icon-logo.png";
import bitvoicesPodcastLogo from "@/assets/originals/bitvoices-podcast-icon-logo.png";
import hindsiteLogo from "@/assets/originals/hindsite-icon-logo.png";
import bdhLogo from "@/assets/originals/bdh-logo.png";

const HEADER_CTA = "Start a Conversation";

type EcosystemLink = {
  name: string;
  href: string;
  logo: StaticImageData;
  logoClassName?: string;
};

const ecosystemLogos: EcosystemLink[] = [
  {
    name: "B Donald Harris",
    href: "https://bdonaldharris.com",
    logo: bdhLogo,
    logoClassName: "eco-logo-bdh",
  },
  {
    name: "BIT Voices Podcast",
    href: "https://www.youtube.com/@notablebit",
    logo: bitvoicesPodcastLogo,
    logoClassName: "eco-logo-podcast",
  },
  {
    name: "BitVoices Network",
    href: "https://bitvoices.network",
    logo: bitvoicesLogo,
    logoClassName: "eco-logo-bitvoices",
  },
  {
    name: "HindSite",
    href: "https://hindsite.pro",
    logo: hindsiteLogo,
    logoClassName: "eco-logo-hindsite",
  },
];

const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/notablebit",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/notablebit",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    name: "X",
    href: "https://x.com/notablebit",
    path: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.39-6.933zm-1.291 19.482h2.039L6.486 3.24H4.298l13.312 17.395z",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/notablebit/",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z",
  },
  {
    name: "BlueSky",
    href: "https://bsky.app/profile/notablebit.bsky.social",
    path: "M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.829.624-5.789.624-6.479 0-.688-.139-1.86-.902-2.203-.659-.299-1.664-.621-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8z",
  },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="NotableBIT home">
          <Image className="brand-logo" src={logoWhite} alt="NotableBIT" priority />
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              aria-current={pathname === route.href ? "page" : undefined}
            >
              {route.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <Button href="/contact">{HEADER_CTA}</Button>
        </div>

        <details className="mobile-nav">
          <summary aria-label="Open navigation">
            <span>Menu</span>
          </summary>
          <nav aria-label="Mobile navigation">
            <Link href="/">Home</Link>
            {routes.map((route) => (
              <Link key={route.href} href={route.href}>
                {route.label}
              </Link>
            ))}
            <Link href="/contact">{HEADER_CTA}</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" aria-label="NotableBIT home">
              <Image className="footer-brand-logo" src={logoWhite} alt="NotableBIT" />
            </Link>
          </div>

          <div className="footer-copy-col">
            <p className="footer-copy">
              A Black-founded technology studio building products, platforms, media, and strategic systems for builders moving with clarity,
              context, and ownership.
            </p>
          </div>

          <div className="footer-sections">
            <div>
              <div className="footer-eco" aria-label="Ecosystem links">
                {ecosystemLogos.map((item) => (
                  <a
                    key={item.name}
                    className="eco-logo-link"
                    href={item.href}
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label={`${item.name} (opens in a new tab)`}
                  >
                    <Image className={`eco-logo ${item.logoClassName ?? ""}`.trim()} src={item.logo} alt={item.name} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <nav className="footer-links" aria-label="Footer site navigation">
                <Link href="/">Home</Link>
                {routes.map((route) => (
                  <Link key={route.href} href={route.href}>
                    {route.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-socials" aria-label="Social links">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                rel="noopener noreferrer"
                target="_blank"
                aria-label={`${social.name} (opens in a new tab)`}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
          <p className="footer-copyright">© 2026 NotableBIT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
