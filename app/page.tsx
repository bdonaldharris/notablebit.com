import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/app/_components/ui";
import { homeRoute } from "@/app/_content/site";
import { createMetadata } from "@/app/_lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "NotableBIT | Visibility, Memory, and Infrastructure for Black Builders in Tech",
  description: homeRoute.description,
  path: homeRoute.href,
});

// Waveform bar heights (0–100). Hand-tuned so it reads as voice/signal, not a
// uniform equalizer — the podcast was the first vehicle.
const SIGNAL_BARS = [
  18, 34, 26, 52, 70, 44, 88, 60, 100, 72, 54, 82, 38, 64, 92, 48, 30, 58, 76, 40, 66, 24, 50, 84, 36, 62, 28, 46,
];

type Vehicle = {
  fn: string;
  name: string;
  href: string;
  description: string;
  external?: boolean;
  first?: boolean;
};

const vehicles: Vehicle[] = [
  {
    fn: "Visibility",
    name: "BitVoices",
    href: "https://bitvoices.network",
    external: true,
    first: true,
    description: "The podcast and its network — the first vehicle, amplifying Black technologists through conversations, stories, and public signal.",
  },
  {
    fn: "Signal",
    name: "Media & Speaking",
    href: "/media",
    description: "Turns builder experience and lived conviction into public thought leadership.",
  },
  {
    fn: "Memory",
    name: "HindSite",
    href: "/products",
    description: "Helps builders preserve the context, reflection, and story behind the work.",
  },
  {
    fn: "Clarity",
    name: "Studio Advisory",
    href: "/consulting",
    description: "Moves founders and teams from scattered effort to practical, execution-minded judgment.",
  },
  {
    fn: "Infrastructure",
    name: "NotableBIT Studio",
    href: "/studio",
    description: "The founder-led home holding the products, platforms, media, and strategic systems together.",
  },
  {
    fn: "Perspective",
    name: "B Donald Harris",
    href: "https://bdonaldharris.com",
    external: true,
    description: "The operator view shaped by engineering, leadership, ministry, media, and ecosystem work.",
  },
];

const missionLines = [
  "Black technologists should not feel isolated.",
  "Their work should not disappear into silence.",
  "Black youth should see themselves building, leading, and owning technology.",
  "Visibility should lead to connection, opportunity, and ownership.",
];

// Call-and-response: what the work refuses to let happen → what it builds instead.
const outcomes = [
  { less: "Less invisible work.", more: "More documented signal." },
  { less: "Less isolation.", more: "More connection." },
  { less: "Less scattered effort.", more: "More owned infrastructure." },
  { less: "Less waiting to be discovered.", more: "More builders being seen." },
  { less: "Less distance from the field.", more: "More youth seeing themselves in it." },
  { less: "Less innovation without ownership.", more: "More wealth-building rooted in community." },
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
    label: "Listen / Watch",
    title: "BitVoices conversations",
    description: "Conversations amplifying Black technologists, founders, and builders.",
    href: "/media",
  },
  {
    label: "Build / Remember",
    title: "HindSite & product work",
    description: "Products shaped by real builder needs, memory, and reflection.",
    href: "/products",
  },
  {
    label: "Clarify / Execute",
    title: "Studio advisory",
    description: "Strategic advisory, product clarity, and AI-era execution.",
    href: "/consulting",
  },
  {
    label: "Speak / Collaborate",
    title: "Media & partnerships",
    description: "Speaking, media, and community-centered initiatives.",
    href: "/contact",
  },
  {
    label: "Connect",
    title: "Start a conversation",
    description: "For aligned consulting, products, or ecosystem work.",
    href: "/contact",
  },
];

function vehicleLink(vehicle: Vehicle | EntryPoint, className: string) {
  if ("external" in vehicle && vehicle.external) {
    return (
      <a className={className} href={vehicle.href} rel="noopener noreferrer" target="_blank">
        {"name" in vehicle ? vehicle.name : vehicle.title}
      </a>
    );
  }
  return (
    <Link className={className} href={vehicle.href}>
      {"name" in vehicle ? vehicle.name : vehicle.title}
    </Link>
  );
}

export default function Home() {
  return (
    <main className="home-main">
      {/* 1. HERO — mission first, not services first */}
      <section className="section home-hero" aria-labelledby="page-title">
        <div className="container home-hero-grid">
          <div className="home-hero-copy">
            <p className="eyebrow eyebrow-inst">Black Builder Visibility</p>
            <h1 className="display" id="page-title">
              Black technologists are building the future.
              <span className="display-accent"> NotableBIT exists to make that work visible.</span>
            </h1>
            <p className="lede">
              What began with a podcast and a mission to amplify Black technologists has grown into a Black-founded
              technology studio building media, products, platforms, and strategic systems for the AI era.
            </p>
            <div className="button-row">
              <Button href="#ecosystem">Explore the Ecosystem</Button>
              <Button href="/contact" variant="secondary">
                Start a Conversation
              </Button>
            </div>
          </div>

          {/* Signal artifact — the podcast signal as a recorded, archived object,
              not a generic SaaS chart. */}
          <figure className="signal-artifact" aria-hidden="true">
            <figcaption className="signal-head">
              <span className="signal-tag">First Vehicle</span>
              <span className="signal-track">Podcast Signal · Black Tech Voices</span>
            </figcaption>
            <div className="signal-stage">
              <div className="signal-wave">
                {SIGNAL_BARS.map((height, index) => (
                  <span key={index} className="signal-bar" style={{ height: `${height}%`, animationDelay: `${index * 70}ms` }} />
                ))}
              </div>
              <div className="signal-baseline" />
              <div className="signal-ticks">
                <span>00:00</span>
                <span className="signal-onair">● On Air</span>
                <span>∞</span>
              </div>
            </div>
            <p className="signal-flow">Conversation → Signal → Infrastructure</p>
          </figure>
        </div>
      </section>

      {/* Anchor line — the cultural throughline of the page */}
      <section className="anchor-band" aria-label="The throughline">
        <div className="container anchor-inner">
          <p className="anchor-label">The Throughline</p>
          <p className="anchor-line">
            The podcast was the first vehicle. <span className="anchor-line-warm">The mission was always bigger.</span>
          </p>
        </div>
      </section>

      {/* 2. ORIGIN — the microphone came first (liner notes) */}
      <section className="section-tight origin" aria-labelledby="origin-title">
        <div className="container origin-grid">
          <div className="origin-lead">
            <p className="eyebrow eyebrow-inst">Origin Note</p>
            <h2 className="heading-xl" id="origin-title">
              It started with a microphone.
            </h2>
            <p className="origin-kicker">A program note on where the work began — and what it was always for.</p>
          </div>
          <div className="origin-note">
            <p className="lede">
              The first vehicle was the podcast — conversations with Black technologists, builders, founders, engineers,
              and leaders whose work deserved to be seen and heard.
            </p>
            <blockquote className="origin-quote">Visibility is not vanity. Visibility is infrastructure.</blockquote>
            <ul className="liner-lines">
              <li>The podcast gave the mission a voice.</li>
              <li>The stories revealed the need for more than media.</li>
              <li>The work expanded. The burden stayed the same.</li>
            </ul>
            <p className="origin-evidence">Recorded conversations · Builder stories · Public signal</p>
          </div>
        </div>
      </section>

      {/* 3. MISSION — the original vision still leads */}
      <section className="section-tight mission" aria-labelledby="mission-title">
        <div className="container mission-grid">
          <div className="mission-statement">
            <p className="eyebrow eyebrow-inst">Mission Standard</p>
            <h2 className="heading-xl" id="mission-title">
              The original vision still leads.
            </h2>
            <p className="lede">
              NotableBIT exists to celebrate, amplify, and give visibility to Black technologists — so the people
              building the future are seen while they build it.
            </p>
          </div>
          <ul className="mission-lines">
            {missionLines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. ECOSYSTEM — one mission, multiple vehicles (lineage map) */}
      <section id="ecosystem" className="section eco-section" aria-labelledby="eco-title">
        <div className="container">
          <div className="eco-core">
            <p className="eyebrow eyebrow-inst">Ecosystem Map</p>
            <h2 className="heading-xl" id="eco-title">
              One mission. Multiple vehicles.
            </h2>
            <p className="lede">
              Everything NotableBIT builds traces back to the same root: make Black technologists visible, supported,
              and positioned to own what they create.
            </p>
          </div>

          <ol className="eco-map">
            <li className="eco-node eco-node-origin">
              <span className="eco-fn">Root</span>
              <div className="eco-vehicle">
                <h3 className="heading-md">Celebrate, amplify, and make Black technologists visible.</h3>
                <p className="body-copy">The constant thread. Every vehicle below is one way of carrying it.</p>
              </div>
            </li>
            {vehicles.map((vehicle) => (
              <li key={vehicle.name} className={`eco-node${vehicle.first ? " eco-node-first" : ""}`}>
                <span className="eco-fn">{vehicle.fn}</span>
                <div className="eco-vehicle">
                  <h3 className="heading-md">
                    {vehicleLink(vehicle, "eco-vehicle-link")}
                    {vehicle.first ? <span className="eco-first-mark">First Vehicle</span> : null}
                  </h3>
                  <p className="body-copy">{vehicle.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 5. WHAT THIS PRODUCES — call-and-response outcomes */}
      <section className="section-tight outcomes" aria-labelledby="outcomes-title">
        <div className="container">
          <p className="eyebrow eyebrow-inst">Outcomes of the Work</p>
          <h2 className="heading-xl outcomes-title" id="outcomes-title">
            What the work is building toward.
          </h2>
          <dl className="outcome-list">
            {outcomes.map((outcome) => (
              <div key={outcome.more} className="outcome-pair">
                <dt className="outcome-less">{outcome.less}</dt>
                <dd className="outcome-more">{outcome.more}</dd>
              </div>
            ))}
          </dl>
          <p className="transform-row">
            A conversation becomes signal. A workflow becomes memory. A builder becomes visible. Visibility becomes
            opportunity.
          </p>
        </div>
      </section>

      {/* 6. ENTRY POINTS — doors into the ecosystem */}
      <section className="section-tight entry" aria-labelledby="entry-title">
        <div className="container">
          <p className="eyebrow eyebrow-inst">Entry Points</p>
          <h2 className="heading-xl" id="entry-title">
            Where to enter the work.
          </h2>
          <div className="entry-list">
            {entryPoints.map((entry, index) => (
              <article key={entry.title} className="entry-row">
                <span className="entry-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="entry-label">{entry.label}</span>
                <div className="entry-body">
                  <h3 className="heading-md">{vehicleLink(entry, "entry-link")}</h3>
                  <p className="body-copy">{entry.description}</p>
                </div>
                <span className="entry-arrow" aria-hidden="true">
                  →
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's note — authorship and warmth, not a bio */}
      <section className="section-tight founder-note-section" aria-label="Founder's note">
        <div className="container">
          <figure className="founder-note">
            <p className="eyebrow eyebrow-inst">Founder&rsquo;s Note</p>
            <blockquote className="founder-note-quote">
              This work began with conversations. It is still about people, memory, visibility, and ownership.
            </blockquote>
            <figcaption className="founder-note-sign">B Donald Harris — Founder, NotableBIT</figcaption>
          </figure>
        </div>
      </section>

      {/* 7. CLOSING — invitation, not sales banner */}
      <section className="section-tight closing" aria-labelledby="closing-title">
        <div className="container">
          <div className="closing-band">
            <p className="eyebrow eyebrow-inst closing-eyebrow">Studio Invitation</p>
            <h2 className="heading-lg" id="closing-title">
              The mission has more than one vehicle now.
            </h2>
            <p className="lede">
              Whether through a conversation, a product, a strategy session, or a platform, NotableBIT is still building
              toward the same future: Black technologists seen, supported, connected, and positioned to create lasting
              value.
            </p>
            <div className="button-row">
              <Button href="/contact">Start a Conversation</Button>
              <Button href="/products" variant="secondary">
                Explore Products
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
