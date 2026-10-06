import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import heroAtmosphereImage from "@/assets/originals/first_podcast_set.jpeg";
import { Button } from "@/app/_components/ui";
import { homeRoute } from "@/app/_content/site";
import { createMetadata } from "@/app/_lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "NotableBIT | Visibility, Memory, and Infrastructure for Black Builders in Tech",
  description: homeRoute.description,
  path: homeRoute.href,
});

type MissionOutput = {
  title: string;
  description: string;
  role: string;
  href: string;
  roleTone: "ink" | "red" | "blue";
  external?: boolean;
};

const missionOutputs: MissionOutput[] = [
  {
    title: "NotableBIT",
    description: "Consulting, coaching, education, and software construction, helping people move from idea to useful, deployed software.",
    role: "Studio",
    href: "/studio",
    roleTone: "ink",
  },
  {
    title: "BIT Voices Podcast",
    description: "Conversations amplifying Black voices and excellence in technology.",
    role: "Media",
    href: "/media",
    roleTone: "red",
  },
  {
    title: "BitVoices Network",
    description: "Amplifying Black Excellence in Tech. Community is culture, not features.",
    role: "Community",
    href: "https://bitvoices.network",
    roleTone: "red",
    external: true,
  },
  {
    title: "HindSite",
    description: "Workflow intelligence for builders and AI-assisted development work.",
    role: "Product",
    href: "https://hindsite.pro",
    roleTone: "blue",
    external: true,
  },
];

type EntryPoint = {
  label: string;
  title: string;
  description: string;
  href: string;
  rule: "red" | "blue" | "ink";
  external?: boolean;
};

const entryPoints: EntryPoint[] = [
  {
    label: "Listen",
    title: "BIT Voices Podcast",
    description: "The conversations that started the work.",
    href: "/media",
    rule: "red",
  },
  {
    label: "Build",
    title: "HindSite",
    description: "Workflow intelligence from the studio.",
    href: "https://hindsite.pro",
    rule: "blue",
    external: true,
  },
  {
    label: "Clarify",
    title: "Work with the studio",
    description: "Product, AI workflow, and strategy support.",
    href: "/consulting",
    rule: "blue",
  },
  {
    label: "Connect",
    title: "Start a conversation",
    description: "Partnerships, speaking, advisory, and ecosystem inquiries.",
    href: "/contact",
    rule: "ink",
  },
];

const journeySteps = [
  "Idea",
  "Problem excavation",
  "Product definition",
  "Requirements",
  "Design",
  "Architecture",
  "Implementation",
  "Validation",
  "Deployment",
];

function ArchiveLink({ children, className, item }: { children: ReactNode; className: string; item: MissionOutput | EntryPoint }) {
  if (item.external) {
    return (
      <a className={className} href={item.href} rel="noopener noreferrer" target="_blank">
        {children}
      </a>
    );
  }

  return (
    <Link className={className} href={item.href}>
      {children}
    </Link>
  );
}

export default function Home() {
  return (
    <main className="home-main">
      <section className="home-hero" aria-labelledby="page-title">
        <Image
          aria-hidden="true"
          alt=""
          className="home-hero-atmosphere"
          fill
          preload
          sizes="100vw"
          src={heroAtmosphereImage}
        />
        <div className="home-hero-grid">
          <div className="home-hero-copy">
            <div className="home-hero-heading">
              <p className="eyebrow">Black-founded technology studio · Tulsa, Oklahoma</p>
              <h1 className="display" id="page-title">
                Black technologists are building the future.
              </h1>
            </div>
            <div className="home-hero-footer">
              <p className="lede">
                What began as a podcast to amplify Black technologists has grown into a Black-founded studio building
                media, products, platforms, and strategic systems for the AI era.
              </p>
              <div className="button-row">
                <Button href="#ecosystem">Explore the ecosystem</Button>
                <Link className="hero-text-link" href="/media">
                  Listen to BIT Voices <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-archive" aria-label="Mission statement">
        <div className="container">
          <p className="mission-statement">
            Black technologists should be seen, remembered, and connected to the future they are already building.
          </p>
        </div>
      </section>

      <section id="ecosystem" className="ecosystem-archive" aria-labelledby="ecosystem-title">
        <div className="container">
          <div className="ecosystem-intro">
            <p className="section-label">Tracklist</p>
            <h2 className="heading-xl" id="ecosystem-title">
              One mission, four outputs.
            </h2>
            <p className="body-copy">
              These are not separate ventures. Each one answers a real need builders have, and all of them come from the same mission.
            </p>
          </div>
          <ol className="tracklist">
            {missionOutputs.map((output, index) => (
              <li key={output.title}>
                <ArchiveLink className="tracklist-row" item={output}>
                  <span className="tracklist-index">{String(index + 1).padStart(2, "0")}</span>
                  <span className="tracklist-main">
                    <h3>{output.title}</h3>
                    <p>{output.description}</p>
                  </span>
                  <span className={`tracklist-role tracklist-role-${output.roleTone}`}>{output.role}</span>
                  <span className="tracklist-arrow" aria-hidden="true">
                    →
                  </span>
                </ArchiveLink>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="home-journey" aria-labelledby="journey-title">
        <div className="container">
          <div className="home-journey-header">
            <p className="section-label">How the studio builds</p>
            <h2 className="heading-xl" id="journey-title">
              Helping people become better builders, <em>because generating code is not the finish line.</em>
            </h2>
          </div>
          <ol className="home-journey-rail">
            {journeySteps.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
              </li>
            ))}
          </ol>
          <div className="home-journey-closing">
            <p>The finish line is verified deployment, with a builder who understands what was built.</p>
            <Link href="/consulting">How we work with builders <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="founder-field" aria-label="Founder note">
        <div className="container">
          <figure className="founder-quote">
            <blockquote>
              &ldquo;This work began with conversations. It is still about people, memory, visibility, and ownership.&rdquo;
            </blockquote>
            <figcaption>B Donald Harris, Founder &amp; CEO, NotableBIT</figcaption>
          </figure>
        </div>
      </section>

      <section className="entry-archive" aria-label="Where to start">
        <div className="container">
          <ol className="entry-list">
            {entryPoints.map((entry, index) => (
              <li className={`entry-item entry-item-${entry.rule}`} key={entry.title}>
                <ArchiveLink className="entry-row" item={entry}>
                  <span className="entry-label">
                    {String(index + 1).padStart(2, "0")} · {entry.label}
                  </span>
                  <span className="entry-title">{entry.title}</span>
                  <span className="entry-desc">{entry.description}</span>
                </ArchiveLink>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
