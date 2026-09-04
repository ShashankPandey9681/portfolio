import { getCollection, type CollectionEntry } from 'astro:content';

/**
 * Drafts are hidden from the built site but visible under `npm run dev`, so
 * work-in-progress posts can be previewed locally without ever shipping.
 */
const showDrafts = import.meta.env.DEV;

export function isVisible(post: CollectionEntry<'blog'>): boolean {
  return showDrafts || !post.data.draft;
}

/** Visible posts, newest first. Optionally narrowed to one category. */
export async function getPosts(category?: string) {
  const posts = await getCollection('blog', (entry) => {
    if (!showDrafts && entry.data.draft) return false;
    return category ? entry.data.category === category : true;
  });
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}
