import Link from "next/link";
import { routes, site } from "@/app/_content/site";
import { Button } from "@/app/_components/ui";

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="NotableBIT home">
          <span className="brand-mark" aria-hidden="true">
            NB
          </span>
          <span>
            <span className="brand-name">NotableBIT</span>
            <span className="brand-line">Technology Studio</span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {routes.map((route) => (
            <Link key={route.href} href={route.href}>
              {route.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <Button href="/contact">Work With NotableBIT</Button>
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
            <Link href="/contact">Work With NotableBIT</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link className="brand" href="/" aria-label="NotableBIT home">
            <span className="brand-mark" aria-hidden="true">
              NB
            </span>
            <span>
              <span className="brand-name">NotableBIT</span>
              <span className="brand-line">Products, platforms, systems</span>
            </span>
          </Link>
          <p className="footer-copy">
            {site.description} The company home for HindSite, BitVoices, strategic services, and builder-centered ecosystem work.
          </p>
        </div>

        <div>
          <h2 className="footer-heading">Studio</h2>
          <nav className="footer-links" aria-label="Footer site navigation">
            {routes.map((route) => (
              <Link key={route.href} href={route.href}>
                {route.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="footer-heading">Ecosystem</h2>
          <nav className="footer-links" aria-label="Footer ecosystem navigation">
            <a href="https://bdonaldharris.com" rel="noreferrer" target="_blank">
              B Donald Harris
            </a>
            <a href="https://bitvoices.network" rel="noreferrer" target="_blank">
              BitVoices Network
            </a>
            <Link href="/products">HindSite</Link>
            <Link href="/media">BIT Voices Podcast</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
