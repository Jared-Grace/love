import { log } from "../../../love/public/src/log.mjs";
import { playwright_by_attribute_starts_with } from "../../../love/public/src/playwright_by_attribute_starts_with.mjs";
import { app_calendar_facebook_conversation_url } from "../../../love/public/src/app_calendar_facebook_conversation_url.mjs";
import { property_initialize_empty } from "../../../love/public/src/property_initialize_empty.mjs";
import { app_calendar_preaching_ask_lookup_overwrite } from "../../../love/public/src/app_calendar_preaching_ask_lookup_overwrite.mjs";
import { app_calendar_preaching_ask_lookup_get } from "../../../love/public/src/app_calendar_preaching_ask_lookup_get.mjs";
import { property_set_exists_not } from "../../../love/public/src/property_set_exists_not.mjs";
import { http_sleep } from "../../../love/public/src/http_sleep.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_calendar_url_ids } from "../../../love/public/src/app_calendar_url_ids.mjs";
import { playwright_session_load } from "../../../love/public/src/playwright_session_load.mjs";
import { playwright_session_save_facebook_name } from "../../../love/public/src/playwright_session_save_facebook_name.mjs";
export async function playwright_session_load_facebook_preaching_ask() {
  let url_ids_all = await app_calendar_url_ids();
  let lookup = await app_calendar_preaching_ask_lookup_get();
  const session_name = playwright_session_save_facebook_name();
  const r = await playwright_session_load(session_name);
  let browser = property_get(r, "browser");
  let page = property_get(r, "page");
  async function lambda(url_id) {
    const url_goto = "https://www.m.me/" + url_id;
    await http_sleep();
    await page.goto(url_goto);
    await page.waitForLoadState("domcontentloaded");
    let actual = await playwright_by_attribute_starts_with(
      page,
      "href",
      "https://www.facebook.com/",
    );
    log(playwright_session_load_facebook_preaching_ask.name, {
      actual,
    });
    return;
    const url = page.url();
    let v = property_initialize_empty(lookup, url_id);
    let property = app_calendar_facebook_conversation_url();
    property_set_exists_not(v, property, url);
    await app_calendar_preaching_ask_lookup_overwrite(lookup);
  }
  await each_async(url_ids_all, lambda);
  await browser.close();
}
