import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/app/_components/ui";
import { PageHero } from "@/app/_components/page-sections";
import { routeByHref } from "@/app/_content/site";
import { createMetadata } from "@/app/_lib/metadata";

const route = routeByHref.get("/consulting")!;

export const metadata: Metadata = createMetadata({
  title: "Consulting",
  description: route.description,
  path: route.href,
});

const artifacts = [
  {
    title: "Decision Brief",
    description: "Identify the real product, workflow, technical, or organizational decision that needs to be made.",
  },
  {
    title: "Work Structure",
    description: "Turn the decision into a product brief, scope, architecture note, issue plan, or AI-agent-ready implementation prompt.",
  },
  {
    title: "Execution Path",
    description: "Apply senior technical judgment to reduce risk, protect context, and make the next execution step clear.",
  },
] as const;

const decisionZones = [
  {
    title: "Product Spec & MVP Planning",
    description: "Turn rough product intent into user flows, feature scope, architecture notes, and build-ready issue plans.",
  },
  {
    title: "AI Workflow Strategy",
    description:
      "Decide where AI belongs in the workflow, where human judgment stays involved, and how accountability gets built into the system.",
  },
  {
    title: "Fractional Technology Leadership",
    description: "Bring senior technical judgment to architecture, roadmap, vendor/tool decisions, risk, and delivery planning.",
  },
  {
    title: "Custom Software Advisory",
    description: "Clarify what should be built, modernized, integrated, or avoided before resources are committed.",
  },
  {
    title: "Community Platform Strategy",
    description: "Shape the roles, onboarding, moderation, governance, and content systems that help community-led platforms work.",
  },
] as const;

export default function ConsultingPage() {
  return (
    <main className="consulting-page">
      <PageHero
        className="consulting-hero"
        image="/assets/originals/consulting-hero.jpeg"
        lede="NotableBIT provides selective advisory for builders, founders, and organizations that need clarity before execution, from product strategy and AI workflows to platform decisions, technical leadership, and implementation-ready plans."
        primary={{ href: "/contact", label: "Start a consulting conversation" }}
        title="Where product, AI, and technology decisions become buildable paths."
      />

      <section className="consulting-decisions" aria-labelledby="consulting-decisions-title">
        <div className="container">
          <div className="consulting-section-intro">
            <h2 className="heading-xl" id="consulting-decisions-title">
              Five decision zones. One clearer path forward.
            </h2>
            <p className="body-copy">
              When the next move is unclear, NotableBIT helps locate the real decision and shape the path around it, across product direction,
              AI workflows, technical leadership, software planning, and community platform strategy.
            </p>
          </div>
          <div className="consulting-lane-field">
            {decisionZones.map((zone) => (
              <div className="consulting-zone" key={zone.title}>
                <article className="consulting-zone-card">
                  <div className="consulting-zone-header">
                    <h3>{zone.title}</h3>
                  </div>
                  <div className="consulting-zone-body">
                    <p>{zone.description}</p>
                  </div>
                </article>
                <span aria-hidden="true" className="consulting-zone-tail" />
              </div>
            ))}
            <div className="consulting-lane-foundation">
              <h3>Clarity Before Execution</h3>
              <p>The work starts by naming the real decision before choosing the path.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="consulting-artifacts" aria-labelledby="deliverables-title">
        <div className="container">
          <div className="consulting-artifacts-layout">
            <div className="consulting-artifacts-header">
              <h2 className="heading-xl" id="deliverables-title">
                Useful artifacts,<br />not vague advice.
              </h2>
              <p>
                Each engagement is shaped around the decision at hand. The outcome might be a product brief, user flow, feature scope,
                architecture note, GitHub issue plan, or AI-agent-ready implementation prompt.
              </p>
            </div>
            <div className="consulting-paper-stack">
              <span aria-hidden="true" className="consulting-paper-sheet consulting-paper-sheet-back" />
              <span aria-hidden="true" className="consulting-paper-sheet consulting-paper-sheet-middle" />
              <span aria-hidden="true" className="consulting-paper-sheet consulting-paper-sheet-front" />
              <div className="consulting-artifacts-proof" aria-label="Useful consulting artifacts">
                <p className="consulting-artifacts-proof-label">What you leave with</p>
                <div className="consulting-artifact-statements">
                  {artifacts.map((artifact) => (
                    <article className="consulting-artifact-statement" key={artifact.title}>
                      <h3>{artifact.title}</h3>
                      <p>{artifact.description}</p>
                    </article>
                  ))}
                </div>
                <div className="consulting-sticky-note">
                  <p>The point is practical clarity: a path people can understand, review, and build.</p>
                  <span aria-hidden="true" className="consulting-sticky-fold" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="consulting-closing" aria-labelledby="consulting-closing-title">
        <div className="container">
          <div className="consulting-closing-panel">
            <h2 className="consulting-closing-heading" id="consulting-closing-title">
              Start with the conversation, not a menu.
            </h2>
            <p className="consulting-closing-copy">
              Bring the decision, constraint, or opportunity. NotableBIT will help shape the right next move before execution gets expensive.
            </p>
            <div className="consulting-closing-actions">
              <Link className="text-link" href="/products">
                View products <span aria-hidden="true">→</span>
              </Link>
              <Button href="/contact">Start a consulting conversation</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
