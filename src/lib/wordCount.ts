/**
 * Word count for a raw Markdown body, declared on the blog index and post
 * header. Borrowed from asmartbear.com, which labels every essay with its
 * length so readers can self-select before committing.
 *
 * Strips fenced code, inline code, images, link URLs, footnote definitions,
 * and Markdown punctuation so the number reflects prose actually read.
 */
export function wordCount(body: string): number {
  const prose = body
    .replace(/```[\s\S]*?```/g, '') // fenced code
    .replace(/`[^`]*`/g, '') // inline code
    .replace(/^\[\^[^\]]+\]:.*$/gm, '') // footnote definitions
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '') // images
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // links → their text
    .replace(/<[^>]+>/g, ' ') // inline HTML
    .replace(/[#>*_~|-]/g, ' ');

  const words = prose.match(/\b[\p{L}\p{N}'’-]+\b/gu);
  return words ? words.length : 0;
}

/** Rounds to the nearest 50 so the label reads as an estimate, not a metric. */
export function roundedWordCount(body: string): number {
  const n = wordCount(body);
  if (n < 100) return n;
  return Math.round(n / 50) * 50;
}
