import { global_function_async } from "../../../love/public/src/global_function_async.mjs";
import { chromium } from "playwright";
export async function playwright_test_url(url, lambda) {
  async function lambda3() {
    const browser = await chromium.launch({
      headless: false,
    });
    return browser;
  }
  let awaited = await global_function_async(playwright_test_url, lambda3);
  try {
    const page = await awaited.newPage();
    await page.goto(url);
    await lambda(page);
  } finally {
    await browser.close();
  }
}
