import { playwright_chromium_visible } from "../../../love/public/src/playwright_chromium_visible.mjs";
export async function playwright_session_load() {
  const browser = await playwright_chromium_visible();
  const context = await browser.newContext();
  const page = await context.newPage();
}
