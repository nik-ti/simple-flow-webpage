// Browser checks for the /portfolio gallery and its six case studies (filters, films, layout at phone widths).
// Start the site (npm run build && npx next start -p 3011), then run npm run test:portfolio.
import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';

// Every case study follows the problem → solution reading order, except the news channel,
// which reads what it does → how it works → demo.
async function checkCaseStudyTemplate(page, demoId) {
  const isNews = demoId === 'news-demo';
  const intro = isNews ? 'what-it-does' : 'problem';
  const order = isNews ? [intro, 'how-it-works', demoId] : [intro, 'solution', 'how-it-works', 'what-changes', demoId];
  for (const id of order) await page.locator(`#${id}`).waitFor({ timeout: 3000 });
  assert.equal(await page.evaluate(ids => ids.every((id, i) => i === 0 ||
    (document.getElementById(ids[i - 1]).compareDocumentPosition(document.getElementById(id)) & Node.DOCUMENT_POSITION_FOLLOWING)), order), true,
    `Sections read ${order.join(' → ')}`);
  assert.ok(await page.locator(`#${intro} [data-pain-point]`).count() >= 3, 'At least 3 intro cards');
  assert.ok(await page.locator('#how-it-works [data-step]').count() >= 3, 'At least 3 numbered steps');
  assert.equal(await page.locator('#what-changes [data-before]').count(), isNews ? 0 : 1);
  assert.equal(await page.locator('#what-changes [data-after]').count(), isNews ? 0 : 1);
  assert.equal(await page.getByRole('link', { name: /See how it works/i }).getAttribute('href'), `#${intro}`);
  assert.equal(await page.locator('details[data-stack]').count(), 1, 'Tech stack is expandable');
  assert.ok(await page.locator('details[data-stack] [class*=stackItem] svg path').count() >= 3, 'Stack items show service logos');
  const text = await page.locator('main').innerText();
  assert.doesNotMatch(text.replace(/\b(0?[1-9])\b\s*\n/g, ''), /\b\d+\s*(%|customers|checks|hours|jobs|minutes|leads)\b/i, 'No metrics while the no-numbers rule stands');
}

// Every case study embeds its own film.
const caseStudies = [
  ['/portfolio/customer-support-agent', 'support-demo'],
  ['/portfolio/ops-agent', 'ops-demo'],
  ['/portfolio/voice-type', 'voice-demo'],
  ['/portfolio/news-channel', 'news-demo'],
  ['/portfolio/review-requests', 'feedback-demo'],
  ['/portfolio/reactivation-campaign', 'reactivation-demo'],
];
const clientNames = /Splendid|Happy Home|Top Movers|Wagon Movers|Lift It/i;

const base = process.env.PORTFOLIO_URL || 'http://127.0.0.1:3011';
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
const errors = [];
const externalAssetRequests = [];
page.on('pageerror', error => errors.push(error.message));
page.on('request', request => {
  if (['font', 'media', 'fetch', 'xhr'].includes(request.resourceType()) && !request.url().startsWith(base) && !request.url().startsWith('https://fonts.gstatic.com/')) externalAssetRequests.push(request.url());
});
await mkdir('test-results/portfolio', { recursive: true });
try {
  await page.goto(`${base}/portfolio`);
  await page.locator('[data-project-card]').first().waitFor();
  assert.equal(await page.locator('[data-project-card]').count(), 6);
  for (const [name, count] of [['AI agents', 2], ['Automations', 3], ['Apps', 1], ['All', 6]]) {
    await page.getByRole('button', { name, exact: true }).click();
    await page.waitForFunction(n => document.querySelectorAll('[data-project-card]').length === n, count);
  }
  assert.equal(await page.locator('[data-project-card] a').count(), 6, 'Every card links to its case study');
  assert.equal(await page.locator('[data-gradient-state="static"]').count(), 6);
  assert.equal(await page.locator('canvas').count(), 0, 'Static gradients need no renderers');
  await page.getByRole('button', { name: 'AI agents', exact: true }).click();
  await page.getByRole('link', { name: /Explore: Customer support AI agent/i }).click();
  await page.getByRole('heading', { name: 'Customer support AI agent', exact: true }).waitFor();
  await page.goBack();
  await page.waitForFunction(() => document.querySelectorAll('[data-project-card]').length === 2);
  await page.goto(`${base}/portfolio/customer-support-agent`);
  await page.reload();
  assert.equal(await page.getByText('Built for', { exact: true }).count(), 0);
  await checkCaseStudyTemplate(page, 'support-demo');
  const caseText = await page.locator('main').innerText();
  assert.match(caseText, /same questions/i, 'Problem names the repeat questions');
  assert.match(caseText, /one question at a time/i, 'Steps explain the guided estimate interview');
  assert.match(caseText, /photos/i);
  assert.match(caseText, /final (price|estimate) comes from a person/i, 'Human handoff stays explicit');
  assert.equal(await page.locator('details[open]').count(), 0);
  await page.locator('details[data-stack] summary').click();
  assert.equal(await page.locator('details[open]').count(), 1);
  await page.locator('details[data-stack] summary').click();
  const film = page.locator('#support-agent-video');
  await film.waitFor({ timeout: 1000 });
  assert.equal(await film.getAttribute('controls'), '');
  assert.equal(await film.getAttribute('preload'), 'metadata');
  assert.equal(await film.getAttribute('autoplay'), null);
  assert.equal(await film.getAttribute('poster'), '/videos/support-agent-poster.jpg');
  assert.match(await film.locator('source').getAttribute('src'), /^\/videos\/support-agent\.mp4$/);
  assert.equal(await page.locator('[data-walkthrough]').count(), 0, 'The old tap-through walkthrough is removed');
  assert.equal(await page.getByRole('button', { name: 'Next step', exact: true }).count(), 0);
  await page.waitForFunction(() => document.querySelector('#support-agent-video')?.readyState >= 1, null, { timeout: 15000 });
  assert.deepEqual(await film.evaluate(video => [video.videoWidth, video.videoHeight]), [1920, 1080]);
  assert.equal(await film.evaluate(video => video.paused), true, 'The film must not autoplay');
  assert.deepEqual(externalAssetRequests, [], 'Videos load from the site itself');

  for (const [route, demoId] of caseStudies) {
    await page.goto(`${base}${route}`);
    await checkCaseStudyTemplate(page, demoId);
    assert.equal(await page.locator(`#${demoId} [data-demo-placeholder]`).count(), 0, `${route} has its film, not a placeholder`);
    const demoVideo = page.locator(`#${demoId} video`);
    assert.equal(await demoVideo.getAttribute('controls'), '', `${route} film has native controls`);
    assert.equal(await demoVideo.getAttribute('autoplay'), null, `${route} film does not autoplay`);
    assert.match(await demoVideo.getAttribute('poster'), /^\/videos\/.+-poster\.jpg$/);
    await page.waitForFunction(id => document.querySelector(`#${id} video`)?.readyState >= 1, demoId, { timeout: 15000 });
    assert.deepEqual(await demoVideo.evaluate(v => [v.videoWidth, v.videoHeight]), [1920, 1080], `${route} film metadata loads`);
  }
  for (const route of ['/portfolio', ...caseStudies.map(([r]) => r)]) {
    await page.goto(`${base}${route}`);
    assert.doesNotMatch(await page.locator('body').innerText(), clientNames, `${route} names no client company`);
  }

  for (const width of [320, 375, 768, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const [route, name] of [['/portfolio', 'gallery'], ...caseStudies.map(([r]) => [r, r.split('/').pop()])]) {
      await page.goto(`${base}${route}`);
      await page.locator('h1').waitFor();
      if (name === 'gallery') await page.locator('[data-project-card]').first().waitFor();
      if (name !== 'gallery') await page.locator('#problem, #what-it-does').first().waitFor();
      if (name !== 'gallery') assert.doesNotMatch(await page.locator('[class*=heroDescription]').innerText(), /[.,][A-Za-z]/, `${name} hero keeps spaces between words at ${width}px`);
      await page.evaluate(() => document.fonts.ready);
      const brandStyles = await page.evaluate(() => ({
        family: getComputedStyle(document.body).fontFamily,
        headingFamily: getComputedStyle(document.querySelector('h1')).fontFamily,
        fontLoaded: document.fonts.check('16px "DM Sans"') && [...document.fonts].some(face => face.family.replace(/"/g, '') === 'DM Sans' && face.status === 'loaded'),
        background: getComputedStyle(document.body).backgroundColor,
        text: getComputedStyle(document.body).color,
        header: getComputedStyle(document.querySelector('#navbar')).position,
      }));
      assert.match(brandStyles.family, /DM Sans/);
      assert.match(brandStyles.headingFamily, /DM Sans/);
      assert.equal(brandStyles.fontLoaded, true, `${name} loads DM Sans`);
      assert.equal(brandStyles.background, 'rgb(240, 240, 240)');
      assert.equal(brandStyles.text, 'rgb(28, 28, 30)');
      assert.equal(brandStyles.header, 'sticky');
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), `${name} overflow at ${width}`);
      assert.equal(await page.locator('canvas').count(), 0);
      await page.screenshot({ path: `test-results/portfolio/${name}-${width}.png`, fullPage: true });
    }
  }
  for (const width of [320, 375, 768, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const [route, demoId] of caseStudies) {
      await page.goto(`${base}${route}`);
      const dimensions = await page.locator(`#${demoId} video`).boundingBox();
      assert.ok(dimensions.width <= width - 32, `${route} video fits at ${width}px`);
      assert.ok(Math.abs(dimensions.width / dimensions.height - 16 / 9) < 0.03, `${route} video keeps its 16:9 frame at ${width}px`);
    }
  }
  await page.setViewportSize({ width: 375, height: 900 });
  await page.locator('#nav-hamburger').click();
  assert.equal(await page.locator('#mobile-menu').getByRole('link', { name: 'BOOK A CALL' }).count(), 1);
  await page.locator('#mobile-menu').getByRole('link', { name: 'Our work' }).click();
  await page.getByRole('button', { name: 'All', exact: true }).waitFor();
  assert.equal(await page.locator('#mobile-menu').count(), 0);
  await page.keyboard.press('Tab');
  await page.getByRole('button', { name: 'All', exact: true }).focus();
  assert.ok(await page.getByRole('button', { name: 'All', exact: true }).evaluate(el => getComputedStyle(el).outlineStyle !== 'none'));
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto(`${base}/portfolio`);
  assert.equal(await page.locator('[data-gradient-state="static"]').count(), 6);
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  assert.equal(await page.locator('canvas').count(), 0);
  assert.equal(await page.getByRole('button', { name: /motion/i }).count(), 0);
  assert.deepEqual(errors, [], 'No browser runtime errors');
  console.log('PASS: filters, navigation, inline video, keyboard controls, local assets, DM Sans design tokens, responsive layouts, static gradients, screenshots.');
} finally {
  await browser.close();
}
