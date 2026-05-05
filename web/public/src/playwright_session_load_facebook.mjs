import { log } from "../../../love/public/src/log.mjs";
import { http_sleep } from "../../../love/public/src/http_sleep.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { playwright_session_save_prompt } from "../../../love/public/src/playwright_session_save_prompt.mjs";
import { app_calendar_url_ids } from "../../../love/public/src/app_calendar_url_ids.mjs";
import { playwright_session_load } from "../../../love/public/src/playwright_session_load.mjs";
import { playwright_session_save_facebook_name } from "../../../love/public/src/playwright_session_save_facebook_name.mjs";
export async function playwright_session_load_facebook() {
  let url_ids = await app_calendar_url_ids();
  const session_name = playwright_session_save_facebook_name();
  const r = await playwright_session_load(session_name);
  let browser = property_get(r, "browser");
  let context = property_get(r, "context");
  let page = property_get(r, "page");
  async function lambda(url_id) {
    await http_sleep();
    await page.goto("https://www.m.me/" + url_id);
    await page.waitForLoadState("domcontentloaded");
    const url = page.url();
    console.log(url);
  }
  await each_async(url_ids, lambda);
  return;
  await playwright_session_save_prompt(session_name, context, browser);
}
