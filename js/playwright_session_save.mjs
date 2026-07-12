import { playwright_session_save_prompt } from "./playwright_session_save_prompt.mjs";
import { playwright_chromium_visible } from "./playwright_chromium_visible.mjs";
export async function playwright_session_save(url, session_name) {
  let browser = await playwright_chromium_visible();
  let context = await browser.newContext();
  let page = await context.newPage();
  await page.goto(url);
  await playwright_session_save_prompt(session_name, context, browser);
}
