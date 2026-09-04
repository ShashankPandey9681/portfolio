# Blog house style

The voice for spandey.com/blog is the same voice as the case studies in
`src/pages/case-studies/`. This document exists so posts stay coherent with
those pages instead of drifting into generic listicle shape.

Two working PMs write in almost exactly this register — worth reading before
drafting anything:

- [Casey Winters](https://www.caseyaccidental.com/p/why-management-advice-breaks-for)
- [Shreyas Doshi](https://shreyasdoshi.substack.com/p/the-antithesis-principle)

---

## The rules

1. **No `##` subheadings.** Structure is carried by whitespace, standalone
   one-line paragraphs, and bolded ordinal markers. Headings turn an argument
   into a reference document, which is the wrong genre for this site.
2. **Short paragraphs.** One to three sentences. Single-sentence paragraphs are
   the main rhythmic device — use them as beats, not decoration.
3. **Contrast pairs.** State the thing, then the better version of the thing:
   _"The first is analytics. The second is a business insight."_
4. **Close on a couplet.** Two parallel lines that land the argument. This is
   the signature move — every case study already ends this way.
5. **One blockquote per post, maximum**, reserved for the thesis.
6. **Cut hedges from the main line.** Anything that starts "of course, it
   depends" belongs in an endnote.
7. **Write the `description` as a real lede.** It renders as large text under
   the title, so it is the second thing read after the headline. Not an SEO
   summary — a hook.

---

## The three formats

Pick one before drafting. All three are the same voice at different lengths.

### 1. The Quiet Pattern — default

The house format. Use it unless there's a reason not to.

1. Cold open on a specific scene or number. No framing, no throat-clearing.
2. Three to five scenes in chronology, each closed by a **standalone one-line
   lesson paragraph**.
3. The turn — "over time I realised this wasn't accidental, but a system" —
   then name the pattern.
4. Stress-test it: does the pattern hold in a second and third context?
5. Name what it costs. The honest flaw list.
6. Closing couplet, plus a diagnostic question the reader can apply on Monday.

**1,200–1,600 words.** Suits experience-derived insight — the thing you noticed
that nobody had named.
Categories: product-management, innovation, life.

### 2. The Named Principle — short form

1. Name the principle in sentence one. Promise examples in sentence two.
2. Four examples in an identical repeating unit, marked with bold ordinals
   (`**First example.**`), never headings. Each unit: observation → the obvious
   reading → the non-obvious reading.
3. "Why do most people miss it?" — two reasons.
4. One blockquote holding the distilled principle.
5. Invitation: "next time you notice X, look for Y."

**700–1,000 words.** Suits a reusable mental model, especially a
counterintuitive one.
Categories: productivity, ai, product-management — and it is the best format for
mens-mental-health, because the obvious/non-obvious split does inward work
without turning the post into a confession.

### 3. The Long Walk — quarterly

1. Open with the *method question*, not the answer.
2. State the scope and assumptions up front.
3. Whitespace-separated movements (`---` in Markdown). Still no headings. Each
   movement runs one sub-argument to exhaustion.
4. Periodically compress what you've proved into a one-line enumeration.
5. Voice the strongest objection in the reader's own words, then answer it
   flatly.
6. End on a parallel-structure aphorism that echoes the opening.
7. Endnotes for every "yes, but" you cut.

**2,500–8,000 words.** The once-a-quarter definitive essay.
Categories: product-management, life, innovation.

---

## Devices

All of these work without a single subheading.

**Movement divider.** A `---` renders as a centered `§` with generous space
around it. This is how a Long Walk gets sections without headings.

**Provenance line.** An italic note above the first paragraph, crediting where
the idea came from:

```html
<p class="provenance">This one came out of a conversation with …</p>
```

**Contrast-pair pull quote.** The house signature, promoted to a visual element.
Picks up the category colour automatically:

```html
<p class="pullquote">Founders don't scale management.<br />
They scale expectations, context, and consequences.</p>
```

**Bold ordinal markers.** A `**First example.**` alone on a line gets extra
space above it, giving scannability with no heading.

**Thesis blockquote.** A normal Markdown `>` block. One per post.

**Endnotes.** Standard GFM footnotes — `[^1]` inline, `[^1]: …` at the bottom.
They render in a bordered block under the post. Use them freely; they are what
lets the main line stay unhedged.

**Word count** is computed from the body and shown on the index and post header.
Nothing to write — but it does mean a thin post looks thin, which is the point.

---

## What not to do

- Don't open with a definition or a dictionary quote.
- Don't write "In this post, I'll cover…". Start the argument instead.
- Don't use `##` to break up a 900-word post. If it needs headings, it's
  probably two posts.
- Don't end on "What do you think? Let me know in the comments." End on the
  couplet.
- Don't use bullet lists as the primary structure. A list is a place to put
  things you've already argued for, not a substitute for arguing.
