import type { Metadata } from "next";
import { FoundationPage } from "@/app/_components/foundation-page";
import { routeByHref } from "@/app/_content/site";
import { createMetadata } from "@/app/_lib/metadata";

const route = routeByHref.get("/media")!;

export const metadata: Metadata = createMetadata({
  title: "Media",
  description: route.description,
  path: route.href,
});

export default function MediaPage() {
  return <FoundationPage route={route} />;
}
