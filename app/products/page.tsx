import type { Metadata } from "next";
import { PageHero } from "@/app/_components/page-sections";
import { Badge, Button, Card, CtaSection, LinkCard, SectionHeading } from "@/app/_components/ui";
import { products } from "@/app/_content/ecosystem";
import { routeByHref } from "@/app/_content/site";
import { createMetadata } from "@/app/_lib/metadata";

const route = routeByHref.get("/products")!;

export const metadata: Metadata = createMetadata({
  title: "Products",
  description: route.description,
  path: route.href,
});

export default function ProductsPage() {
  const [hindSite, bitVoices, labs] = products;

  return (
    <main>
      <PageHero
        eyebrow={route.eyebrow}
        title={route.title}
        description={route.description}
        primaryHref="/contact"
        primaryLabel="Join the HindSite Waitlist"
        secondaryHref="https://bitvoices.network"
        secondaryLabel="Visit BitVoices"
      />

      <section className="section-tight" aria-labelledby="featured-product">
        <div className="container product-feature">
          <div>
            <SectionHeading
              eyebrow="Featured product"
              title="Building HindSite"
              description="In an AI-assisted development world, the work is not just the code. The work is the decisions, corrections, context, and understanding that happen along the way."
            />
            <div className="button-row">
              <Button href="/contact">Join Waitlist</Button>
              <Button href="/contact" variant="secondary">
                Discuss Builder Workflows
              </Button>
            </div>
          </div>

          <Card className="product-preview">
            <div className="card-stack">
              <Badge>{hindSite.status}</Badge>
              <h2 className="heading-lg" id="featured-product">
                {hindSite.title}
              </h2>
              <p className="body-copy">{hindSite.description}</p>
              <div className="trace-list" aria-label="HindSite workflow motif">
                <span>capture traces</span>
                <span>reconstruct timeline</span>
                <span>support reflection</span>
                <span>publish useful artifacts</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="section-tight" aria-labelledby="product-ecosystem">
        <div className="container">
          <SectionHeading
            eyebrow="Ecosystem"
            title="Active and emerging NotableBIT-built platforms"
            description="Each product is framed by its current stage so the page stays useful without implying public maturity that does not exist yet."
          />
          <div className="grid grid-3" style={{ marginTop: 28 }}>
            <LinkCard href="/contact" label={hindSite.status} title={hindSite.title} description={hindSite.description} />
            <LinkCard href="https://bitvoices.network" label={bitVoices.status} title={bitVoices.title} description={bitVoices.description} />
            <Card>
              <div className="card-stack">
                <Badge>{labs.status}</Badge>
                <h3 className="heading-md">{labs.title}</h3>
                <p className="body-copy">{labs.description}</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow="Product conversations"
        title="Have a builder workflow worth turning into a system?"
        description="NotableBIT is actively shaping product and platform work around real builder needs, careful scope, and stage-accurate execution."
        primaryHref="/contact"
        primaryLabel="Start a Product Conversation"
        secondaryHref="/studio"
        secondaryLabel="Explore the Studio"
      />
    </main>
  );
}
