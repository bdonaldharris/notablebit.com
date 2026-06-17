export type ContentItem = {
  title: string;
  description: string;
  label?: string;
  href?: string;
};

export type PageSection = {
  eyebrow?: string;
  title: string;
  description: string;
  items?: ContentItem[];
};

export const products = [
  {
    title: "HindSite",
    status: "Alpha / Waitlist / Active Build",
    href: "/products",
    description:
      "Workflow intelligence for builders. HindSite captures development traces, reconstructs timelines, supports reflection, and helps builders turn their work into useful artifacts.",
  },
  {
    title: "BitVoices Network",
    status: "Evolving platform and media network",
    href: "https://bitvoices.network",
    description:
      "A platform and media network created to amplify Black excellence in tech and help Black builders connect, share, and be seen.",
  },
  {
    title: "NotableBIT Labs",
    status: "In Exploration",
    href: "/products",
    description:
      "Carefully scoped experiments for builder workflows, community infrastructure, and AI-era execution systems, shared publicly only when ready.",
  },
] as const;

export const services: ContentItem[] = [
  {
    title: "Product Spec & MVP Planning",
    description:
      "Turn founder intent into product briefs, user flows, feature scope, architecture notes, GitHub issue plans, and implementation-ready prompts.",
  },
  {
    title: "AI Workflow Strategy",
    description:
      "Adopt AI-assisted development with context, review loops, accountability, documentation, and human judgment built into the workflow.",
  },
  {
    title: "Fractional Technology Leadership",
    description:
      "Senior technical direction for architecture, roadmap planning, vendor/tool decisions, technical risk, and delivery planning.",
  },
  {
    title: "Custom Software Advisory",
    description:
      "Practical guidance for modernization, integrations, platform decisions, feasibility, and software execution before resources are committed.",
  },
  {
    title: "Community Platform Strategy",
    description:
      "Strategy for roles, onboarding, engagement design, moderation, governance, and content systems around community-led platforms.",
  },
];

export const mediaChannels: ContentItem[] = [
  {
    title: "BitVoices Podcast",
    description:
      "Conversations with Black technologists, founders, engineers, builders, and leaders shaping technology, AI, entrepreneurship, and community.",
    href: "/media",
  },
  {
    title: "Community Storytelling",
    description:
      "Media that amplifies builders, documents emerging ideas, and creates visibility for work that is too often overlooked.",
    href: "/media",
  },
  {
    title: "Speaking / Conversations",
    description:
      "Founder-led talks and conversations routed through B Donald Harris where the deeper personal authority context belongs.",
    href: "https://bdonaldharris.com",
  },
];

export const values: ContentItem[] = [
  {
    title: "Clarity",
    description: "Move from vague ambition to structured decisions, scoped plans, and execution-ready language.",
  },
  {
    title: "Ownership",
    description: "Visibility matters, but durable ownership is the deeper goal for builders and communities.",
  },
  {
    title: "Context",
    description: "AI workflows need memory, review, traceability, and shared understanding to remain useful.",
  },
  {
    title: "Accountability",
    description: "Technology decisions should preserve human judgment, review loops, and responsible delivery.",
  },
  {
    title: "Community",
    description: "Community is culture before it is features, and product systems should honor that reality.",
  },
  {
    title: "Practical Technology",
    description: "Build tools, platforms, and systems that help people do real work with less confusion.",
  },
];

export const inquiryCategories = [
  "Consulting / advisory",
  "Product strategy",
  "AI workflow strategy",
  "Partnership",
  "Sponsorship / media",
  "Speaking / event collaboration",
  "General inquiry",
] as const;

export const pageSections: Record<string, PageSection[]> = {
  home: [
    {
      eyebrow: "Ecosystem",
      title: "One studio. Multiple aligned vehicles.",
      description:
        "NotableBIT is the company home for products, platforms, strategic services, media, and community infrastructure.",
      items: [
        { title: products[0].title, description: products[0].description, label: products[0].status, href: products[0].href },
        { title: products[1].title, description: products[1].description, label: products[1].status, href: products[1].href },
        { title: "BitVoices Podcast", description: mediaChannels[0].description, href: "/media" },
        { title: "Strategic Technology Services", description: services[0].description, href: "/consulting" },
      ],
    },
    {
      eyebrow: "Work",
      title: "What NotableBIT does",
      description:
        "Product strategy, AI workflow thinking, senior technical guidance, and ecosystem-building work for builders and organizations.",
      items: services,
    },
  ],
  studio: [
    {
      eyebrow: "Thinking",
      title: "How We Think",
      description: "Context before automation. Strategy before code. Systems before scattered effort.",
      items: [
        { title: "Context before automation", description: "Automation only helps when the work, goals, constraints, and review loops are understood." },
        { title: "Strategy before code", description: "Product clarity and execution language come before implementation." },
        { title: "Systems before scattered effort", description: "Builders need infrastructure, not disconnected inspiration." },
      ],
    },
    {
      eyebrow: "Building",
      title: "How We Build",
      description: "Product discovery, workflow mapping, spec-driven execution, and iterative delivery.",
      items: [
        { title: "Product discovery", description: "Clarify the real audience, workflow, and decision before shaping the build." },
        { title: "Workflow mapping", description: "Model how people move from idea to execution before choosing implementation details." },
        { title: "Spec-driven execution", description: "Turn decisions into artifacts that humans and AI agents can both use responsibly." },
        { title: "Human accountability", description: "AI assistance supports the work; it does not replace review, ownership, or judgment." },
      ],
    },
  ],
  products: [
    {
      eyebrow: "Active and emerging",
      title: "Products and platforms",
      description: "A stage-accurate view of the products, platforms, and explored systems NotableBIT is building.",
      items: products.map((product) => ({
        title: product.title,
        description: product.description,
        label: product.status,
        href: product.href,
      })),
    },
  ],
  consulting: [
    {
      eyebrow: "Services",
      title: "Selective strategic guidance",
      description:
        "NotableBIT helps clients make clearer technology decisions, plan stronger products, and adopt AI-assisted workflows with review and accountability.",
      items: services,
    },
  ],
  media: [
    {
      eyebrow: "Media",
      title: "Storytelling as ecosystem infrastructure",
      description:
        "Media work documents builders, ideas, and the future of Black tech without turning NotableBIT into a podcast-only site.",
      items: mediaChannels,
    },
  ],
  about: [
    {
      eyebrow: "Company",
      title: "Origin, mission, and values",
      description:
        "NotableBIT is rooted in software engineering, leadership, community-building, media, and a belief that builders need systems.",
      items: values,
    },
  ],
  contact: [
    {
      eyebrow: "Inquiry paths",
      title: "Start with the right conversation",
      description: "NotableBIT is selective about fit and capacity, so the contact path starts with high-intent inquiry categories.",
      items: inquiryCategories.map((category) => ({
        title: category,
        description: "Use this path when the conversation fits this area of work.",
      })),
    },
  ],
};
