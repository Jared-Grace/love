import { playwright_chromium } from "./playwright_chromium.mjs";
export async function playwright_chromium_visible() {
  let chromium = await playwright_chromium();
  let browser = await chromium.launch({
    headless: false,
  });
  return browser;
}
