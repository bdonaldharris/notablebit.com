import Link from "next/link";
import type { SiteRoute } from "@/app/_content/site";
import { routes, site } from "@/app/_content/site";

type FoundationPageProps = {
  route: SiteRoute;
};

export function FoundationPage({ route }: FoundationPageProps) {
  return (
    <main>
      <section aria-labelledby="page-title">
        <p>{route.eyebrow}</p>
        <h1 id="page-title">{route.title}</h1>
        <p>{route.description}</p>
        <Link href="/contact">{route.primaryCta}</Link>
      </section>

      <section aria-labelledby="planned-sections">
        <h2 id="planned-sections">Planned sections</h2>
        <ul>
          {route.sections.map((section) => (
            <li key={section}>{section}</li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="routes">
        <h2 id="routes">Redesign route foundation</h2>
        <ul>
          {routes.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="sources">
        <h2 id="sources">Source-of-truth artifacts</h2>
        <ul>
          {site.sourceArtifacts.map((artifact) => (
            <li key={artifact}>{artifact}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
