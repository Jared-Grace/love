import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_verify_home_chapter_codes } from "./app_g_verify_home_chapter_codes.mjs";
import { app_g_verify_home_status } from "./app_g_verify_home_status.mjs";
import { app_g_verify_home_poll_timer } from "./app_g_verify_home_poll_timer.mjs";
import { app_g_verify_home_chapter } from "./app_g_verify_home_chapter.mjs";
import { property_get } from "./property_get.mjs";
export function app_g_verify_home_storage_key() {
  arguments_assert(arguments, 0);
  let r3 = app_g_verify_home_chapter_codes();
  let r4 = app_g_verify_home_status(r3);
  let r5 = app_g_verify_home_poll_timer(r4);
  let r6 = app_g_verify_home_chapter(r5);
  let chapter = property_get(r6, "chapter");
  let status = property_get(r6, "status");
  let view = property_get(r6, "view");
  let selected_key = property_get(r6, "selected_key");
  let advanced_for = property_get(r6, "advanced_for");
  let chapter_advance_armed = property_get(r6, "chapter_advance_armed");
  let shown_json = property_get(r6, "shown_json");
  let storage_key = property_get(r6, "storage_key");
  let r = {
    r6,
    chapter,
    status,
    view,
    selected_key,
    advanced_for,
    chapter_advance_armed,
    shown_json,
    storage_key,
  };
  return r;
}
