import { catch_only_run_async } from "./catch_only_run_async.mjs";
import { import_install } from "./import_install.mjs";
export async function messenger_reply() {
  const { chromium, firefox, webkit } = await import_install("playwright");
  let browser = null;
  async function lambda2() {
    browser = await chromium.launch({
      headless: false,
    });
  }
  await catch_only_run_async(lambda2, "npx playwright install", on_error);
  const page = await browser.newPage();
  await page.goto("https://facebook.com");
  await browser.close();
}
