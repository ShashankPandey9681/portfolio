# DEPLOY — go from this folder to a live site

Stack: **Astro** (static) -> **Cloudflare Pages** (hosting + auto-deploy) ->
**Formspree** (contact form). All free at your scale. The build runs on
Cloudflare's servers, so you don't need npm working on your own machine to ship.

---

## 1. Put the code on GitHub

1. Create a new **empty** repo on GitHub (e.g. `personal-site`).
2. In this folder:

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/personal-site.git
git push -u origin main
```

## 2. Wire up the contact form (Formspree)

1. Sign up at <https://formspree.io> and create a new form.
2. Copy the form ID from its endpoint `https://formspree.io/f/XXXXXXX` -> the ID is `XXXXXXX`.
3. Paste it into `src/data/site.ts` -> `formspreeId`.
4. Commit and push. The form on `/contact` now emails you on submit — no backend,
   and your address is never exposed in the HTML.

## 3. Deploy on Cloudflare Pages

1. Create a free account at <https://dash.cloudflare.com>.
2. **Workers & Pages -> Create -> Pages -> Connect to Git**, and pick your repo.
3. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. **Save and Deploy.** Cloudflare builds and gives you a live URL like
   `your-site.pages.dev`. From now on, **every push to `main` auto-deploys**.

## 4. Connect your custom domain (spandey.com)

1. In the Cloudflare dashboard: **Add a site**, enter `spandey.com`, pick the Free
   plan. Cloudflare shows you two nameservers.
2. In **GoDaddy -> Domain Settings -> Nameservers**, switch to custom nameservers
   and paste in the two from Cloudflare. Save. (Registration stays with GoDaddy;
   only DNS management moves. Activation takes minutes to a few hours.)
3. Once active, in your Pages project -> **Custom domains -> Set up a domain**,
   enter `spandey.com` (and `www.spandey.com` if you want both). Cloudflare adds the
   DNS records automatically and issues HTTPS.
4. Set `site: 'https://spandey.com'` in `astro.config.mjs`, then push.

---

## Everyday workflow after setup

```
edit files  ->  git commit  ->  git push  ->  Cloudflare builds  ->  live
```

Check `ROADMAP.md` whenever you're not sure which file to edit.

## No local npm? (blocked network)

You can still ship: edit files, `git push`, and Cloudflare runs the build for you.
For a live local preview without local npm, open the repo in **GitHub Codespaces**
or **StackBlitz**, which run npm off your machine.
