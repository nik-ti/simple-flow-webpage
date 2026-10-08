# Simple Flow webpage

## What we're building

Simple Flow is a public marketing website, hosted as a Next.js app. This small update changes the secondary hero call-to-action so visitors can open the complete portfolio instead of one case study.

## Contract

GOAL: On the home page, the hero’s secondary card visibly invites visitors to see the work and links to `/portfolio`.

CONSTRAINTS:
- Preserve the existing hero layout and booking-call button.
- Use the existing Next.js and Playwright setup; add no dependencies.

FORMAT:
- Update the hero CTA copy and destination in `src/components/Hero.tsx`.
- Add a focused browser check runnable through npm.

FAILURE (any of these = not done):
- The secondary hero CTA still links to the old case-study URL.
- The CTA does not visibly say "SEE OUR WORK".
- The hero CTA is absent or the booking-call CTA changes.

## Built on top of

- Next.js 16 — existing maintained app framework (MIT); no new UI library is needed for an anchor destination change.
- Playwright 1.63 — existing browser-test framework (Apache-2.0); verifies the rendered home page rather than only source text.

## Gotchas we're handling

- We preserve the existing `id` on the hero CTA, so existing styles or tracking hooks do not silently break.
- We verify the rendered page at desktop and phone widths, so the link stays present and usable on common screens.
- We leave the external booking link untouched, so this routing change does not affect lead capture.

## Build sequence

1. Add a browser check describing the new hero CTA and demonstrate that it fails against the current site.
2. Update only the secondary hero CTA’s copy and destination.
3. Build, run the browser check, and check lint before pushing to `main`.

## How to run and test

- Run: `npm run dev`
- Build: `npm run build`
- Test: `npm run test:hero` (with the production app running on port 3012)

## Status

_Updated: 2026-10-08_
- Built: The home-page secondary CTA now says "SEE OUR WORK" and links to `/portfolio`; the booking CTA is unchanged.
- Changed from plan: retained the existing card class and `hero-case-study` id to avoid a visual or integration regression.
- Next: commit and push to `main`.
- Verification: `npm run build` passed; `npm run test:hero` passed at 375px and 1440px. `npm run lint` remains blocked by nine existing `Navbar.tsx` warnings about internal `<a>` links; this update does not modify that file.
- Watch out for: `test:hero` expects the app at `http://127.0.0.1:3012` unless `HERO_URL` is set.
