import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_verify_home_chapter } from "./app_g_verify_home_chapter.mjs";
import { app_g_verify_home_status } from "./app_g_verify_home_status.mjs";
import { property_get } from "./property_get.mjs";
export function app_g_verify_home_shown_json() {
  arguments_assert(arguments, 0);
  let r4 = app_g_verify_home_chapter();
  let r5 = app_g_verify_home_status(r4);
  let status = property_get(r5, "status");
  let r3 = property_get(r5, "r3");
  let view = property_get(r5, "view");
  let chapter_codes = property_get(r5, "chapter_codes");
  let chapter_code = property_get(r5, "chapter_code");
  let storage_key = property_get(r5, "storage_key");
  let selected_key = property_get(r5, "selected_key");
  let advanced_for = property_get(r5, "advanced_for");
  let chapter_advance_armed = property_get(r5, "chapter_advance_armed");
  let shown_json = property_get(r5, "shown_json");
  let r = {
    r5,
    status,
    r3,
    view,
    chapter_codes,
    chapter_code,
    storage_key,
    selected_key,
    advanced_for,
    chapter_advance_armed,
    shown_json,
  };
  return r;
}
