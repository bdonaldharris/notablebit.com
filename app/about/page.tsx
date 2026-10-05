import type { Metadata } from "next";
import Image from "next/image";
import { Button, CtaSection, SectionHeading } from "@/app/_components/ui";
import { values } from "@/app/_content/ecosystem";
import { routeByHref } from "@/app/_content/site";
import { createMetadata } from "@/app/_lib/metadata";
import aboutHeroImage from "@/assets/originals/about-hero.png";
import founderPortrait from "@/assets/originals/b-donald.jpeg";
import { PageHero } from "@/app/_components/page-sections";

const route = routeByHref.get("/about")!;

export const metadata: Metadata = createMetadata({
  title: "About",
  description: route.description,
  path: route.href,
});

export default function AboutPage() {
  return (
    <main className="about-page">
      <PageHero
        className="about-hero"
        image={aboutHeroImage}
        lede="NotableBIT is a Black-founded technology studio shaped by software engineering, community-building, product strategy, and a responsibility to help builders move with clarity."
        primary={{ href: "/contact", label: "Start a Conversation" }}
        secondary={{ href: "https://bdonaldharris.com", label: "Meet B Donald" }}
        title="Building technology with clarity, context, and ownership in mind."
      />

      <section className="section-tight page-section" aria-label="Origin and mission">
        <div className="container">
          <div className="about-story">
            <article className="about-story-column">
              <h2 className="heading-lg">Built from engineering, leadership, community, and media.</h2>
              <p className="body-copy">
                NotableBIT was founded by B Donald Harris and shaped by more than two decades of software engineering, technical leadership,
                community-building, and storytelling work.
              </p>
            </article>
            <article className="about-story-column">
              <h2 className="heading-lg">Help builders and organizations move from ideas to execution.</h2>
              <p className="body-copy">
                The company builds products, platforms, and strategic systems that make work clearer, more accountable, and more useful in the AI
                era.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-tight page-section about-founder-section" aria-labelledby="founder-title">
        <div className="container">
          <article className="about-founder-card">
            <div className="about-founder-media">
              <Image
                alt="B Donald Harris portrait"
                className="about-founder-image"
                fill
                sizes="(max-width: 960px) 100vw, (max-width: 1180px) 44vw, 460px"
                src={founderPortrait}
              />
            </div>
            <div className="about-founder-content">
              <h2 className="heading-xl" id="founder-title">
                B&nbsp;Donald&nbsp;Harris leads the company direction.
              </h2>
              <p className="about-founder-copy">
                B Donald Harris is a technologist, founder, speaker, and ecosystem builder. NotableBIT carries his operating lens: software
                discipline, community responsibility, practical AI adoption, and builder-centered execution.
              </p>
              <div className="button-row about-founder-actions">
                <Button href="https://bdonaldharris.com" variant="secondary">
                  Visit B Donald Harris
                </Button>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section-tight page-section" aria-label="Values">
        <div className="container">
          <SectionHeading
            title="The values behind the work."
            description="The studio is practical, founder-led, ecosystem-aware, and centered on clarity, context, ownership, and accountability."
          />
          <div className="about-values-field">
            <div className="about-values-grid">
              {values.map((value) => (
                <article className="about-values-cell" key={value.title}>
                  <h3 className="heading-md">{value.title}</h3>
                  <p className="body-copy">{value.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        className="section-tight page-section about-cta-section"
        title="Need the company behind products, media, and strategic systems?"
        description="Use NotableBIT for studio, product, and partnership conversations. Visit B Donald’s personal site for deeper founder, speaking, and public authority context."
        primaryHref="/contact"
        primaryLabel="Work with NotableBIT"
        secondaryHref="/studio"
        secondaryLabel="Explore the Studio"
      />
    </main>
  );
}
