# Signature Badge — "Comet"

The Simple Flow signature that goes in the footer of every front end I build.

A pill with a plain hairline border. A single bright point orbits that border every
3.6 seconds, dragging a short ember tail. At rest it reads as an ordinary credit line;
the motion is what makes people look, and then click.

- Links to `https://simple-flow.co`
- 152 × 28 px, animates without needing hover
- Pure CSS, no JavaScript
- Every class prefixed `sf-` so it cannot collide with a client stylesheet

---

## Drop-in (HTML + CSS)

Paste both blocks into the footer. The `<style>` can also be moved to the site's
main stylesheet.

```html
<a class="sf-comet" href="https://simple-flow.co" target="_blank" rel="noopener">
  <span class="sf-comet__inner">
    <span class="sf-comet__lbl">built by</span>Simple Flow
  </span>
</a>
```

```html
<style>
@property --sf-ang { syntax: "<angle>"; inherits: false; initial-value: 0deg; }

.sf-comet {
  /* --- tune these four to the footer it sits in --- */
  --sf-bg:   #0C0C11;                 /* MUST match the footer background */
  --sf-fg:   #EDEDF2;                 /* wordmark */
  --sf-mut:  #8A8A98;                 /* "built by" */
  --sf-rail: rgba(255,255,255,.16);   /* resting hairline */
  /* --- brand colours, leave alone --- */
  --sf-a:    #7C6BFF;                 /* comet body   (indigo) */
  --sf-hot:  #FFD9C2;                 /* comet head            */
  --sf-b:    #E06020;                 /* comet tail   (ember)  */

  display: inline-block;
  padding: 1px;
  border-radius: 999px;
  text-decoration: none;
  background:
    conic-gradient(from var(--sf-ang),
      transparent 0 80%,
      var(--sf-a) 90%,
      var(--sf-hot) 95%,
      var(--sf-b) 98%,
      transparent 100%),
    linear-gradient(var(--sf-rail), var(--sf-rail));
  animation: sf-spin 3.6s linear infinite;
}

.sf-comet__inner {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 6px 14px;
  border-radius: 999px;
  background: var(--sf-bg);
  color: var(--sf-fg);
  font: 600 12px/1 system-ui, -apple-system, sans-serif;
  letter-spacing: -.01em;
}

.sf-comet__lbl {
  font: 400 10px/1 ui-monospace, "SF Mono", Menlo, monospace;
  letter-spacing: .13em;
  text-transform: uppercase;
  color: var(--sf-mut);
}

.sf-comet:hover { animation-duration: 1.2s; }
.sf-comet:focus-visible { outline: 2px solid var(--sf-a); outline-offset: 3px; }

@keyframes sf-spin { to { --sf-ang: 360deg; } }

@media (prefers-reduced-motion: reduce) {
  .sf-comet { animation: none; background: linear-gradient(var(--sf-rail), var(--sf-rail)); }
}
</style>
```

---

## Light footers

The defaults above are tuned for a dark footer. On a light background the white-hot
comet head disappears and the type goes weak. Override the six variables:

```css
.sf-comet {
  --sf-bg:   #F3F3F6;             /* match the footer background */
  --sf-fg:   #0E0E14;
  --sf-mut:  #55555F;
  --sf-rail: rgba(0,0,0,.18);
  --sf-a:    #3A28E0;             /* deep brand indigo */
  --sf-hot:  #1E14C0;             /* no white head — it vanishes on light */
  --sf-b:    #C94A1A;             /* deep ember */
}
```

Rule of thumb: `--sf-bg` must equal the footer's actual background colour, or the
1px ring will show a seam. If the footer uses a CSS variable, point straight at it —
`--sf-bg: var(--gray-900);`

---

## Variables

| Variable | Purpose | Change per site? |
|---|---|---|
| `--sf-bg` | Fill of the inner pill. Must match the footer background. | **Always** |
| `--sf-fg` | "Simple Flow" wordmark colour. | Usually |
| `--sf-mut` | "built by" label colour. | Usually |
| `--sf-rail` | Resting hairline the comet travels along. | Usually |
| `--sf-a` | Comet body — brand indigo. | No |
| `--sf-hot` | Comet head — the bright point. | Light footers only |
| `--sf-b` | Comet tail — brand ember. | No |

---

## React / Next.js

For this site and any other React front end, as a component:

```tsx
export function SignatureBadge() {
  return (
    <a
      className="sf-comet"
      href="https://simple-flow.co"
      target="_blank"
      rel="noopener"
    >
      <span className="sf-comet__inner">
        <span className="sf-comet__lbl">built by</span>Simple Flow
      </span>
    </a>
  );
}
```

Put the CSS in a `.module.css` and swap the class names for `styles.comet` etc.
`@property` and `@keyframes` are global — declare them once in `globals.css`, not
inside the module, or the animation name gets hashed and the rule silently dies.

---

## Notes

- **`@property` support** — Chrome 85+, Safari 16.4+, Firefox 128+. Without it the
  badge still renders correctly; the comet steps rather than glides, because unregistered
  custom properties cannot be interpolated. No fallback needed.
- **Reduced motion** — the orbit stops and the border settles to a plain hairline. The
  wordmark stays legible and the link stays live.
- **Accessibility** — it is a real `<a>`, keyboard focusable, with a visible focus ring.
  The label reads "built by Simple Flow" to a screen reader with no extra ARIA.
- **Do not** change `--sf-a` / `--sf-b` to match a client's brand colours. Indigo and
  ember are what make it recognisable as mine across every site.

---

## Deployed on

| Site | Repo | Ground |
|---|---|---|
| splendidmoving.com | `Splendid-Moving/main-website` | dark (`--gray-900`) |
