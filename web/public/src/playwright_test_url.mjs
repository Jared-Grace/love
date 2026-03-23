import { chromium } from "playwright";
export async function playwright_test_url(url, lambda) {
  const browser = await chromium.launch({
    headless: false,
  });
  try {
    const page = await browser.newPage();
    await page.goto(url);
    await lambda(page);
  } finally {
    await browser.close();
  }
}
