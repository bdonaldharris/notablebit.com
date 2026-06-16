import type { Metadata } from "next";
import { PageHero } from "@/app/_components/page-sections";
import { Badge, Card, CtaSection, SectionHeading } from "@/app/_components/ui";
import { pageSections } from "@/app/_content/ecosystem";
import { routeByHref } from "@/app/_content/site";
import { createMetadata } from "@/app/_lib/metadata";

const route = routeByHref.get("/studio")!;

export const metadata: Metadata = createMetadata({
  title: "Studio",
  description: route.description,
  path: route.href,
});

export default function StudioPage() {
  const sections = pageSections.studio;
  const focusAreas = [
    "AI workflow tools",
    "Community platforms",
    "Founder-led SaaS",
    "Black tech ecosystem infrastructure",
    "Strategic software systems",
  ];
  const model = [
    "Internal products",
    "Client advisory",
    "Partnerships",
    "Media/community initiatives",
  ];

  return (
    <main>
      <PageHero
        eyebrow={route.eyebrow}
        title={route.title}
        description={route.description}
        primaryHref="/contact"
        primaryLabel="Work with the Studio"
        secondaryHref="/products"
        secondaryLabel="Explore Products"
      />

      {sections.map((section, index) => (
        <section className="section-tight" aria-label={section.title} key={section.title}>
          <div className="container studio-band">
            <SectionHeading eyebrow={section.eyebrow} title={section.title} description={section.description} />
            <div className="process-list">
              {section.items?.map((item, itemIndex) => (
                <Card key={item.title}>
                  <div className="process-item">
                    <span className="process-number">{String(index + itemIndex + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="heading-md">{item.title}</h3>
                      <p className="body-copy">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="section-tight" aria-label="Where We Focus">
        <div className="container">
          <SectionHeading
            eyebrow="Focus"
            title="Where We Focus"
            description="The studio concentrates on systems where software, AI workflow strategy, product clarity, media, and community infrastructure overlap."
          />
          <div className="grid grid-3" style={{ marginTop: 28 }}>
            {focusAreas.map((area) => (
              <Card key={area}>
                <div className="card-stack">
                  <Badge tone="blue">Focus Area</Badge>
                  <h3 className="heading-md">{area}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight" aria-labelledby="model-title">
        <div className="container studio-model">
          <div>
            <p className="eyebrow">Operating model</p>
            <h2 className="heading-xl" id="model-title">
              Not just a service provider.
            </h2>
            <p className="lede">
              NotableBIT operates as a company/studio: building its own products, advising selective clients, partnering around ecosystem work,
              and using media/community initiatives to document and amplify builders.
            </p>
          </div>
          <div className="model-stack">
            {model.map((item) => (
              <Card key={item}>
                <h3 className="heading-md">{item}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow="Studio fit"
        title="Need practical technology, product clarity, or builder infrastructure?"
        description="Start with the studio when the work needs strategy, context, technical judgment, and accountable AI-era execution."
        primaryHref="/contact"
        primaryLabel="Partner with NotableBIT"
        secondaryHref="/consulting"
        secondaryLabel="View Consulting"
      />
    </main>
  );
}
