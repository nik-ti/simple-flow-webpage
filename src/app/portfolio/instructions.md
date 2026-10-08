# Instructions: adding project pages to "Our work"

For any coding agent adding or changing a project page in the portfolio (`/portfolio`) on simple-flow.co. Read this, then read two or three existing pages before you write anything. The existing pages are the design reference, so copy their patterns rather than inventing new ones.

## Where things live

| Location | What it is |
| --- | --- |
| `src/app/portfolio/page.tsx` | The gallery (intro + filterable cards) |
| `src/app/portfolio/<slug>/page.tsx` | One case study: its copy, sections, and stack list |
| `src/app/portfolio/<slug>/StepVisuals.tsx` + `page.module.css` | That page's small HTML/CSS step illustrations |
| `src/app/portfolio/layout.tsx`, `portfolio.css` | Wraps every page in the site's Navbar and Footer; a few scoped base styles |
| `src/components/portfolio/case-study/CaseStudy.tsx` | The shared sections: `CaseHero`, `ProblemSection`, `SolutionSection`, `StepsSection`, `BeforeAfter`, `DemoSection`, `LiveLinkSection`, `StackSection` |
| `src/components/portfolio/case-study/MiniUI.tsx` | Mockup pieces for illustrations: `Window`, `Bubble`, `Checklist`, `Rows`, `Tag`, `Note`, `Stack` |
| `src/components/portfolio/case-study/serviceLogos.ts` | Logos for the stack list |
| `src/components/portfolio/ProjectVisual.tsx` | The illustration on each gallery card and page hero |
| `src/data/projects.ts` | One record per project: title, category, summary, gradient colors, link |
| `public/videos/<slug>.mp4` + `<slug>-poster.jpg` | Each page's film |
| `tests/portfolio.mjs` | Browser checks (run `npm run test:portfolio`) |

## Adding a project

1. Add a record to `src/data/projects.ts`: `category` is `AI agents`, `Automations`, or `Apps`; pick five gradient colors in a new hue family that no other card uses.
2. Add its card illustration in `ProjectVisual.tsx` (and a `Visual` kind).
3. Create `src/app/portfolio/<slug>/` with `page.tsx`, `StepVisuals.tsx`, `page.module.css`, built from the shared sections. Pick an `accent` and a soft tint that match the card.
4. Add the page to the `caseStudies` list in `tests/portfolio.mjs` and update the gallery counts the test expects.
5. Build, test, look at it on a phone (see "Checks before publishing"), then push.

Read the project's real source code first. Every claim on the page must be something the code actually does.

## Page structure

The default reading order is: hero → 01 The problem (a short story + 3 pain cards) → 02 The solution (one statement + one detail line) → 03 How it works (3-5 numbered steps, each with a small illustration) → 04 What changes (before/after lists + one line on what stays human) → 05 See it in action (film) → How it's built (collapsed stack).

This is a starting shape, not a rule. Drop or swap sections when the project is a different kind of thing. Example: the AI news channel has no "problem" for a client, so its page is: What it does (3 cards) → How it works → See it live (a link to the real channel, via `LiveLinkSection`) → stack. Always keep: a hero, a plain explanation before any demo, and the numbered steps.

Every illustration is HTML/CSS inside the page (no screenshots), using the page's `--accent`. Text in illustrations is example data.

## Tone and copy

- Calm, direct, simple words. Say what it does and what work it takes off people's hands.
- No hype, no begging, no fancy labels, no empty superlatives ("revolutionary", "streamline your workflow", "seamless").
- No numbers, metrics, or results (hours saved, jobs booked, percentages) unless nikita gives you verified figures. The tests fail on things like "45 customers".
- No client company names anywhere: cards, heroes, copy, illustrations, videos, file names, URLs. Known clients: Splendid, Splendid Moving, Happy Home, Happy Home Moving, Top Movers, Wagon Movers, Lift It. Say "a moving company" only when the context truly needs it. Exception approved by nikita: Navat (a restaurant) is used as the example on the review-requests page. nikita's own products (AI Flow, VoiceType) can be named.
- Make copy fit any business when the product would (review requests and reactivation are written for "a business", not "a moving company"; avoid "move/moving" where it isn't needed).
- People and contact details in illustrations are fictional (Jordan Lee, jordan@example.com, (555) 014-2290). Never copy real customer data from a project repo. Real public output that nikita owns (e.g. a real AI Flow post) can be shown.
- Be honest about limits: say what a person still does ("The final price comes from a person").

## The stack list ("How it's built")

List only:
- the language (Python, JavaScript, Swift…)
- the frameworks (LangGraph, FastAPI, Next.js…)
- where it runs or is hosted (Railway, Vercel)
- where people use it, when that's the front end (Google Chat, Telegram)
- core building blocks like SQLite and Resend

Do not list:
- CRMs
- AI models or model providers
- integrations like Google Calendar, Maps, or Reviews
- safety features, test modes, or anything that isn't a tool

VoiceType's list is the exception that's fine as is.

Logos must be the real brand marks. Take them from Simple Icons (https://simpleicons.org, CC0) or LobeHub Icons (MIT) when Simple Icons' version is wrong, and copy the SVG path into `serviceLogos.ts`. Never draw or guess a logo. Remove logos that no page uses.

## Checks before publishing

- `npx tsc --noEmit`, `npm run build`, then start the site (`npx next start -p 3011 -H 127.0.0.1`) and run `npm run test:portfolio`. It checks section order, films, no client names, no metrics, no sideways scroll, and readable hero text at 320, 375, 768, and 1440px.
- Look at real screenshots at 375px yourself, especially the illustrations. The site's global CSS breaks long words, so small pills/tags must not shrink (`Tag` already has `white-space: nowrap`). A hidden `<br />` needs a space before it (`word. <br />`) or words run together on phones.
- The site font is Arial on purpose (nikita prefers it). Don't add web fonts.

## Publishing

The site deploys automatically when `main` is pushed to github.com/nik-ti/simple-flow-webpage (Vercel project `simple-flow-webpage`, Node 24). Don't deploy with the Vercel CLI. After pushing, check the commit's status at `https://api.github.com/repos/nik-ti/simple-flow-webpage/commits/<sha>/status`, then run the tests against the live site: `PORTFOLIO_URL=https://www.simple-flow.co npm run test:portfolio`.

## Making a film (only when nikita asks)

Films are made with the brag skill: https://github.com/latent-spaces/brag (MIT). It uses HyperFrames to build the video from HTML. Install it into the working project's skill folder (e.g. clone into `.agents/skills/brag`), read its `SKILL.md`, and pin HyperFrames to the version that worked: `npx --yes hyperframes@0.8.99 check` / `render`. Work in a scratch folder outside the site repo; only the final mp4 and poster go into `public/videos/`.

Rules nikita set after reviewing six films:

- **1920×1080, 30fps, about 25-36s.** Hook → the product doing its job → result.
- **Framed close.** People watch inside a web page on a phone. Use camera push-ins so the active part fills most of the frame and is centered. No small cards floating in empty space, no frames of an empty composer or a blank window, nothing cut off at the edges.
- **Readable.** Any line the viewer must read stays fully still about 0.3s per word. Main messages get around 6s, not much more; don't linger on a still screen.
- **Sound: no music unless nikita asks. No voice, no ambience.** Only quiet interface sounds synced to what's on screen (typing while text types, clicks, a send, an arrival), using the CC0 sounds bundled with brag. No Apple system sounds or other licensed audio.
- **Looks like the real product.** Read the product's source and rebuild its real interface (its CSS, fonts, layout, and exact wording). For a web page, copy its real HTML/CSS into the video and drive its states with the timeline. For a Mac app, use the Mac's own system font and a built-in wallpaper, and rebuild the app's UI from its Swift code. Only design visuals from scratch when the product has no interface (like the reactivation campaign), and then keep them clean and believable.
- **No third-party logos** (Google, Apple, Telegram, OpenAI, CRMs…). Plain-text names are fine. A client's logo only with nikita's approval (Navat was approved).
- **Same honesty rules as the pages:** no client names, fictional people, no invented results.
- **Never run the live product.** No real API calls, emails, texts, or CRM writes, and never submit real forms.
- **Keep it tight.** Cut steps that don't add anything (e.g. a "redirecting…" screen). Show one example and get to the result.
- **Poster.** Pick the strongest still frame (the result, framed close), save it as the poster jpg, and also bake it in as frame 0 of the mp4 so the video's thumbnail matches.
- **Review before delivering.** Extract stills from the rendered mp4 at every scene and look at them. Put a border around each one if you combine them into a sheet, or same-colored backgrounds hide the frame edges.

To put a film on a page, pass `video={{ videoId, src: '/videos/<slug>.mp4', poster: '/videos/<slug>-poster.jpg', label }}` to `DemoSection`, with a short `text` saying what the film shows. The tests check it has controls, a poster, and doesn't autoplay. If a live link says more than a film (like a public channel), use `LiveLinkSection` instead.

When making several films, one sub-agent per film works well. Give each a detailed brief: its source files, the storyboard, these rules. Review every result yourself before showing nikita.
