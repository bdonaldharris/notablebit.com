export type SiteRoute = {
  href: string;
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  sections: string[];
  primaryCta: string;
};

export const site = {
  name: "NotableBIT",
  url: "https://notablebit.com",
  description:
    "A founder-led technology studio building products, platforms, media, and strategic systems for the AI era.",
  sourceArtifacts: [
    "docs/notablebit-com-redesign-plan.md",
    "docs/project brief.zip",
    "docs/stitch_notablebit_studio_ecosystem.zip",
  ],
};

export const routes: SiteRoute[] = [
  {
    href: "/studio",
    label: "Studio",
    eyebrow: "Studio model",
    title: "A studio for practical technology, product clarity, and builder infrastructure.",
    description:
      "How NotableBIT thinks, builds, focuses, and operates across internal products, advisory work, partnerships, and media/community initiatives.",
    sections: ["How We Think", "How We Build", "Where We Focus", "Studio Model", "CTA"],
    primaryCta: "Work with the Studio",
  },
  {
    href: "/products",
    label: "Products",
    eyebrow: "Products and platforms",
    title: "Products and platforms built from real builder workflows.",
    description:
      "The NotableBIT-built ecosystem includes HindSite, BitVoices Network, and carefully framed labs work that supports builders and AI-era workflows.",
    sections: ["HindSite", "BitVoices Network", "In Exploration", "CTA"],
    primaryCta: "Explore Products",
  },
  {
    href: "/consulting",
    label: "Consulting",
    eyebrow: "Strategic services",
    title: "Strategic technology guidance for builders, founders, and organizations.",
    description:
      "Selective product strategy, AI workflow guidance, fractional technology leadership, and custom software advisory for teams that need clarity before execution.",
    sections: [
      "Product Spec & MVP Planning",
      "AI Workflow Strategy",
      "Fractional Technology Leadership",
      "Custom Software Advisory",
      "Community Platform Strategy",
    ],
    primaryCta: "Start a Consulting Conversation",
  },
  {
    href: "/media",
    label: "Media",
    eyebrow: "Media and community",
    title: "Media that documents builders, ideas, and the future of Black tech.",
    description:
      "BIT Voices, community storytelling, and conversations that amplify Black technologists, founders, engineers, builders, and leaders.",
    sections: ["BIT Voices Podcast", "Community Storytelling", "Speaking / Conversations"],
    primaryCta: "Explore BIT Voices",
  },
  {
    href: "/about",
    label: "About",
    eyebrow: "Origin and mission",
    title: "Building technology with clarity, context, and ownership in mind.",
    description:
      "The origin, mission, current focus, founder-led direction, and values behind NotableBIT as a company and studio.",
    sections: ["Origin", "Mission", "Current Focus", "Founder", "Values"],
    primaryCta: "Meet B Donald Harris",
  },
  {
    href: "/contact",
    label: "Contact",
    eyebrow: "Inquiries",
    title: "Start a conversation with NotableBIT.",
    description:
      "A clear inquiry path for consulting, product strategy, AI workflow strategy, partnerships, sponsorships, speaking, and general collaboration.",
    sections: ["Inquiry Categories", "Contact Form", "Fit and Capacity"],
    primaryCta: "Send Inquiry",
  },
];

export const homeRoute: SiteRoute = {
  href: "/",
  label: "Home",
  eyebrow: "Founder-led technology studio",
  title: "Building products, platforms, and systems for the AI era.",
  description:
    "NotableBIT is a founder-led technology studio building products, platforms, media, and strategic systems that help builders and organizations move from ideas to execution.",
  sections: [
    "Hero",
    "Ecosystem Overview",
    "What We Do",
    "Featured Product: HindSite",
    "Consulting / Work With Us",
    "Media & Community",
    "Founder-Led Studio",
    "Final CTA",
  ],
  primaryCta: "Work With NotableBIT",
};

export const routeByHref = new Map(routes.map((route) => [route.href, route]));
