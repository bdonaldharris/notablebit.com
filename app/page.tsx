import type { Metadata } from "next";
import { FoundationPage } from "@/app/_components/foundation-page";
import { homeRoute } from "@/app/_content/site";
import { createMetadata } from "@/app/_lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Founder-Led Technology Studio",
  description: homeRoute.description,
  path: homeRoute.href,
});

export default function Home() {
  return <FoundationPage route={homeRoute} />;
}
