import type { Metadata } from "next";
import { PageHero } from "@/app/_components/page-sections";
import { Badge, Card, SectionHeading } from "@/app/_components/ui";
import { inquiryCategories } from "@/app/_content/ecosystem";
import { routeByHref } from "@/app/_content/site";
import { createMetadata } from "@/app/_lib/metadata";

const route = routeByHref.get("/contact")!;

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description: route.description,
  path: route.href,
});

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow={route.eyebrow}
        title={route.title}
        description={route.description}
        primaryHref="#inquiry-form"
        primaryLabel="Send Inquiry"
        secondaryHref="/consulting"
        secondaryLabel="View Consulting"
      />

      <section className="section-tight" aria-label="Inquiry categories">
        <div className="container">
          <SectionHeading
            eyebrow="Fit and capacity"
            title="Choose the conversation that matches the work."
            description="NotableBIT is selective about fit and capacity, so the strongest inquiries start with a clear category, context, and desired next step."
          />
          <div className="grid grid-3" style={{ marginTop: 28 }}>
            {inquiryCategories.map((category) => (
              <Card key={category}>
                <div className="card-stack">
                  <Badge tone="blue">Inquiry</Badge>
                  <h3 className="heading-md">{category}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight" aria-labelledby="inquiry-form-title">
        <div className="container contact-grid">
          <div>
            <p className="eyebrow">Inquiry form</p>
            <h2 className="heading-xl" id="inquiry-form-title">
              Tell NotableBIT what you are trying to build, clarify, or explore.
            </h2>
            <p className="lede">
              Share enough context to understand the fit: the work, the organization, the timeline, and what kind of decision or collaboration is
              needed.
            </p>
            <p className="body-copy integration-note">
              Submission handling is pending an approved backend or form service. The UI is ready for integration.
            </p>
          </div>

          <Card>
            <form className="form-grid" id="inquiry-form" aria-describedby="form-status">
              <div className="field">
                <label className="label" htmlFor="name">
                  Name *
                </label>
                <input className="input" id="name" name="name" required type="text" autoComplete="name" />
              </div>

              <div className="field">
                <label className="label" htmlFor="email">
                  Email *
                </label>
                <input className="input" id="email" name="email" required type="email" autoComplete="email" />
              </div>

              <div className="field">
                <label className="label" htmlFor="organization">
                  Organization
                </label>
                <input className="input" id="organization" name="organization" type="text" autoComplete="organization" />
              </div>

              <div className="field">
                <label className="label" htmlFor="inquiry-type">
                  Inquiry type *
                </label>
                <select className="input" id="inquiry-type" name="inquiryType" required defaultValue="">
                  <option value="" disabled>
                    Select a category
                  </option>
                  {inquiryCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div className="field">
                <label className="label" htmlFor="budget">
                  Budget range
                </label>
                <input className="input" id="budget" name="budget" type="text" />
              </div>

              <div className="field">
                <label className="label" htmlFor="timeline">
                  Timeline
                </label>
                <input className="input" id="timeline" name="timeline" type="text" />
              </div>

              <div className="field field-full">
                <label className="label" htmlFor="message">
                  Message *
                </label>
                <textarea className="input" id="message" name="message" required />
              </div>

              <div className="field-full">
                <p className="body-copy" id="form-status">
                  Required fields are marked with an asterisk. Submission will be enabled when a form destination is approved.
                </p>
                <button className="button button-primary button-disabled" type="button" aria-disabled="true">
                  Send Inquiry
                </button>
              </div>
            </form>
          </Card>
        </div>
      </section>
    </main>
  );
}
