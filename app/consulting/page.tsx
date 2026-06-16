import type { Metadata } from "next";
import { PageHero } from "@/app/_components/page-sections";
import { Badge, Card, CtaSection, SectionHeading } from "@/app/_components/ui";
import { services } from "@/app/_content/ecosystem";
import { routeByHref } from "@/app/_content/site";
import { createMetadata } from "@/app/_lib/metadata";

const route = routeByHref.get("/consulting")!;

export const metadata: Metadata = createMetadata({
  title: "Consulting",
  description: route.description,
  path: route.href,
});

export default function ConsultingPage() {
  const process = [
    {
      title: "Clarify the decision",
      description: "Identify the real product, workflow, technical, or organizational decision that needs to be made.",
    },
    {
      title: "Structure the work",
      description: "Turn the decision into a product brief, scope, architecture notes, issue plan, or AI-agent-ready implementation prompt.",
    },
    {
      title: "Review the path",
      description: "Use senior technical judgment to reduce risk, protect context, and make the next execution step clear.",
    },
  ];

  return (
    <main>
      <PageHero
        eyebrow={route.eyebrow}
        title={route.title}
        description={route.description}
        primaryHref="/contact"
        primaryLabel="Start a Consulting Conversation"
        secondaryHref="/studio"
        secondaryLabel="How the Studio Works"
      />

      <section className="section-tight" aria-label="Consulting service areas">
        <div className="container">
          <SectionHeading
            eyebrow="Service areas"
            title="Focused advisory for clearer technology decisions."
            description="NotableBIT works best when the problem needs product clarity, strategic technical judgment, or accountable AI workflow adoption."
          />
          <div className="grid grid-2 consulting-grid" style={{ marginTop: 28 }}>
            {services.map((service) => (
              <Card key={service.title}>
                <div className="card-stack">
                  <Badge tone="blue">Advisory</Badge>
                  <h3 className="heading-md">{service.title}</h3>
                  <p className="body-copy">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight" aria-labelledby="deliverables-title">
        <div className="container consulting-deliverables">
          <div>
            <p className="eyebrow">Possible outputs</p>
            <h2 className="heading-xl" id="deliverables-title">
              Useful artifacts, not vague advice.
            </h2>
            <p className="lede">
              Engagements are shaped around the decision at hand. The output may be a product brief, user flow, feature scope, architecture note,
              GitHub issue plan, or AI-agent-ready implementation prompt.
            </p>
          </div>
          <div className="process-list">
            {process.map((step, index) => (
              <Card key={step.title}>
                <div className="process-item">
                  <span className="process-number">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="heading-md">{step.title}</h3>
                    <p className="body-copy">{step.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow="Selective fit"
        title="Start with the conversation, not a menu."
        description="If the work needs technical clarity, stronger product planning, or AI workflow accountability, NotableBIT can help shape the right next move."
        primaryHref="/contact"
        primaryLabel="Start a Consulting Conversation"
        secondaryHref="/products"
        secondaryLabel="View Products"
      />
    </main>
  );
}
