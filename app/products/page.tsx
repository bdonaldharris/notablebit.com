import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/app/_components/ui";
import { products } from "@/app/_content/ecosystem";
import { routeByHref } from "@/app/_content/site";
import { createMetadata } from "@/app/_lib/metadata";
import bitVoicesIcon from "@/assets/originals/bitvoices-icon-logo.png";
import bitVoicesPlatformBadge from "@/assets/originals/bitvoices-platform-badge.png";
import hindSiteIcon from "@/assets/originals/hindsite-icon.png";
import hindSiteProductImage from "@/assets/originals/hindsite-saas-badge.png";
import notableBitLabsBadge from "@/assets/originals/notablebit-labs-badge.png";
import productsHeroImage from "@/assets/originals/products-hero.png";
import notableBitLabsIcon from "@/assets/originals/stacked-compact.png";

const route = routeByHref.get("/products")!;

export const metadata: Metadata = createMetadata({
  title: "Products",
  description: route.description,
  path: route.href,
});

const hindSiteWorkflow = ["Capture traces", "Reconstruct timeline", "Support reflection", "Publish useful artifacts"];

export default function ProductsPage() {
  const [hindSite] = products;

  return (
    <main className="products-page">
      <section className="section products-hero" aria-labelledby="page-title">
        <Image
          aria-hidden="true"
          alt=""
          className="products-hero-atmosphere"
          fill
          priority
          sizes="100vw"
          src={productsHeroImage}
        />
        <div className="container products-hero-grid">
          <div className="products-hero-copy">
            <h1 className="display" id="page-title">
              {route.title}
            </h1>
            <p className="lede">{route.description}</p>
            <div className="button-row">
              <Button href="https://hindsite.pro">Join the HindSite Waitlist</Button>
              <Button href="https://bitvoices.network" variant="secondary">
                Visit BitVoices
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight products-feature-section" aria-labelledby="featured-product">
        <div className="container">
          <article className="products-feature-card">
            <div className="products-feature-copy">
              <div className="products-feature-status" aria-label={`Product maturity: ${hindSite.status}`}>
                <span>{hindSite.status}</span>
              </div>
              <h2 className="heading-xl" id="featured-product">
                Building HindSite
              </h2>
              <p className="products-feature-intro">
                In an AI-assisted development world, the work is not just the code. The work is the decisions, corrections, context, and understanding
                that happen along the way.
              </p>
              <ol className="products-workflow-rail" aria-label="HindSite workflow sequence">
                {hindSiteWorkflow.map((step, stepIndex) => (
                  <li key={step}>
                    <span>{String(stepIndex + 1).padStart(2, "0")}</span>
                    <strong>{step}</strong>
                  </li>
                ))}
              </ol>
              <div className="button-row products-feature-actions">
                <Button href="https://hindsite.pro">Join Waitlist</Button>
                <Button href="/contact" variant="secondary">
                  Discuss Builder Workflows
                </Button>
              </div>
            </div>

            <figure className="products-feature-visual">
              <Image
                alt="HindSite product badge with the tagline Workflow Intelligence for Builders"
                className="products-feature-image"
                placeholder="blur"
                sizes="(max-width: 780px) calc(100vw - 80px), 52vw"
                src={hindSiteProductImage}
              />
            </figure>
          </article>
        </div>
      </section>

      <section className="section-tight products-ecosystem-section products-platforms" aria-labelledby="product-ecosystem">
        <div className="container">
          <h2 className="heading-xl" id="product-ecosystem">
            Built in Sequence
          </h2>
          <div className="products-platform-grid">
            <a className="platform-card" href="https://bitvoices.network" rel="noopener noreferrer" target="_blank">
              <div className="platform-card-media">
                <Image
                  alt="BitVoices Network platform preview"
                  className="platform-card-badge"
                  fill
                  placeholder="blur"
                  sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1000px) 46vw, 31vw"
                  src={bitVoicesPlatformBadge}
                />
              </div>
              <div className="platform-card-body">
                <p className="platform-card-stage">Evolving Platform and Media Network</p>
                <h3 className="platform-card-title">BitVoices Network</h3>
                <p className="platform-card-copy">
                  A platform and media network created to amplify Black excellence in tech and help Black builders connect, share, and be seen.
                </p>
                <Image aria-hidden="true" alt="" className="platform-card-icon" src={bitVoicesIcon} />
              </div>
            </a>

            <Link className="platform-card" href="https://hindsite.pro">
              <div className="platform-card-media">
                <Image
                  alt="HindSite product badge"
                  className="platform-card-badge"
                  fill
                  placeholder="blur"
                  sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1000px) 46vw, 31vw"
                  src={hindSiteProductImage}
                />
              </div>
              <div className="platform-card-body">
                <p className="platform-card-stage">Alpha / Waitlist / Active Build</p>
                <h3 className="platform-card-title">HindSite</h3>
                <p className="platform-card-copy">
                  Workflow intelligence for builders. HindSite captures development traces, reconstructs timelines, supports reflection, and helps
                  builders turn work into useful artifacts.
                </p>
                <Image aria-hidden="true" alt="" className="platform-card-icon" src={hindSiteIcon} />
              </div>
            </Link>

            <article className="platform-card">
              <div className="platform-card-media">
                <Image
                  alt="NotableBIT Labs product badge"
                  className="platform-card-badge"
                  fill
                  placeholder="blur"
                  sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1000px) 46vw, 31vw"
                  src={notableBitLabsBadge}
                />
              </div>
              <div className="platform-card-body">
                <p className="platform-card-stage">In Exploration</p>
                <h3 className="platform-card-title">NotableBIT Labs</h3>
                <p className="platform-card-copy">
                  Carefully scoped experiments for builder workflows, community infrastructure, and AI-era execution systems, shared publicly only
                  when ready.
                </p>
                <Image aria-hidden="true" alt="" className="platform-card-icon platform-card-icon-labs" src={notableBitLabsIcon} />
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section-tight products-closing" aria-labelledby="products-closing-title">
        <div className="container">
          <div className="products-closing-card">
            <h2 className="products-closing-heading" id="products-closing-title">
              Have a workflow worth building into a product?
            </h2>
            <p className="products-closing-copy">
              Start with NotableBIT when the work needs strategy, product judgment, and AI-era execution.
            </p>
            <div className="products-closing-actions">
              <Button href="/contact">Start a Product Conversation</Button>
              <Button href="/studio" variant="secondary">
                Explore the Studio
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
