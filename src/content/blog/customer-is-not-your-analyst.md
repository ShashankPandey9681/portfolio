---
title: "The customer is not your analyst"
description: "Three products, three industries, one recurring mistake — we kept handing people the raw material of a decision and calling it a feature."
date: 2026-09-04
category: "product-management"
draft: true
---

<p class="provenance">Drawn from four years of notes across Trell, Loconav and ShareFile. The pattern took embarrassingly long to see.</p>

<!-- TODO (Shashank): the three scenes below are written at the level of the product
     argument, because I only have what's in your case studies. Each one wants a
     concrete detail — a number, a customer quote, a specific moment in a review —
     to land properly. Marked inline. -->

At Trell in 2021 I was working on short-video commerce, and the number everyone watched was watch time.

It was a reasonable number to watch. It went up. Sessions got longer. By every measure the feed was working.

But when we looked at what those longer sessions produced, a lot of them produced nothing at all. People watched, and watched, and closed the app. The feed was extremely good at holding attention and only incidentally good at helping anyone decide to buy something.

<!-- TODO: a specific figure here — e.g. what share of long sessions converted vs short ones. -->

That was the first thing I noticed: we were measuring how long the decision took, and calling it engagement.

A year later I was at Loconav, working on fleet operations, and the surface was completely different. No feed, no creators, no video. Just trucks and the enormous exhaust of data that fifty vehicles produce every day.

The product showed all of it. Utilisation, fuel burn, idle time, route deviation, driver behaviour. Genuinely good dashboards.

Fleet owners barely opened them.

The instinct in the room was that the dashboards needed work — more filters, better mobile, a cleaner default view. But when we sat with owners, the problem wasn't that they couldn't see the data. It was that seeing it didn't tell them what to do on Monday. They knew costs were up. They knew some vehicles were worse than others. What they didn't have was three hours to go trip by trip looking for the reason.

<!-- TODO: the specific pattern that made this click — the recurring 40-minute wait, or whichever example is real. -->

Second thing: we had built something that answered "what is happening" and shipped it to people who were asking "what should I care about".

Now I'm at ShareFile working on the Work Management charter, and it has happened a third time, in a third shape.

Internally we have a documents team, a tasks team, a collaboration team, an eSignature team. Each with a roadmap and a metric. Each capability, on its own, works.

Customers experience none of those boundaries. They have a process — collect these six documents, get them reviewed, get one signed, know when it's done — and they assemble it themselves out of our parts. They create the folder, write the email, wait, chase the missing ones, chase again, check the folder to see what arrived.

All of that chasing is the customer manually performing an accounting job the software declined to do.

Third thing: we had modelled the objects perfectly and left the customer to hold the workflow in their head.

Over time I stopped reading these as three unrelated problems and started reading them as one.

In every case we had built something that produced the raw material of a decision — a feed of options, a wall of telemetry, a set of files — and then handed it over. And in every case the customer's real work started at exactly the point where our product stopped.

<p class="pullquote">We kept shipping the inputs to a decision.<br />
The customer was hiring us for the decision.</p>

That reframe changes what "better" means.

A better feed is not a longer session. It's the shortest session that ends in something worth buying.

A better fleet product is not another chart. It's a sentence: this pattern is costing you roughly this much, and here are three things you could change.

A better document product is not faster upload. It's knowing, without asking anyone, whether the process is finished.

The chain is the same every time. Notice the pattern, explain why it matters, attach a consequence, recommend an action. Most products stop after the first step and describe the remaining three as "insights".

I should be honest about where this breaks.

It assumes you're right. A dashboard that shows you everything is neutral; a product that tells you what to care about has taken a position, and when it takes the wrong one it is worse than useless — it's confidently wrong, and it trains people to stop checking. That risk is real and it scales with how much the customer trusts you.

It also assumes the customer wants the decision taken off their hands, and some don't. Analysts, auditors, anyone whose job _is_ the investigation — for them the raw view is the product. The trap is that those users are also the ones who file the most detailed feature requests, so they're over-represented in what you hear.

And it's harder to build. "Give them more visibility" decomposes into tickets. "Help them decide" mostly doesn't, which is why it loses planning arguments to work that estimates cleanly.

So the diagnostic I use now, and the one I'd offer to anyone looking at their own roadmap on Monday:

Find the last screen in your product. The one the customer reaches at the end of the flow you're proud of. Then ask what they do next.

If the honest answer is that they export it, or they open a spreadsheet, or they message a colleague, or they sit and think for twenty minutes — that gap is the actual product. Everything before it was preparation.

Because the work isn't finished when the customer can finally see the situation clearly.

It's finished when they know what to do about it.

[^1]: Worth separating this from "just add AI". The models are not the hard part — a generic model already knows more recipes, more routing heuristics and more workflow templates than any of us. The hard part is the context around the model: what's actually in the warehouse, what this fleet did last month, what this customer already sent you. That context is unglamorous, specific, and the only real moat.
