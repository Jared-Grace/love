import { file_read_json_exists_ensure } from "../../../love/public/src/file_read_json_exists_ensure.mjs";
import { file_overwrite_json } from "../../../love/public/src/file_overwrite_json.mjs";
import { property_set_exists_not } from "../../../love/public/src/property_set_exists_not.mjs";
import { folder_user_docs_path } from "../../../love/public/src/folder_user_docs_path.mjs";
import { http_sleep } from "../../../love/public/src/http_sleep.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_calendar_url_ids } from "../../../love/public/src/app_calendar_url_ids.mjs";
import { playwright_session_load } from "../../../love/public/src/playwright_session_load.mjs";
import { playwright_session_save_facebook_name } from "../../../love/public/src/playwright_session_save_facebook_name.mjs";
export async function playwright_session_load_facebook() {
  let url_ids = await app_calendar_url_ids();
  let file_path = folder_user_docs_path("preaching_ask.lookup.json");
  let lookup = await file_read_json_exists_ensure(file_path);
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
    property_set_exists_not(lookup, url_id, url);
    await file_overwrite_json(file_path, lookup);
  }
  await each_async(url_ids, lambda);
  await browser.close();
}
