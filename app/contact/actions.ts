'use server';

import { inquiryCategories } from "@/app/_content/ecosystem";

type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

const CONTACT_SUCCESS_MESSAGE = "Thanks — your inquiry has been sent. I’ll review it and follow up if there’s a fit.";
const CONTACT_ERROR_MESSAGE = "Something went wrong sending the inquiry. Please email hello@notablebit.com directly.";
const CONTACT_VALIDATION_ERROR_MESSAGE = "Please complete all required fields with a valid email address.";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RESEND_API_URL = "https://api.resend.com/emails";

function getTrimmedString(formData: FormData, fieldName: string): string {
  const value = formData.get(fieldName);
  return typeof value === "string" ? value.trim() : "";
}

function optionalValue(value: string): string {
  return value.length > 0 ? value : "Not provided";
}

export async function submitContactInquiry(_previousState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  const name = getTrimmedString(formData, "name");
  const email = getTrimmedString(formData, "email").toLowerCase();
  const organization = getTrimmedString(formData, "organization");
  const inquiryType = getTrimmedString(formData, "inquiryType");
  const budget = getTrimmedString(formData, "budget");
  const timeline = getTrimmedString(formData, "timeline");
  const message = getTrimmedString(formData, "message");
  const sourcePage = getTrimmedString(formData, "sourcePage");

  const requiredFieldsAreValid = name.length > 0 && inquiryType.length > 0 && message.length > 0;
  const hasValidEmail = EMAIL_PATTERN.test(email);
  const inquiryTypeIsKnown = inquiryCategories.includes(inquiryType as (typeof inquiryCategories)[number]);

  if (!requiredFieldsAreValid || !hasValidEmail || !inquiryTypeIsKnown) {
    return {
      status: "error",
      message: CONTACT_VALIDATION_ERROR_MESSAGE,
    };
  }

  const resendApiKey = process.env.RESEND_API_KEY?.trim();
  const contactToEmail = process.env.CONTACT_TO_EMAIL?.trim() || "hello@notablebit.com";
  const contactFromEmail = process.env.CONTACT_FROM_EMAIL?.trim() || "NotableBIT <hello@notablebit.com>";

  if (!resendApiKey) {
    return {
      status: "error",
      message: CONTACT_ERROR_MESSAGE,
    };
  }

  const subject = `New NotableBIT inquiry: ${inquiryType} from ${name}`;
  const text = [
    "New contact inquiry submitted from notablebit.com.",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Organization: ${optionalValue(organization)}`,
    `Inquiry Type: ${inquiryType}`,
    `Budget Range: ${optionalValue(budget)}`,
    `Timeline: ${optionalValue(timeline)}`,
    `Source: ${optionalValue(sourcePage)}`,
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    const resendResponse = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: contactFromEmail,
        to: [contactToEmail],
        subject,
        text,
        reply_to: email,
      }),
      cache: "no-store",
    });

    if (!resendResponse.ok) {
      return {
        status: "error",
        message: CONTACT_ERROR_MESSAGE,
      };
    }

    return {
      status: "success",
      message: CONTACT_SUCCESS_MESSAGE,
    };
  } catch {
    return {
      status: "error",
      message: CONTACT_ERROR_MESSAGE,
    };
  }
}
