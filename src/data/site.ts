// ─────────────────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH for site identity, projects, skills, and work history.
// Edit values here; every page reads from this file. See ROADMAP.md.
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  name: 'Shashank Pandey',
  role: 'New Dad | Tinkerer | Product Manager',
  // One-line intro used in the hero and meta description.
  tagline:
    'Sports person turned product manager writing about AI, innovation, productivity, and the human side of building things.',
  // A short bio paragraph for the home hero (mention your trajectory —
  // where you've worked, what you focus on). Keep it 2–4 sentences.
  intro:
    "I'm a product manager focused on turning fuzzy problems into shipped products. I've worked across [your companies / domains] — replace this with your real trajectory. Alongside the work, I write about AI, product, and the human side of building things.",
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
  { src: '/images/home-2.svg', alt: 'Replace with your second image' },
  { src: '/images/home-3.svg', alt: 'Replace with your third image' },
  { src: '/images/home-4.svg', alt: 'Replace with your fourth image' },
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
export type Project = {
  title: string;
  period: string;
  summary: string;
  tags: string[];
  link?: string; // optional external URL
};

export const projects: Project[] = [
  {
    title: 'Example Product — 0 to 1 launch',
    period: '2024 — 2025',
    summary:
      'Led discovery, defined the roadmap, and shipped the first version to 10k users. Replace this with a real project: what it was, your role, and the outcome.',
    tags: ['Product strategy', 'Discovery', '0→1'],
    link: '',
  },
  {
    title: 'Internal AI tooling initiative',
    period: '2023 — 2024',
    summary:
      'Introduced an AI-assisted workflow that cut a manual process from hours to minutes. Describe the problem, what you built, and the measurable result.',
    tags: ['AI', 'Process', 'Automation'],
    link: '',
  },
  {
    title: 'Growth experiment framework',
    period: '2022 — 2023',
    summary:
      'Stood up a lightweight experimentation cadence for the team. Swap in your own project — keep the outcome specific and quantified where you can.',
    tags: ['Experimentation', 'Growth', 'Analytics'],
    link: '',
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
    org: 'Company',
    description:
      'One or two lines on scope and impact. Replace with your real role.',
  },
  {
    period: '2021 — 2024',
    title: 'Product Manager',
    org: 'Company',
    description: 'What you owned and what changed because of it.',
  },
  {
    period: '2018 — 2021',
    title: 'Associate Product Manager',
    org: 'Company',
    description: 'Where you started and the foundation you built.',
  },
];

// ── Skills ───────────────────────────────────────────────────────────────────
export type SkillGroup = { area: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    area: 'Product',
    items: ['Roadmapping', 'Discovery & research', 'Prioritization', 'PRDs & specs', 'Go-to-market'],
  },
  {
    area: 'AI & Data',
    items: ['LLM-assisted workflows', 'Prompt design', 'SQL', 'Analytics', 'Experimentation'],
  },
  {
    area: 'Craft',
    items: ['Stakeholder alignment', 'Writing', 'Facilitation', 'Systems thinking'],
  },
  {
    area: 'Tools',
    items: ['Figma', 'Linear / Jira', 'Amplitude', 'Notion', 'Cursor'],
  },
];
