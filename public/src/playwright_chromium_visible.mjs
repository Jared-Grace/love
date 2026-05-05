import { playwright_chromium } from "../../../love/public/src/playwright_chromium.mjs";
export async function playwright_chromium_visible() {
  let chromium = await playwright_chromium();
  const browser = await chromium.launch({
    headless: false,
  });
  return browser;
}
