# demo-lab

Weekday X-bookmark → demo lab with Vercel previews. Driven by the **Bookmark Demo** agent (João's Chief-of-Staff / CoS).

## The loop

Every weekday, one interesting X bookmark turns into a small, runnable demo you can open in the morning:

1. **X bookmark** — João bookmarks a post on X (a tool, technique, library, or idea worth trying).
2. **Cloud agent demo** — The *Bookmark Demo* agent (part of the CoS setup) picks the bookmark up, opens a branch in this repo, and builds a tiny, focused demo of the idea.
3. **Vercel preview** — Pushing the branch and opening a PR triggers a Vercel preview deployment, so every demo gets its own URL without any manual deploy step.
4. **Morning link** — The CoS drops the preview link (plus a one-paragraph summary of what was tried and what was learned) into João's morning brief.

```
X bookmark ──▶ Bookmark Demo agent ──▶ PR + Vercel preview ──▶ morning link
```

`main` stays intentionally minimal: it only holds the scaffolding Vercel needs to attach to the project. Each demo lives on its own branch / PR so previews stay isolated and easy to compare or discard.

## What's in here

- `app/` — a minimal Next.js (App Router) hello page. Its only job is to give Vercel something to build.
- `package.json` — the smallest dependency set that Vercel's Next.js preset recognizes.

## Running locally

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

## Deploying

Import this repo into Vercel (Framework Preset: **Next.js**, no extra settings). Once connected:

- pushes to `main` → production deployment
- every PR / branch → its own preview deployment (this is what the morning link points to)

## Conventions for demo branches

- Branch per demo, named after the bookmark topic (e.g. `demo/<topic>`).
- Keep each demo self-contained under `app/<topic>/` where possible, so the hello page on `main` stays untouched.
- The PR description should link the original X post and state what the demo is meant to show.
