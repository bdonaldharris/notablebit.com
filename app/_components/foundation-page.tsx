import type { SiteRoute } from "@/app/_content/site";
import { pageSections } from "@/app/_content/ecosystem";
import { routes, site } from "@/app/_content/site";
import { Badge, Button, Card, CtaSection, LinkCard, SectionHeading } from "@/app/_components/ui";

type FoundationPageProps = {
  route: SiteRoute;
};

export function FoundationPage({ route }: FoundationPageProps) {
  const structuredSections = pageSections[route.contentKey] ?? [];

  return (
    <main>
      <section className="section" aria-labelledby="page-title">
        <div className="container">
          <p className="eyebrow">{route.eyebrow}</p>
          <h1 className="display" id="page-title">
            {route.title}
          </h1>
          <p className="lede">{route.description}</p>
          <div className="button-row">
            <Button href="/contact">{route.primaryCta}</Button>
            <Button href="/products" variant="secondary">
              Explore the Ecosystem
            </Button>
          </div>
        </div>
      </section>

      {structuredSections.map((section) => (
        <section className="section-tight" aria-label={section.title} key={section.title}>
          <div className="container">
            <SectionHeading eyebrow={section.eyebrow} title={section.title} description={section.description} />
            {section.items ? (
              <div className="grid grid-3" style={{ marginTop: 28 }}>
                {section.items.map((item) => (
                  <Card key={item.title} interactive={Boolean(item.href)}>
                    <div className="card-stack">
                      {item.label ? <Badge tone="blue">{item.label}</Badge> : null}
                      <h3 className="heading-md">{item.title}</h3>
                      <p className="body-copy">{item.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            ) : null}
          </div>
        </section>
      ))}

      <section className="section-tight" aria-labelledby="planned-sections">
        <div className="container">
          <SectionHeading
            eyebrow="Route architecture"
            title="Planned sections"
            description="The first foundation pass keeps each route static-first and server-component-first while preserving the implementation plan."
          />
          <div className="grid grid-3" style={{ marginTop: 28 }}>
            {route.sections.map((section) => (
              <Card key={section}>
                <div className="card-stack">
                  <span className="technical">SECTION</span>
                  <h3 className="heading-md">{section}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight" aria-labelledby="routes">
        <div className="container">
          <SectionHeading
            eyebrow="Site map"
            title="Redesign route foundation"
            description="The core NotableBIT routes are intentionally small and route-driven until the full page experiences are layered in."
          />
          <div className="grid grid-3" style={{ marginTop: 28 }}>
            {routes.map((item) => (
              <LinkCard key={item.href} href={item.href} label={item.eyebrow} title={item.label} description={item.description} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow="Source aligned"
        title="Built from the redesign plan and Stitch handoff."
        description={`Source artifacts referenced: ${site.sourceArtifacts.join(", ")}.`}
        primaryHref="/contact"
        primaryLabel="Work With NotableBIT"
        secondaryHref="/studio"
        secondaryLabel="Study the Studio"
      />
    </main>
  );
}
