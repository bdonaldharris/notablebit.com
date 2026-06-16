import type { MetadataRoute } from "next";
import { homeRoute, routes, site } from "@/app/_content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const allRoutes = [homeRoute, ...routes];

  return allRoutes.map((route) => ({
    url: new URL(route.href, site.url).toString(),
    lastModified: now,
    changeFrequency: route.href === "/" ? "monthly" : "yearly",
    priority: route.href === "/" ? 1 : 0.8,
  }));
}
