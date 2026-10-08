// Browser check for the homepage hero calls to action.
// Start the production app with `npm run start -- -p 3012`, then run `npm run test:hero`.
import assert from 'node:assert/strict';
import { chromium } from 'playwright';

const base = process.env.HERO_URL || 'http://127.0.0.1:3012';
const browser = await chromium.launch({ headless: true });

try {
  for (const width of [375, 1440]) {
    const page = await browser.newPage({ viewport: { width, height: 900 } });
    await page.goto(base, { waitUntil: 'networkidle' });

    const portfolioCta = page.locator('#hero-case-study');
    await portfolioCta.waitFor();
    assert.equal(await portfolioCta.getAttribute('href'), '/portfolio');
    assert.match(await portfolioCta.innerText(), /SEE OUR WORK/i);
    assert.equal(await page.locator('#hero-book-call').getAttribute('href'), 'https://cal.com/nik-t/30min');

    await Promise.all([
      page.waitForURL(`${base}/portfolio`),
      portfolioCta.click(),
    ]);
    await page.locator('main').getByText('Our work', { exact: true }).waitFor();

    await page.close();
  }
  console.log('PASS: hero portfolio CTA is present, legible, and routes to /portfolio at phone and desktop widths.');
} finally {
  await browser.close();
}
