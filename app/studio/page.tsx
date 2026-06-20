import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/app/_components/ui";
import { pageSections } from "@/app/_content/ecosystem";
import { routeByHref } from "@/app/_content/site";
import { createMetadata } from "@/app/_lib/metadata";
import studioHeroImage from "@/assets/originals/workstation.jpg";

const route = routeByHref.get("/studio")!;

export const metadata: Metadata = createMetadata({
  title: "Studio",
  description: route.description,
  path: route.href,
});

export default function StudioPage() {
  const sections = pageSections.studio;
  const [principles, method] = sections;
  const focusAreas = [
    { label: "ai_workflow_tools", description: "systems for shaping human + AI work" },
    { label: "community_platforms", description: "infrastructure for builders to gather, share, and move" },
    { label: "founder_led_saas", description: "products rooted in lived operator context" },
    { label: "black_tech_ecosystem_infrastructure", description: "tools, media, and systems that support Black builders" },
    { label: "strategic_software_systems", description: "practical technology that clarifies work and strengthens execution" },
  ];
  const model = [
    { title: "Build", description: "Internal products shaped from real builder problems." },
    { title: "Advise", description: "Selective client work where strategy, product clarity, and execution matter." },
    { title: "Partner", description: "Aligned ecosystem work with builders, communities, and institutions." },
    { title: "Amplify", description: "Media/community initiatives that document and strengthen the builder ecosystem." },
  ];

  return (
    <main>
      <section className="section studio-hero" aria-labelledby="page-title">
        <Image
          aria-hidden="true"
          alt=""
          className="studio-hero-atmosphere"
          fill
          priority
          sizes="100vw"
          src={studioHeroImage}
        />
        <div className="container studio-hero-grid">
          <div className="studio-hero-copy">
            <h1 className="display" id="page-title">
              {route.title}
            </h1>
            <p className="lede">{route.description}</p>
            <div className="button-row">
              <Button href="/contact">Work with the Studio</Button>
              <Button href="/products" variant="secondary">
                Explore Products
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight page-section studio-principles-section" aria-labelledby="studio-principles-title">
        <div className="container">
          <div className="studio-principles-header">
            <h2 className="heading-xl" id="studio-principles-title">
              {principles.title}
            </h2>
          </div>
          <ol className="studio-principles-notes">
            {principles.items?.map((item, itemIndex) => (
              <li className="studio-principle-note" key={item.title}>
                <span className="studio-principle-note-number">{String(itemIndex + 1).padStart(2, "0")}</span>
                <h3 className="studio-principle-note-title">{item.title}</h3>
                <p className="studio-principle-note-body">{item.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-tight page-section section-gap-tight studio-method-section" aria-labelledby="studio-method-title">
        <div className="container">
          <div className="studio-method-header">
            <h2 className="heading-xl" id="studio-method-title">
              {method.title}
            </h2>
            <p className="body-copy">{method.description}</p>
          </div>
          <div className="studio-method-canvas">
            <ol className="studio-method-flow">
              {method.items?.map((item, itemIndex) => (
                <li className="studio-method-node" key={item.title}>
                  <span className="studio-method-node-number">{String(itemIndex + 1).padStart(2, "0")}</span>
                  <h3 className="studio-method-node-title">{item.title}</h3>
                  <p className="studio-method-node-body">{item.description}</p>
                  {itemIndex < (method.items?.length ?? 0) - 1 ? <span aria-hidden="true" className="studio-method-connector" /> : null}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section-tight page-section studio-disciplines-section" aria-labelledby="studio-disciplines-title">
        <div className="container">
          <div className="studio-disciplines-header">
            <h2 className="heading-xl" id="studio-disciplines-title">
              Disciplines of the Work
            </h2>
            <p className="studio-disciplines-intro">
              The studio concentrates where software, AI workflow strategy, product clarity, media, and community infrastructure overlap.
            </p>
          </div>
          <div className="studio-console">
            <div className="studio-console-header">
              <div aria-hidden="true" className="studio-console-controls">
                <span />
                <span />
                <span />
              </div>
              <span className="studio-console-label">notablebit/workbench</span>
              <span className="studio-console-status">focus.index</span>
            </div>
            <div className="studio-console-body">
              <p className="studio-console-command">
                <span aria-hidden="true">&gt;</span> notablebit.focus --list
              </p>
              <ol className="studio-console-list">
                {focusAreas.map((area, areaIndex) => (
                  <li className="studio-console-entry" key={area.label}>
                    <span className="studio-console-number">[{String(areaIndex + 1).padStart(2, "0")}]</span>
                    <h3 className="studio-console-title">{area.label}</h3>
                    <p className="studio-console-description">{area.description}</p>
                  </li>
                ))}
              </ol>
              <p className="studio-console-prompt">
                <span aria-hidden="true">&gt;</span>
                <span aria-hidden="true" className="studio-console-cursor" />
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight page-section studio-model-section" aria-labelledby="studio-model-title">
        <div className="container">
          <div className="studio-model-header">
            <h2 className="heading-xl" id="studio-model-title">
              Company/Studio, Not Agency
            </h2>
            <p className="studio-model-copy">
              NotableBIT operates as a company/studio: building internal products, advising select clients, partnering around aligned ecosystem work,
              and using media/community initiatives to document and amplify builders.
            </p>
          </div>
          <div className="studio-model-grid">
            {model.map((item, itemIndex) => (
              <article className="studio-model-card" key={item.title}>
                <span className="studio-model-card-index">{String(itemIndex + 1).padStart(2, "0")}</span>
                <h3 className="studio-model-card-title">{item.title}</h3>
                <p className="studio-model-card-body">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight page-section studio-cta-section" aria-labelledby="studio-cta-title">
        <div className="container">
          <div className="studio-cta-panel">
            <h2 className="studio-cta-heading" id="studio-cta-title">
              Need clarity before the build?
            </h2>
            <p className="studio-cta-copy">
              Start with the studio when the work needs strategy, context, technical judgment, and accountable AI-era execution.
            </p>
            <div className="studio-cta-actions">
              <Button href="/contact">Partner with NotableBIT</Button>
              <Button href="/consulting" variant="secondary">
                View Consulting
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
