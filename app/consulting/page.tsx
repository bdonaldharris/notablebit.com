import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/app/_components/ui";
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
      <section className="section consulting-hero" aria-labelledby="page-title">
        <div className="consulting-hero-media">
          <Image
            alt="Strategic advisory workspace with decision maps, product planning notes, AI workflow diagrams, and technical architecture sketches."
            className="consulting-hero-atmosphere"
            fill
            priority
            sizes="100vw"
            src="/assets/originals/consulting-hero.jpeg"
          />
        </div>
        <div className="container consulting-hero-grid">
          <div className="consulting-hero-copy">
            <h1 className="display" id="page-title">
              Where product, AI, and technology decisions become buildable paths.
            </h1>
            <p className="lede">
              NotableBIT provides selective advisory for builders, founders, and organizations that need clarity before execution — from
              product strategy and AI workflows to platform decisions, technical leadership, and implementation-ready plans.
            </p>
            <div className="button-row">
              <Button href="/contact">Start a Consulting Conversation</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight page-section consulting-decisions" aria-labelledby="consulting-decisions-title">
        <div className="container">
          <div className="consulting-section-intro">
            <h2 className="heading-xl" id="consulting-decisions-title">
              Five decision zones. One clearer path forward.
            </h2>
            <p className="body-copy">
              When the next move is unclear, NotableBIT helps locate the real decision and shape the path around it — across product direction,
              AI workflows, technical leadership, software planning, and community platform strategy.
            </p>
          </div>
          <div className="consulting-lane-field">
            <div className="consulting-decision-lanes" aria-hidden="true">
              {decisionZones.map((zone) => (
                <span key={`lane-${zone.title}`} />
              ))}
            </div>
            {decisionZones.map((zone) => (
              <article className="consulting-zone-card" key={zone.title} tabIndex={0}>
                <div className="consulting-zone-header">
                  <h3 className="heading-md">{zone.title}</h3>
                </div>
                <div className="consulting-zone-body">
                  <p className="body-copy">{zone.description}</p>
                </div>
              </article>
            ))}
            <div className="consulting-lane-foundation">
              <h3>Clarity Before Execution</h3>
              <p>The work starts by naming the real decision before choosing the path.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight page-section consulting-artifacts" aria-labelledby="deliverables-title">
        <div className="container">
          <div className="consulting-artifacts-header">
            <h2 className="heading-xl" id="deliverables-title">
              Useful artifacts, not vague advice.
            </h2>
            <p>
              Each engagement is shaped around the decision at hand. The outcome might be a product brief, user flow, feature scope,
              architecture note, GitHub issue plan, or AI-agent-ready implementation prompt.
            </p>
          </div>
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
            <p className="consulting-artifacts-proof-note">
              The point is practical clarity: a path people can understand, review, and build.
            </p>
          </div>
        </div>
      </section>

      <section className="section-tight page-section consulting-closing" aria-labelledby="consulting-closing-title">
        <div className="container">
          <div className="consulting-closing-panel">
            <div>
              <h2 className="heading-lg" id="consulting-closing-title">
                Start with the conversation, not a menu.
              </h2>
              <p className="lede">
                Bring the decision, constraint, or opportunity. NotableBIT will help shape the right next move before execution gets expensive.
              </p>
            </div>
            <div className="consulting-closing-actions">
              <Button href="/contact">Start a Consulting Conversation</Button>
              <Button href="/products" variant="secondary">
                View Products
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
