/**
 * Captures a hero screenshot of each demo site into public/demos/<slug>.jpg.
 * Run with `npm run capture:demos` whenever a demo site changes.
 */
import { chromium } from "playwright";
import { readFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const demos = JSON.parse(readFileSync(path.join(root, "src/data/demos.json"), "utf8"));
const outDir = path.join(root, "public/demos");

// 16:10 to match the .previewFrame aspect ratio; 2x for retina.
const WIDTH = 1600;
const HEIGHT = 1000;
const SCALE = 2;

mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: WIDTH, height: HEIGHT },
  deviceScaleFactor: SCALE,
  reducedMotion: "reduce",
});

let failed = 0;

for (const demo of demos) {
  const out = path.join(outDir, `${demo.slug}.jpg`);
  const page = await context.newPage();
  try {
    await page.goto(demo.url, { waitUntil: "networkidle", timeout: 60_000 });
    // Let fonts swap in and any entrance animation land on its final frame.
    await page.evaluate(() => document.fonts?.ready);
    await page.waitForTimeout(2500);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({ path: out, type: "jpeg", quality: 82 });
    console.log(`✓ ${demo.slug}`);
  } catch (err) {
    failed++;
    console.error(`✗ ${demo.slug} — ${err.message}`);
  } finally {
    await page.close();
  }
}

await browser.close();
process.exit(failed ? 1 : 0);
