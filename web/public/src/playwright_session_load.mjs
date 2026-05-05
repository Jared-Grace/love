import { playwright_session_save_facebook_name } from "../../../love/public/src/playwright_session_save_facebook_name.mjs";
import { playwright_chromium_visible } from "../../../love/public/src/playwright_chromium_visible.mjs";
export async function playwright_session_load() {
  const browser = await playwright_chromium_visible();
  const session_name = playwright_session_save_facebook_name();
  const context = await browser.newContext({
    storageState: session_name,
  });
  const page = await context.newPage();
  await page.goto("https://www.facebook.com/");
}
