import { app_calendar_urls } from "../../../love/public/src/app_calendar_urls.mjs";
import { playwright_session_load } from "../../../love/public/src/playwright_session_load.mjs";
import { playwright_session_save_facebook_name } from "../../../love/public/src/playwright_session_save_facebook_name.mjs";
export async function playwright_session_load_facebook() {
  let mapped3 = await app_calendar_urls();
  const session_name = playwright_session_save_facebook_name();
  const page = await playwright_session_load(session_name);
  await page.goto("https://www.m.me/");
}
