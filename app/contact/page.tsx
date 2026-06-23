import type { Metadata } from "next";
import { Card } from "@/app/_components/ui";
import { routeByHref } from "@/app/_content/site";
import { createMetadata } from "@/app/_lib/metadata";
import { ContactForm } from "./contact-form";

const route = routeByHref.get("/contact")!;

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description: route.description,
  path: route.href,
});

export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-hero" aria-labelledby="contact-title">
        <div className="container contact-hero-inner">
          <h1 className="display contact-hero-title" id="contact-title">
            Start a conversation.
          </h1>
          <p className="lede contact-hero-copy">
            Whether you&apos;re exploring a product, evaluating an AI workflow, planning a technical initiative, or looking for strategic guidance,
            start with context. Every inquiry is reviewed personally.
          </p>
        </div>
      </section>

      <section className="contact-form-section" aria-labelledby="inquiry-form-title">
        <div className="container">
          <Card className="contact-form-panel">
            <div className="contact-form-intro">
              <h2 className="heading-lg contact-form-title" id="inquiry-form-title">
                Inquiry form
              </h2>
              <p className="body-copy contact-form-email-fallback">
                Prefer email? Reach the studio directly at{" "}
                <a className="inline-link" href="mailto:hello@notablebit.com">
                  hello@notablebit.com
                </a>
                .
              </p>
            </div>

            <ContactForm />
          </Card>
        </div>
      </section>
    </main>
  );
}
