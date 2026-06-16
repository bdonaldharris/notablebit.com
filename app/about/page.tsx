import type { Metadata } from "next";
import { PageHero } from "@/app/_components/page-sections";
import { Badge, Button, Card, CtaSection, SectionHeading } from "@/app/_components/ui";
import { products, values } from "@/app/_content/ecosystem";
import { routeByHref } from "@/app/_content/site";
import { createMetadata } from "@/app/_lib/metadata";

const route = routeByHref.get("/about")!;

export const metadata: Metadata = createMetadata({
  title: "About",
  description: route.description,
  path: route.href,
});

export default function AboutPage() {
  const focus = [
    products[0].title,
    products[1].title,
    "AI workflow strategy",
    "Product planning",
    "Black tech ecosystem infrastructure",
  ];

  return (
    <main>
      <PageHero
        eyebrow={route.eyebrow}
        title={route.title}
        description={route.description}
        primaryHref="/contact"
        primaryLabel="Start a Conversation"
        secondaryHref="https://bdonaldharris.com"
        secondaryLabel="Meet B Donald"
      />

      <section className="section-tight" aria-label="Origin and mission">
        <div className="container about-story">
          <Card>
            <div className="card-stack">
              <Badge>Origin</Badge>
              <h2 className="heading-lg">Built from engineering, leadership, community, and media.</h2>
              <p className="body-copy">
                NotableBIT was founded by B Donald Harris and shaped by more than two decades of software engineering, technical leadership,
                community-building, and storytelling work.
              </p>
            </div>
          </Card>
          <Card>
            <div className="card-stack">
              <Badge tone="blue">Mission</Badge>
              <h2 className="heading-lg">Help builders and organizations move from ideas to execution.</h2>
              <p className="body-copy">
                The company builds products, platforms, and strategic systems that make work clearer, more accountable, and more useful in the AI
                era.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section className="section-tight" aria-label="Current focus">
        <div className="container">
          <SectionHeading
            eyebrow="Current focus"
            title="Where NotableBIT is concentrating now."
            description="The current work connects product building, AI workflow strategy, product planning, and Black tech ecosystem infrastructure."
          />
          <div className="grid grid-3" style={{ marginTop: 28 }}>
            {focus.map((item) => (
              <Card key={item}>
                <div className="card-stack">
                  <Badge tone="blue">Focus</Badge>
                  <h3 className="heading-md">{item}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight" aria-labelledby="founder-title">
        <div className="container founder-panel">
          <div>
            <p className="eyebrow">Founder</p>
            <h2 className="heading-xl" id="founder-title">
              B Donald Harris leads the company direction.
            </h2>
          </div>
          <div>
            <p className="lede">
              B Donald Harris is a technologist, founder, speaker, and ecosystem builder. NotableBIT keeps this page focused on the company and
              studio, while the deeper personal authority site lives at bdonaldharris.com.
            </p>
            <div className="button-row">
              <Button href="https://bdonaldharris.com" variant="secondary">
                Visit B Donald Harris
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight" aria-label="Values">
        <div className="container">
          <SectionHeading
            eyebrow="Values"
            title="The values behind the work."
            description="The studio is practical, founder-led, ecosystem-aware, and centered on clarity, context, ownership, and accountability."
          />
          <div className="grid grid-3" style={{ marginTop: 28 }}>
            {values.map((value) => (
              <Card key={value.title}>
                <div className="card-stack">
                  <Badge>{value.title}</Badge>
                  <p className="body-copy">{value.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow="Company context"
        title="Need the company behind products, media, and strategic systems?"
        description="Use NotableBIT for the studio, products, and partnership conversation. Use B Donald's personal site for deeper founder, speaking, and public authority context."
        primaryHref="/contact"
        primaryLabel="Work With NotableBIT"
        secondaryHref="/studio"
        secondaryLabel="Explore the Studio"
      />
    </main>
  );
}
