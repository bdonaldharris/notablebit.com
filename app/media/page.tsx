import type { Metadata } from "next";
import { PageHero } from "@/app/_components/page-sections";
import { Badge, Card, CtaSection, SectionHeading } from "@/app/_components/ui";
import { mediaChannels } from "@/app/_content/ecosystem";
import { routeByHref } from "@/app/_content/site";
import { createMetadata } from "@/app/_lib/metadata";

const route = routeByHref.get("/media")!;

export const metadata: Metadata = createMetadata({
  title: "Media",
  description: route.description,
  path: route.href,
});

export default function MediaPage() {
  const [podcast, storytelling, speaking] = mediaChannels;

  return (
    <main>
      <PageHero
        eyebrow={route.eyebrow}
        title={route.title}
        description={route.description}
        primaryHref="https://bitvoices.network"
        primaryLabel="Explore BIT Voices"
        secondaryHref="https://bdonaldharris.com"
        secondaryLabel="Speaking Context"
      />

      <section className="section-tight" aria-labelledby="podcast-title">
        <div className="container media-feature">
          <div>
            <p className="eyebrow">Podcast</p>
            <h2 className="heading-xl" id="podcast-title">
              {podcast.title}
            </h2>
            <p className="lede">{podcast.description}</p>
            <p className="body-copy" style={{ marginTop: 18 }}>
              Formerly known as The Notable & Black in Tech Podcast, BIT Voices now sits inside a broader platform and media network for Black
              tech visibility, connection, and ownership.
            </p>
          </div>
          <Card className="media-card">
            <div className="card-stack">
              <Badge>Editorial</Badge>
              <h3 className="heading-md">Conversations with builders shaping what comes next.</h3>
              <p className="body-copy">
                The podcast supports the company ecosystem by documenting builders, ideas, leadership, entrepreneurship, AI, and community.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section className="section-tight" aria-label="Media paths">
        <div className="container">
          <SectionHeading
            eyebrow="Story infrastructure"
            title="Media that serves the ecosystem."
            description="NotableBIT treats media as a way to document work, create context, and amplify builders, not as a standalone content brand disconnected from products and strategy."
          />
          <div className="grid grid-3" style={{ marginTop: 28 }}>
            {[podcast, storytelling, speaking].map((item) => (
              <Card key={item.title} interactive={Boolean(item.href)}>
                <div className="card-stack">
                  <Badge tone="blue">Media Path</Badge>
                  <h3 className="heading-md">{item.title}</h3>
                  <p className="body-copy">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow="Conversations"
        title="Have a builder story, sponsor idea, or ecosystem conversation?"
        description="Route podcast, sponsorship, speaking, and community storytelling inquiries through a clear NotableBIT conversation."
        primaryHref="/contact"
        primaryLabel="Start a Media Conversation"
        secondaryHref="https://bitvoices.network"
        secondaryLabel="Visit BitVoices"
      />
    </main>
  );
}
