import { playwright_session_save_prompt } from "../../../love/public/src/playwright_session_save_prompt.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { app_calendar_url_ids } from "../../../love/public/src/app_calendar_url_ids.mjs";
import { playwright_session_load } from "../../../love/public/src/playwright_session_load.mjs";
import { playwright_session_save_facebook_name } from "../../../love/public/src/playwright_session_save_facebook_name.mjs";
export async function playwright_session_load_facebook() {
  let url_ids = await app_calendar_url_ids();
  let first = list_first(url_ids);
  const session_name = playwright_session_save_facebook_name();
  const page = await playwright_session_load(session_name);
  await page.goto("https://www.m.me/" + first);
  await playwright_session_save_prompt(session_name, context, browser);
}
