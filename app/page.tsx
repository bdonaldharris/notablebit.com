import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import bitvoicesPodcastLogo from "@/assets/originals/bitvoices-podcast-logo.png";
import heroAtmosphereImage from "@/assets/originals/first_podcast_set.jpeg";
import { Button } from "@/app/_components/ui";
import { homeRoute } from "@/app/_content/site";
import { createMetadata } from "@/app/_lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "NotableBIT | Visibility, Memory, and Infrastructure for Black Builders in Tech",
  description: homeRoute.description,
  path: homeRoute.href,
});

type Artifact = {
  label: string;
  title: string;
  detail?: string;
};

const podcastArtifacts: Artifact[] = [
  {
    label: "Origin Vehicle",
    title: "The podcast",
    detail: "The first public vehicle for the mission.",
  },
  {
    label: "Archive Function",
    title: "Document the builders",
    detail: "Process, leadership, ambition, ownership.",
  },
  {
    label: "Expansion Cue",
    title: "Beyond media",
    detail: "Stories became products, strategy, and infrastructure.",
  },
];

type MissionOutput = {
  source: string;
  becomes: string;
  vehicle: string;
  href: string;
  slot: "voice" | "memory" | "clarity" | "studio";
  external?: boolean;
};

const missionOutputs: MissionOutput[] = [
  {
    source: "Voice",
    becomes: "Visibility",
    vehicle: "BitVoices",
    href: "https://bitvoices.network",
    slot: "voice",
    external: true,
  },
  {
    source: "Builder Work",
    becomes: "Memory",
    vehicle: "HindSite",
    href: "/products",
    slot: "memory",
  },
  {
    source: "Strategy",
    becomes: "Clarity",
    vehicle: "Advisory",
    href: "/consulting",
    slot: "clarity",
  },
  {
    source: "Products",
    becomes: "Infrastructure",
    vehicle: "NotableBIT Studio",
    href: "/studio",
    slot: "studio",
  },
];

type EntryPoint = {
  label: string;
  title: string;
  description: string;
  href: string;
  external?: boolean;
};

const entryPoints: EntryPoint[] = [
  {
    label: "Listen",
    title: "Start with BitVoices",
    description: "The voice archive that started the work.",
    href: "/media",
  },
  {
    label: "Build",
    title: "Explore HindSite and product work",
    description: "Builder-memory systems from the studio.",
    href: "/products",
  },
  {
    label: "Clarify",
    title: "Work with the studio",
    description: "Product, AI workflow, and strategy support.",
    href: "/consulting",
  },
  {
    label: "Connect",
    title: "Start a conversation",
    description: "Partnerships, speaking, advisory, and ecosystem inquiries.",
    href: "/contact",
  },
];

function artifactLink(item: MissionOutput | EntryPoint, className: string) {
  if (item.external) {
    return (
      <a className={className} href={item.href} rel="noopener noreferrer" target="_blank">
        {"vehicle" in item ? item.vehicle : item.title}
      </a>
    );
  }

  return (
    <Link className={className} href={item.href}>
      {"vehicle" in item ? item.vehicle : item.title}
    </Link>
  );
}

export default function Home() {
  return (
    <main className="home-main home-type-editorial-modern">
      <section className="section home-hero" aria-labelledby="page-title">
        <Image
          aria-hidden="true"
          alt=""
          className="home-hero-atmosphere"
          fill
          priority
          sizes="100vw"
          src={heroAtmosphereImage}
        />
        <div className="container home-hero-grid">
          <div className="home-hero-copy">
            <h1 className="display" id="page-title">
              <span className="display-declaration">Black technologists are building the future.</span>
            </h1>
            <p className="lede">
              What began as a podcast to amplify Black technologists has grown into a Black-founded studio building
              media, products, platforms, and strategic systems for the AI era.
            </p>
            <div className="button-row">
              <Button href="#ecosystem">Explore the Ecosystem</Button>
              <Button href="/media" variant="secondary">
                Start With Voice
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight voice-origin" aria-label="Podcast origin archive">
        <div className="container voice-grid">
          <div className="podcast-archive" aria-label="Podcast origin artifacts">
            <figure className="podcast-cover">
              <Image
                className="podcast-cover-image"
                src={bitvoicesPodcastLogo}
                alt="BitVoices podcast logo"
                placeholder="blur"
                sizes="(max-width: 860px) 70vw, 280px"
              />
              <figcaption>
                <span>First vehicle</span>
                <strong>Podcast origin</strong>
              </figcaption>
            </figure>
            <div className="podcast-ledger">
              {podcastArtifacts.map((artifact) => (
                <article className="podcast-ledger-item" key={artifact.title}>
                  <p className="artifact-label">{artifact.label}</p>
                  <h3 className="heading-md">{artifact.title}</h3>
                  <p className="body-copy">{artifact.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight mission-archive" aria-label="Mission statement">
        <div className="container">
          <div className="mission-card">
            <p>
              Black technologists should be seen, remembered, and connected to the future they are already building.
            </p>
          </div>
        </div>
      </section>

      <section id="ecosystem" className="section ecosystem-archive" aria-labelledby="ecosystem-title">
        <div className="container">
          <div className="ecosystem-intro">
            <h2 className="heading-xl" id="ecosystem-title">
              Outputs from the same mission.
            </h2>
            <p className="lede">
              The ecosystem is not disconnected ventures — it is one visibility mission meeting real builder needs.
            </p>
          </div>

          <div className="ecosystem-diagram">
            <div className="ecosystem-core">
              <strong>Visibility</strong>
              <span>Mission</span>
            </div>
            {missionOutputs.map((output) => (
              <article className={`ecosystem-output ecosystem-output-${output.slot}`} key={output.vehicle}>
                <h3 className="heading-md">{artifactLink(output, "ecosystem-output-link")}</h3>
                <p className="ecosystem-function">
                  {output.source} <span aria-hidden="true">·</span> {output.becomes}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight founder-field" aria-label="Founder note">
        <div className="container">
          <figure className="founder-note-card">
            <blockquote>
              This work began with conversations. It is still about people, memory, visibility, and ownership.
            </blockquote>
            <figcaption>B Donald Harris, Founder, NotableBIT</figcaption>
          </figure>
        </div>
      </section>

      <section className="section-tight entry-archive" aria-labelledby="entry-title">
        <div className="container">
          <div className="entry-heading">
            <h2 className="heading-xl" id="entry-title">
              Where to enter the ecosystem.
            </h2>
          </div>
          <ol className="entry-list">
            {entryPoints.map((entry, index) => {
              const rowContent = (
                <>
                  <span className="entry-index" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="entry-label">{entry.label}</span>
                  <span className="entry-body">
                    <span className="entry-title heading-md">{entry.title}</span>
                    <span className="entry-desc body-copy">{entry.description}</span>
                  </span>
                  <span className="entry-cue" aria-hidden="true">
                    Enter <span className="entry-cue-arrow">&rarr;</span>
                  </span>
                </>
              );

              return (
                <li className="entry-item" key={entry.title}>
                  {entry.external ? (
                    <a className="entry-row" href={entry.href} rel="noopener noreferrer" target="_blank">
                      {rowContent}
                    </a>
                  ) : (
                    <Link className="entry-row" href={entry.href}>
                      {rowContent}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </section>
    </main>
  );
}
