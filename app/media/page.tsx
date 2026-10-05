import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/app/_components/ui";
import { PageHero } from "@/app/_components/page-sections";
import { routeByHref } from "@/app/_content/site";
import { createMetadata } from "@/app/_lib/metadata";
import { PodcastShorts } from "@/app/media/podcast-shorts";
import styles from "@/app/media/media-refinements.module.css";

const route = routeByHref.get("/media")!;

export const metadata: Metadata = createMetadata({
  title: "Media",
  description: route.description,
  path: route.href,
});

const mediaPaths = [
  {
    title: "BIT Voices Podcast",
    description:
      "Conversations with Black technologists, founders, engineers, builders, and leaders shaping technology, AI, entrepreneurship, and community.",
  },
  {
    title: "Community Storytelling",
    description: "Stories that make emerging ideas, overlooked work, builder journeys, and ecosystem lessons visible.",
  },
  {
    title: "Speaking / Conversations",
    description:
      "Founder-led talks, interviews, panels, and public thought routed through B Donald Harris when deeper context belongs there.",
  },
] as const;

export default function MediaPage() {
  return (
    <main className="media-page">
      <PageHero
        className="media-hero"
        image="/assets/originals/media-hero.jpeg"
        lede="Through podcast conversations, community storytelling, and founder-led media, NotableBIT documents the builders shaping technology, AI, entrepreneurship, and community."
        primary={{ href: "https://bitvoices.network", label: "Explore BitVoices" }}
        title="Media that documents builders, ideas, and the future of Black tech."
      />

      <section className="page-section" aria-labelledby="podcast-title">
        <div className="container podcast-showcase">
          <div className="podcast-showcase-copy">
            <h2 className="heading-xl" id="podcast-title">
              BIT Voices Podcast
            </h2>
            <p className="lede">
              Conversations with Black technologists, founders, engineers, builders, and leaders shaping technology, AI, entrepreneurship, and
              community.
            </p>
          </div>
          <PodcastShorts />
          <div className={`media-podcast-actions ${styles.podcastActions}`}>
            <Link
              className={`media-podcast-link ${styles.podcastLink}`}
              href="https://www.youtube.com/@notablebit"
              rel="noopener noreferrer"
              target="_blank"
            >
              Visit BIT Voices Podcast
            </Link>
          </div>
          <p className={`body-copy podcast-showcase-context media-podcast-note ${styles.podcastNote}`}>
            Formerly The Notable &amp; Black in Tech Podcast, BIT Voices Podcast now sits inside the broader NotableBIT media and community ecosystem.
          </p>
        </div>
      </section>

      <section
        className="page-section media-infrastructure-section media-closing-section"
        aria-labelledby="media-infrastructure-title"
      >
        <div className="container">
          <div className="media-infrastructure-header">
            <h2 className="heading-xl" id="media-infrastructure-title">
              Media that serves the ecosystem.
            </h2>
            <p className="body-copy">
              NotableBIT treats media as infrastructure: a way to document work, create context, amplify builders, and connect ideas across
              products, community, and strategy.
            </p>
          </div>

          <div className="media-infrastructure-panel">
            <div className="media-infrastructure-paths">
              {mediaPaths.map((path, index) => (
                <article className="media-infrastructure-path" key={path.title}>
                  <span className="media-infrastructure-index" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="heading-md">{path.title}</h3>
                  <p className="body-copy">{path.description}</p>
                </article>
              ))}
            </div>

            <div className="media-infrastructure-actions">
              <div className="button-row">
                <Button href="/contact">Start a Media Conversation</Button>
                <Button href="https://bitvoices.network" variant="secondary">
                  Visit BitVoices
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
