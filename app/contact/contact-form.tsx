"use client";

import { useActionState, useEffect, useRef } from "react";
import { inquiryCategories } from "@/app/_content/ecosystem";
import { submitContactInquiry } from "./actions";

type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

const INITIAL_STATE: ContactFormState = {
  status: "idle",
  message: "Required fields are marked with an asterisk.",
};

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, pending] = useActionState(submitContactInquiry, INITIAL_STATE);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  const statusMessage = pending ? "Sending your inquiry..." : state.message;
  const statusState = pending ? "pending" : state.status;

  return (
    <form ref={formRef} className="form-grid" id="inquiry-form" aria-describedby="form-status" action={formAction}>
      <input type="hidden" name="sourcePage" value="/contact" />

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
          What are you hoping to build, clarify, or explore? *
        </label>
        <textarea className="input" id="message" name="message" required />
      </div>

      <div className="field-full contact-form-submit">
        <p className="body-copy contact-form-status" id="form-status" aria-live="polite" data-state={statusState}>
          {statusMessage}
        </p>
        <button className="button button-primary" type="submit" disabled={pending} aria-disabled={pending}>
          {pending ? "Sending..." : "Send Inquiry"}
        </button>
      </div>
    </form>
  );
}
