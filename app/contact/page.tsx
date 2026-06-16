import type { Metadata } from "next";
import { FoundationPage } from "@/app/_components/foundation-page";
import { routeByHref } from "@/app/_content/site";
import { createMetadata } from "@/app/_lib/metadata";

const route = routeByHref.get("/contact")!;

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description: route.description,
  path: route.href,
});

export default function ContactPage() {
  return <FoundationPage route={route} />;
}
