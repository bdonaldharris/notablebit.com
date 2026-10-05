import type { Metadata } from "next";
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
    href: "https://hindsite.pro",
    external: true,
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
        {item.title}
      </a>
    );
  }

  return (
    <Link className={className} href={item.href}>
      {item.title}
    </Link>
  );
}

export default function Home() {
  return (
    <main className="home-main">
      <section className="section home-hero" aria-labelledby="page-title">
        <Image
          aria-hidden="true"
          alt=""
          className="home-hero-atmosphere"
          fill
          preload
          sizes="100vw"
          src={heroAtmosphereImage}
        />
        <div className="container home-hero-grid">
          <div className="home-hero-copy">
            <p className="eyebrow">Black-founded technology studio · Tulsa, Oklahoma</p>
            <h1 className="display" id="page-title">
              <span className="display-declaration">Black technologists are building the future.</span>
            </h1>
            <p className="lede">
              What began as a podcast to amplify Black technologists has grown into a Black-founded studio building
              media, products, platforms, and strategic systems for the AI era.
            </p>
            <div className="button-row">
              <Button href="#ecosystem">Explore the ecosystem</Button>
              <Link className="hero-text-link" href="/media">Listen to BIT Voices <span aria-hidden="true">→</span></Link>
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
              These are not separate ventures. Each one answers a real need builders have, and all of them come from the same mission.
            </p>
          </div>
          <ol className="tracklist">
            {missionOutputs.map((output, index) => (
              <li className="tracklist-row" key={output.title}>
                <span className="tracklist-index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{artifactLink(output, "tracklist-link")}</h3>
                <p>{output.description}</p>
                <span className={`tracklist-role tracklist-role-${output.roleTone}`}>{output.role}</span>
                <span aria-hidden="true">→</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-tight home-journey" aria-labelledby="journey-title">
        <div className="container">
          <h2 className="heading-xl" id="journey-title">Helping people become better builders, <em>because generating code is not the finish line.</em></h2>
          <ol className="home-journey-rail">
            {["Idea", "Problem excavation", "Product definition", "Requirements", "Design", "Architecture", "Implementation", "Validation", "Deployment"].map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {step}
              </li>
            ))}
          </ol>
          <div className="home-journey-closing">
            <p>The finish line is verified deployment, with a builder who understands what was built.</p>
            <Link href="/consulting">How we work with builders <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="section-tight founder-field" aria-label="Founder note">
        <div className="container">
          <figure className="founder-note-card">
            <blockquote>
              This work began with conversations. It is still about people, memory, visibility, and ownership.
            </blockquote>
            <figcaption>B Donald Harris, Founder &amp; CEO, NotableBIT</figcaption>
          </figure>
        </div>
      </section>

      <section className="section-tight entry-archive" aria-labelledby="entry-title">
        <div className="container">
          <ol className="entry-list">
            {entryPoints.map((entry, index) => {
              const rowContent = (
                <>
                  <span className="entry-index" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")} ·
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
