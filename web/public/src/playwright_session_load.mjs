import { playwright_chromium_visible } from "../../../love/public/src/playwright_chromium_visible.mjs";
export async function playwright_session_load() {
  const browser = await playwright_chromium_visible();
  const context = await browser.newContext({
    storageState: "fb-session.json",
  });
  const page = await context.newPage();
  await page.goto("https://www.facebook.com/");
}
