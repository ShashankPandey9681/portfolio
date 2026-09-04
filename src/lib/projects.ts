import { projects } from '../data/site';

type Project = (typeof projects)[number];

/** Where a project card should link to, or undefined if it has no destination. */
export function projectHref(p: Project): string | undefined {
  if (p.type === 'case-study' && p.caseStudySlug) return `/case-studies/${p.caseStudySlug}`;
  if (p.type === 'personal' && p.link) return p.link;
  if (p.type === 'external' && p.link) return p.link;
  return undefined;
}

/** Whether that destination leaves the site, so it needs target/rel. */
export function isExternalProject(p: Project): boolean {
  return p.type === 'personal' || (p.type === 'external' && !!p.link);
}
