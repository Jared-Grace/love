import { chromium } from "playwright";
export async function playwright_test_url(url, lambda) {
  let browser = await chromium.launch({
    headless: true,
    args: ["--disable-dev-shm-usage"],
  });
  try {
    let page = await browser.newPage();
    await page.goto(url);
    await lambda(page);
  } finally {
    await browser.close();
  }
}
