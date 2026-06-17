import type { Metadata } from "next";
import { PageHero } from "@/app/_components/page-sections";
import { Badge, Button, Card, CtaSection, LinkCard, SectionHeading } from "@/app/_components/ui";
import { mediaChannels, products, services } from "@/app/_content/ecosystem";
import { homeRoute } from "@/app/_content/site";
import { createMetadata } from "@/app/_lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "NotableBIT | Founder-Led Technology Studio",
  description: homeRoute.description,
  path: homeRoute.href,
});

export default function Home() {
  const [hindSite, bitVoices] = products;
  const featuredServices = services.slice(0, 4);

  return (
    <main>
      <PageHero
        eyebrow={homeRoute.eyebrow}
        title={homeRoute.title}
        description={homeRoute.description}
        primaryHref="/contact"
        primaryLabel="Work With NotableBIT"
        secondaryHref="/products"
        secondaryLabel="Explore the Ecosystem"
      />

      <section className="section-tight" aria-label="Ecosystem overview">
        <div className="container">
          <SectionHeading
            eyebrow="Ecosystem"
            title="One studio. Multiple aligned vehicles."
            description="NotableBIT connects products, platforms, media, and strategic services without pretending each piece is at the same stage."
          />
          <div className="grid grid-2 ecosystem-grid" style={{ marginTop: 28 }}>
            <LinkCard href="/products" label={hindSite.status} title={hindSite.title} description={hindSite.description} />
            <LinkCard href="https://bitvoices.network" label={bitVoices.status} title={bitVoices.title} description={bitVoices.description} />
            <LinkCard href="/media" label="Media" title="BitVoices Podcast" description={mediaChannels[0].description} />
            <LinkCard href="/consulting" label="Services" title="Strategic Technology Services" description={services[0].description} />
          </div>
        </div>
      </section>

      <section className="section-tight" aria-label="What NotableBIT does">
        <div className="container">
          <SectionHeading
            eyebrow="What we do"
            title="Move from idea to execution."
            description="NotableBIT helps builders and organizations create useful plans, accountable AI workflows, and strategic systems grounded in real constraints."
          />
          <div className="grid grid-2" style={{ marginTop: 28 }}>
            {featuredServices.map((service) => (
              <Card key={service.title}>
                <div className="card-stack">
                  <Badge tone="blue">Capability</Badge>
                  <h3 className="heading-md">{service.title}</h3>
                  <p className="body-copy">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight" aria-labelledby="home-hindsite">
        <div className="container product-feature">
          <Card className="product-preview">
            <div className="card-stack">
              <Badge>{hindSite.status}</Badge>
              <h2 className="heading-lg" id="home-hindsite">
                Building HindSite
              </h2>
              <p className="body-copy">{hindSite.description}</p>
              <div className="trace-list" aria-label="HindSite workflow trace">
                <span>terminal sessions</span>
                <span>AI agent work</span>
                <span>decisions and fixes</span>
                <span>timelines and artifacts</span>
              </div>
            </div>
          </Card>
          <div>
            <p className="eyebrow">Featured product</p>
            <h2 className="heading-xl">In AI-assisted development, the work is more than the code.</h2>
            <p className="lede">
              The work is the context, decisions, corrections, and understanding that happen along the way. HindSite is being built to help
              builders preserve and reuse that truth.
            </p>
            <div className="button-row">
              <Button href="/products">Explore Products</Button>
              <Button href="/contact" variant="secondary">
                Join Waitlist
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight" aria-label="Consulting and media">
        <div className="container split-band">
          <Card>
            <div className="card-stack">
              <Badge tone="blue">Consulting</Badge>
              <h2 className="heading-lg">Strategic help for builders and organizations.</h2>
              <p className="body-copy">
                Product spec and MVP planning, AI workflow strategy, fractional technology leadership, architecture advisory, and community
                platform strategy.
              </p>
              <div className="button-row">
                <Button href="/consulting">View Consulting</Button>
              </div>
            </div>
          </Card>
          <Card>
            <div className="card-stack">
              <Badge>Media & Community</Badge>
              <h2 className="heading-lg">Media and community are part of the infrastructure.</h2>
              <p className="body-copy">
                Through BitVoices and related initiatives, NotableBIT helps amplify Black technologists, founders, builders, and leaders whose
                work deserves visibility, context, and ownership.
              </p>
              <div className="button-row">
                <Button href="/media" variant="secondary">
                  Explore BitVoices
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="section-tight" aria-labelledby="founder-led">
        <div className="container founder-panel">
          <div>
            <p className="eyebrow">Founder-led studio</p>
            <h2 className="heading-xl" id="founder-led">
              Founder-led. Builder-centered. Execution-minded.
            </h2>
          </div>
          <div>
            <p className="lede">
              NotableBIT was founded by B Donald Harris, a technologist, founder, speaker, and ecosystem builder with more than 20 years of
              software engineering experience and a commitment to helping Black builders move from visibility to ownership.
            </p>
            <div className="button-row">
              <Button href="https://bdonaldharris.com" variant="secondary">
                Meet B Donald Harris
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow="Build with clarity"
        title="Let’s build with clarity."
        description="Bring NotableBIT into work that needs product strategy, practical technology, accountable AI workflow thinking, or ecosystem infrastructure."
        primaryHref="/contact"
        primaryLabel="Work With NotableBIT"
        secondaryHref="/products"
        secondaryLabel="Explore Our Products"
      />
    </main>
  );
}
