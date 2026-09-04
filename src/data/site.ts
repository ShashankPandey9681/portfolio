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
  email: 'me@spandey.com',
  // Social links — leave a value empty ('') to hide that link.
  socials: {
    linkedin: 'https://www.linkedin.com/in/shashankpandey16/',
    x: '',
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
  { src: '/images/shashank.jpg', alt: 'Shashank Pandey' },
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
    type: 'case-study',
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
    title: 'Lead Product Manager',
    org: 'Progress ShareFile',
    description:
      'Leading the Work Management charter — shifting the product from document management to completing the workflows that surround a document: requests, reviews, approvals, and signatures.',
  },
  {
    period: '2022 — 2023',
    title: 'Senior Product Manager, New Business',
    org: 'Loconav',
    description:
      'Built fleet intelligence for small businesses — turning raw telematics data into recurring patterns, financial impact, and recommended actions rather than another dashboard.',
  },
  {
    period: '2021',
    title: 'Product Manager',
    org: 'Trell',
    description:
      'Worked on short-video commerce — where purchase intent is created through discovery rather than captured through search.',
  },
  // TODO: add roles before 2021 (incl. the 2018 vernacular onboarding work).
];

// ── Skills & agents ──────────────────────────────────────────────────────────
// Skills, agents, and command workflows published on GitHub. Add an entry here
// and it appears on /skills automatically. Only link to PUBLIC repos — private
// ones 404 for visitors.
export type SkillKind = 'skill' | 'agent' | 'workflow';

export type SkillEntry = {
  name: string;
  kind: SkillKind;
  summary: string;
  repo: string;
  tags: string[];
  // Attribution, e.g. when the work builds on someone else's library.
  note?: string;
};

export const skills: SkillEntry[] = [
  {
    name: 'Product Manager Skills',
    kind: 'skill',
    summary:
      'A library of battle-tested PM frameworks — discovery, prioritisation, pricing, competitive intel — written so an AI agent and the PM using it share the same foundation. 77 skills and 7 command workflows.',
    repo: 'https://github.com/ShashankPandey9681/Skill-ProductManagement',
    tags: ['Claude Code', 'Codex', 'Cursor', 'PM frameworks'],
    note: 'Forked from deanpeters/Product-Manager-Skills',
  },
];
