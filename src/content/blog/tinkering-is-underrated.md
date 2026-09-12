---
title: "Tinkering is underrated"
description: "I spent years losing the same argument with myself every morning. Building the thing that ended it taught me more about product work than the quarter it sat in."
date: 2026-07-05
category: "product-management"
---

<p class="provenance">On the cook bot, and what a household annoyance taught me that a roadmap didn't.</p>

For years, the first decision of my day was one I reliably lost.

What should we cook today.

I don't know exactly how long I've had this problem, which is part of the point — it predates most things in my life. It was there when I was a bachelor sharing a flat with two others and it's still there now, in a house with my wife and a five-month-old. Different life, different kitchen, same question arriving every morning before I'd properly woken up.

And it wasn't a neutral question. It produced decision paralysis, and the paralysis produced something worse: guilt for not having an answer, irritation at being asked, and a low-grade frustration that set the tone for the next hour.

Imagine starting your day, every day, with a decision that reliably upsets you.

That's the thing I eventually built something to remove. The build itself is written up [as a case study](/case-studies/personal-cook-bot) — the Telegram message at 5 AM, the n8n flow, the Google Sheet holding inventory and history. This post isn't about how it works. It's about what it changed in how I do my actual job.

## The constraint moved

I'd thought about solving this before, and never did. Two things stopped me, and only one of them was technical.

The first was that I knew, with total certainty, that I did not want another app on my phone. Not one more icon, one more login, one more habit to maintain for a decision that takes fifteen seconds when it goes well. Every version of this I could imagine building was a recipe app, and a recipe app was not going to survive contact with my actual mornings.

The second was that building it used to be a real cost.

That second one has quietly stopped being true. With models, MCP, and automation tooling available out of the box, I was confident that if I could pin down three things — who the user is, what the problem actually is, and which channel it lives in — then the building wouldn't be the hard part.

That turned out to be right, and it's the part I keep thinking about.

<p class="pullquote">Once you have the user, the problem, and the channel,<br />
the code is no longer the constraint.</p>

The channel decision *was* the product decision. The message goes to the family Telegram group because that's where household coordination already happens. No new tool, no new habit, nothing to open. Every hard call I made on this project was a product call wearing a technical costume, and the technical part largely got out of the way.

## What actually transferred

I want to be specific here, because "tinkering makes you a better PM" is usually where these posts get vague and start talking about empathy for engineers.

Four things came back with me into the day job.

**I build better decision trees now.** Working the cook bot backwards from the moment of the decision — what's in the fridge, what we ate yesterday, how much time the cook has, who's coming over — made me realise how rarely I map a user problem to that depth at work. Not the flow through the UI. The actual branching of a human being deciding something.

**I spend more of my effort on discovery and solutioning.** Because that's where the remaining difficulty went. If building is no longer the bottleneck, then the quality of the output is set almost entirely by how well the problem was understood upstream. Time spent there used to be a nice-to-have. It's now the highest-leverage hour in my week.

**I test assumptions instead of carrying them.** A weekend project punishes an untested assumption in days rather than a quarter. That feedback loop is fast enough to actually change your habits.

**I got better at spotting my own biases.** This is the uncomfortable one. I had opinions about this problem that were confidently wrong, and the only reason I found out is that the thing I built ran against reality every single morning and I had to look at the result. Most of my professional opinions don't get tested that directly, and I now assume more of them are wrong than I used to.

## Where this breaks

I'd be selling you something if I stopped there.

**A weekend win hides everything that isn't code.** My cook bot has one household, one language, no authentication, no audit trail, no migration, no accessibility requirements, no security review, no support queue, and exactly zero people to convince. At work, the code is often the cheapest part of shipping. The real danger of a tinkering habit isn't that you underestimate engineering — it's that you start reading all that surrounding work as bureaucracy, and walk into a planning conversation asking why a thing you'd build in a weekend takes a quarter. That question is almost always a sign you've forgotten the tax, not found an inefficiency.

**I was the user, and that's why it worked.** My real advantage here wasn't tooling. It was years of felt annoyance — I knew this problem in my body. I have nothing remotely like that intimacy with how a mid-market finance team chases six documents through an approval. So the lesson I take isn't "build more things fast". It's the opposite: notice how much sharper your judgement is when you are the user, and then go and manufacture that closeness for the problems where you don't have it. That's what discovery is actually for — buying, expensively and imperfectly, the intimacy I got for free in my own kitchen.

**And the hours come from somewhere.** I wrote recently about brutal prioritisation and about time no longer being abundant, and I don't want to turn around and tell you that everyone should be tinkering on the side. That would contradict the post sitting next to this one. This project earned its place for a narrow reason: it removed a recurring daily cost, permanently, in exchange for a bounded one-time spend. That's a very different proposition from tinkering as a virtue, or as a way to feel productive on a Sunday.

## The test I'd use

So, not "tinker more".

Pick something that annoys you on a recurring schedule, that you understand better than anyone would after a research call, and where you can name the user, the problem, and the channel before you open anything. If you can do that, the build is now the easy part, and you'll learn something about your own judgement that no amount of roadmap work will tell you.

If you can't name those three, a weekend project won't save you.

That was always the actual work.
