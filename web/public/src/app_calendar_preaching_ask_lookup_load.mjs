import { list_includes } from "../../../love/public/src/list_includes.mjs";
import { playwright_by_tag_name_text_contents } from "../../../love/public/src/playwright_by_tag_name_text_contents.mjs";
import { list_remove_if_exists } from "../../../love/public/src/list_remove_if_exists.mjs";
import { property_exists_not_if_async } from "../../../love/public/src/property_exists_not_if_async.mjs";
import { app_calendar_facebook_name } from "../../../love/public/src/app_calendar_facebook_name.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
import { playwright_sleep_goto } from "../../../love/public/src/playwright_sleep_goto.mjs";
import { app_calendar_facebook_conversation_url } from "../../../love/public/src/app_calendar_facebook_conversation_url.mjs";
import { property_initialize_empty } from "../../../love/public/src/property_initialize_empty.mjs";
import { app_calendar_preaching_ask_lookup_overwrite } from "../../../love/public/src/app_calendar_preaching_ask_lookup_overwrite.mjs";
import { app_calendar_preaching_ask_lookup_get } from "../../../love/public/src/app_calendar_preaching_ask_lookup_get.mjs";
import { property_set_exists_not } from "../../../love/public/src/property_set_exists_not.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_calendar_url_ids } from "../../../love/public/src/app_calendar_url_ids.mjs";
import { playwright_session_load } from "../../../love/public/src/playwright_session_load.mjs";
import { playwright_session_save_facebook_name } from "../../../love/public/src/playwright_session_save_facebook_name.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export async function app_calendar_preaching_ask_lookup_load() {
  let url_ids_all = await app_calendar_url_ids();
  let lookup = await app_calendar_preaching_ask_lookup_get();
  const session_name = playwright_session_save_facebook_name();
  const r = await playwright_session_load(session_name);
  let browser = property_get(r, "browser");
  let page = property_get(r, "page");
  async function lambda(url_id) {
    let v = property_initialize_empty(lookup, url_id);
    let property_name = app_calendar_facebook_name();
    await property_exists_not_if_async(v, property_name, lambda2);
    async function lambda2() {
      const url_goto1 = text_combine("https://www.facebook.com/", url_id);
      await playwright_sleep_goto(page, url_goto1);
      let h = await playwright_by_tag_name_text_contents(page, "h2");
      let includes = list_includes(h, "This content isn't available right now");
      let name = null;
      if (includes) {
        property_set_exists_not(v, "unavailable", true);
        await app_calendar_preaching_ask_lookup_overwrite(lookup);
        name = "[Unavailable]";
      } else {
        let h1 = await playwright_by_tag_name_text_contents(page, "h1");
        list_remove_if_exists(h1, "Chats");
        name = list_single(h1);
      }
      property_set_exists_not(v, property_name, name);
      await app_calendar_preaching_ask_lookup_overwrite(lookup);
    }
    let property = app_calendar_facebook_conversation_url();
    async function lambda4() {
      const url_goto = text_combine("https://www.m.me/", url_id);
      await playwright_sleep_goto(page, url_goto);
      const url = page.url();
      property_set_exists_not(v, property, url);
      await app_calendar_preaching_ask_lookup_overwrite(lookup);
    }
    await property_exists_not_if_async(v, property, lambda4);
  }
  await each_async(url_ids_all, lambda);
  await browser.close();
}
