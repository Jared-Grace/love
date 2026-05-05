import { playwright_session_save_prompt } from "../../../love/public/src/playwright_session_save_prompt.mjs";
import { playwright_chromium_visible } from "../../../love/public/src/playwright_chromium_visible.mjs";
export async function playwright_session_save(url, session_name) {
  const browser = await playwright_chromium_visible();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(url);
  await playwright_session_save_prompt(session_name, context, browser);
}
