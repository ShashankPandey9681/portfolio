import { defineCollection, z } from 'astro:content';

// The six blog categories. To add/rename a category, edit this list AND the
// matching label/color in src/data/categories.ts.
export const CATEGORIES = [
  'product-management',
  'ai',
  'innovation',
  'productivity',
  'life',
  'mens-mental-health',
] as const;

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.enum(CATEGORIES),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
