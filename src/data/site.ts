// ─────────────────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH for site identity, projects, skills, and work history.
// Edit values here; every page reads from this file. See ROADMAP.md.
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  name: 'Shashank Pandey',
  role: 'New Dad | Tinkerer',
  // One-line intro used in the hero and meta description.
  tagline:
    'Sports person turned product manager writing about AI, innovation, productivity, and the human side of building things.',
  // A short bio paragraph for the home hero (mention your trajectory —
  // where you've worked, what you focus on). Keep it 2–4 sentences.
  intro:
    "Product guy by day. Curious about everything by default. I like turning messy problems into simple products, shipping things people actually love",
  email: 'shashank@spandey.com',
  // Social links — leave a value empty ('') to hide that link.
  socials: {
    linkedin: 'https://www.linkedin.com/in/shashankpandey16/',
    x: 'https://x.com/your-handle',
    github: 'https://github.com/ShashankPandey9681',
  },
  // Your Formspree form ID (see DEPLOY.md → Contact form). e.g. 'xmyzabcd'
  formspreeId: 'YOUR_FORMSPREE_ID',
};

// ── Home carousel images ─────────────────────────────────────────────────────
// Drop your image files in `public/images/`, then list them here (3–4 works best).
// `src` is the path under public/ ; `alt` describes the image for accessibility.
// Replace the placeholders below with your own (jpg / png / webp all fine).
export const homeImages: { src: string; alt: string }[] = [
  { src: '/images/home-1.svg', alt: 'Replace with your first image' },
];

// Top navigation.
export const nav: { label: string; href: string }[] = [
  { label: 'Projects', href: '/projects' },
  { label: 'Skills', href: '/skills' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

// ── Projects ────────────────────────────────────────────────────────────────
export type ProjectType = 'case-study' | 'personal' | 'external';

export type Project = {
  title: string;
  period: string;
  summary: string;
  tags: string[];
  type: ProjectType;
  link?: string;        // GitHub URL for personal, external URL for external
  caseStudySlug?: string; // slug for case study pages (e.g. 'vernacular-onboarding')
};

export const projects: Project[] = [
  {
    title: 'Personal cook bot — what should we cook next?',
    period: '2026',
    summary:
      'A 5 AM Telegram message that tells our cook what to make today. Built with n8n and a Google Sheet, it reads inventory, past meals, and preferences — because "what should we cook?" is a decision problem, not an information problem.',
    tags: ['Side project', 'AI', 'n8n', 'Automation'],
    type: 'personal',
    caseStudySlug: 'personal-cook-bot',
  },
  {
    title: 'Work management — when a document becomes a workflow',
    period: '2024 — Present',
    summary:
      'Shifting from document management to work management at Progress ShareFile. The real work isn\'t managing the file — it\'s completing the workflow around it. Designing for outcomes, not objects.',
    tags: ['Product strategy', 'Enterprise', 'Workflow design', 'Systems thinking'],
    type: 'case-study',
    caseStudySlug: 'work-management',
  },
  {
    title: 'Short video commerce — when discovery becomes the shopping experience',
    period: '2021',
    summary:
      'Explored how short-form video changes where purchase intent comes from. When users don\'t arrive with a known need, the product must create demand through discovery — not just capture it.',
    tags: ['Product strategy', 'Commerce', 'Discovery', 'Platform thinking'],
    type: 'case-study',
    caseStudySlug: 'short-video-commerce',
  },
  {
    title: 'Fleet pattern identification — how small businesses lose millions',
    period: '2022 — 2023',
    summary:
      'Rethought fleet analytics from dashboards to decision-support. Instead of showing operators more data, the product finds expensive patterns hidden in their data and connects them to financial consequences.',
    tags: ['Product strategy', 'Data products', 'AI', 'SMB'],
    type: 'case-study',
    caseStudySlug: 'fleet-pattern-identification',
  },
  {
    title: 'Vernacular onboarding — opportunity or SUS?',
    period: '2018',
    summary:
      'Challenged the intuitive assumption that translating onboarding into regional languages would fix drop-off. Reframed it as a comprehension problem — proving that translation doesn\'t automatically equal comprehension.',
    tags: ['Product discovery', 'Opportunity assessment', 'Onboarding', 'Localization'],
    type: 'case-study',
    caseStudySlug: 'vernacular-onboarding',
  },
  {
    title: 'AI-powered personal site',
    period: '2026',
    summary:
      'Built this site from scratch using Astro, GitHub Copilot, and curiosity. A weekend project that became a writing habit and a playground for experimenting with AI-assisted development.',
    tags: ['Side project', 'AI', 'Astro', 'Web dev'],
    type: 'personal',
    link: 'https://github.com/ShashankPandey9681/portfolio',
  },
  {
    title: 'Product analytics revamp',
    period: '2024 — 2025',
    summary:
      'Redesigned the analytics pipeline to surface actionable insights instead of vanity metrics. Reduced time-to-insight from days to minutes and helped the team run 3x more experiments per quarter.',
    tags: ['Product strategy', 'Analytics', 'Experimentation'],
    type: 'external',
  },
  {
    title: 'Customer onboarding reimagined',
    period: '2023 — 2024',
    summary:
      'Led a cross-functional initiative to reduce onboarding drop-off. Ran discovery with churned users, shipped a progressive walkthrough, and improved day-7 activation by 40%.',
    tags: ['0→1', 'Discovery', 'Growth'],
    type: 'external',
  },
  {
    title: 'Internal AI automation toolkit',
    period: '2023',
    summary:
      'Introduced LLM-based workflows for repetitive ops tasks — ticket classification, release notes generation, and support summarization. Saved the team ~15 hours per week.',
    tags: ['AI', 'Automation', 'Process'],
    type: 'external',
  },
];

// ── Work history (also used on About / Resume preview) ───────────────────────
export type Role = {
  period: string;
  title: string;
  org: string;
  description: string;
};

export const work: Role[] = [
  {
    period: '2024 — Present',
    title: 'Senior Product Manager',
    org: 'Tech Company',
    description:
      'Owning product strategy for the platform team. Leading AI integration, experimentation infrastructure, and developer experience initiatives.',
  },
  {
    period: '2021 — 2024',
    title: 'Product Manager',
    org: 'Growth Stage Startup',
    description: 'Drove onboarding and activation metrics. Shipped analytics revamp and ran 100+ growth experiments across the funnel.',
  },
  {
    period: '2018 — 2021',
    title: 'Associate Product Manager',
    org: 'Enterprise SaaS',
    description: 'Cut teeth on customer discovery, sprint planning, and stakeholder management. Shipped first feature solo within 3 months.',
  },
];

// ── Skills ───────────────────────────────────────────────────────────────────
export type SkillGroup = { area: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    area: 'Product',
    items: ['Roadmapping & prioritization', 'Discovery & user research', 'PRDs & specs', 'Go-to-market strategy', 'A/B testing & experimentation'],
  },
  {
    area: 'AI & Data',
    items: ['LLM-assisted workflows', 'Prompt engineering', 'SQL & data pipelines', 'Product analytics', 'AI tool prototyping'],
  },
  {
    area: 'Craft',
    items: ['Stakeholder alignment', 'Writing & storytelling', 'Systems thinking', 'Team leadership', 'Cross-functional collaboration'],
  },
  {
    area: 'Tools',
    items: ['Figma', 'Jira / Linear', 'Amplitude / Mixpanel', 'Notion', 'GitHub Copilot / Cursor'],
  },
];
