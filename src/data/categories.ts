// Display labels + functional colors for each blog category.
// The slug must match the values in src/content/config.ts (CATEGORIES).
export type CategoryMeta = { slug: string; label: string; color: string };

export const categories: CategoryMeta[] = [
  { slug: 'product-management', label: 'Product Management', color: '#2D6A9F' },
  { slug: 'ai', label: 'AI', color: '#7A4FB5' },
  { slug: 'innovation', label: 'Innovation', color: '#C77D1A' },
  { slug: 'productivity', label: 'Productivity', color: '#17715E' },
  { slug: 'life', label: 'Life', color: '#B5514E' },
  { slug: 'mens-mental-health', label: "Men's Mental Health", color: '#3D8168' },
];

export const categoryBySlug = (slug: string): CategoryMeta =>
  categories.find((c) => c.slug === slug) ?? {
    slug,
    label: slug,
    color: '#4A5A68',
  };
