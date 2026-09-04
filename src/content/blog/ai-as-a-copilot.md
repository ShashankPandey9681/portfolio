---
title: "AI as a copilot, not a replacement"
description: "Everyone is competing on the model. Almost nobody is competing on the thing that actually decides whether the output is useful."
date: 2026-04-15
category: "ai"
---

<p class="provenance">A version of this argument turned up while building a cooking assistant for my own kitchen. It generalised faster than I expected.</p>

Here is a claim I've become fairly confident about: in most AI products, the model is not the hard part and never was. The context around it is.

It's easiest to see through examples, so that's where I'll start.

**First example.**

Observation: a generic model already knows more recipes than any cookbook ever printed. Ask it what to cook and it will answer instantly, fluently, and at length.

The obvious conclusion is that recipe recommendation is a solved problem.

The non-obvious conclusion is that recipes were never the problem. The real question is what to cook *tonight* — given the spinach that will not survive until Thursday, the thirty minutes actually available, the person at the table who won't eat mushrooms, and the fact that this exact dish was served on Tuesday. None of that is in the model. All of it is in the household. A system that knows four boring facts about your kitchen will beat a much better model that knows none of them.

**Second example.**

Observation: ask a model to draft a product requirements document and it produces something structurally perfect in about nine seconds.

The obvious conclusion is that PRD writing is automated now.

The non-obvious conclusion is that the document was never the deliverable. The value in a PRD is the argument — why this, why now, why not the other three things — and that argument depends on what your customers complained about last quarter, what engineering already tried and abandoned, and which executive has to be persuaded. The model can produce the artifact. It cannot produce the reasoning, because the inputs to the reasoning live in your organisation, not in its weights.

**Third example.**

Observation: two companies ship a support assistant on the same underlying model. One deflects a meaningful share of tickets. The other gets switched off within a quarter.

The obvious conclusion is that one team prompted it better.

The non-obvious conclusion is that one team had clean, current, well-structured knowledge about their own product, and the other had a wiki last updated in 2023. Same model, same prompt, opposite outcome. The differentiator sat entirely upstream of the intelligence.

**Fourth example.**

Observation: I use AI every day and I still rewrite most of what it gives me.

The obvious conclusion is that the tools aren't good enough yet.

The non-obvious conclusion is that this is the correct division of labour, and it may not change much. It handles throughput — first drafts, synthesis, the query I'd have spent twenty minutes getting right. I handle direction — what we build, what we refuse, what to say in the conversation that's actually difficult. The rewriting isn't waste. It's where judgement gets applied, and it's faster from a bad draft than from an empty page.

Why do most teams miss this?

Two reasons.

The first is that the model is the visible, exciting, benchmarkable part. Context work is unglamorous — plumbing, schemas, permissions, cleaning up the data nobody wanted to own. It doesn't demo well. It never gets a launch post.

The second is that model quality is available to your competitors on exactly the terms it's available to you. Anyone can call the same API next Tuesday. What nobody else can call is what you know about your customers, your operations, and your own history.

> The model is a commodity you rent. The context is an asset you own. Almost every durable advantage in an AI product comes from the second one.

So when a team tells me they're building something with AI, I've stopped asking which model they're using. It's rarely the interesting answer.

I ask what the system knows that a stranger wouldn't — and how it found that out.

If the answer is nothing, there's no product yet. Just an expensive wrapper around a public API.

---

Which leads somewhere slightly uncomfortable.

The temptation with any new technology is to start from the capability: *what can we do with this?* It's the wrong opening question, and it reliably produces features that demo beautifully and get used twice.[^1]

The better question is which decision is currently too slow, too tedious, or too expensive for the customer to make properly — and then whether context plus a model can make that decision feel effortless.

Get that right and something counterintuitive happens. The more sophisticated the system underneath, the simpler it should feel on top. No prompt engineering. No query language. No dashboard to interpret.

<p class="pullquote">The goal was never AI that generates more content.<br />
It's AI that understands enough context to make an everyday decision feel obvious.</p>

Which is also why I'm fairly relaxed about the replacement question.

A model that knows everything in general still knows nothing about your situation in particular.

And that gap — between the general and the particular — is where the work is.

[^1]: This isn't an argument against experimentation. Playing with a new capability to learn its shape is genuinely useful. It just isn't a roadmap, and the two get confused constantly — usually somewhere between an impressive internal demo and a commitment made in a planning meeting.
