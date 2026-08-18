import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_verify_home_view } from "./app_g_verify_home_view.mjs";
import { property_get } from "./property_get.mjs";
export function app_g_verify_home_chapter() {
  arguments_assert(arguments, 0);
  let r3 = app_g_verify_home_view();
  let view = property_get(r3, "view");
  let chapter_codes = property_get(r3, "chapter_codes");
  let chapter_code = property_get(r3, "chapter_code");
  let storage_key = property_get(r3, "storage_key");
  let selected_key = property_get(r3, "selected_key");
  let advanced_for = property_get(r3, "advanced_for");
  let chapter_advance_armed = property_get(r3, "chapter_advance_armed");
  let shown_json = property_get(r3, "shown_json");
  let poll_timer = property_get(r3, "poll_timer");
  let chapter = property_get(r3, "chapter");
  let r = {
    r3,
    view,
    chapter_codes,
    chapter_code,
    storage_key,
    selected_key,
    advanced_for,
    chapter_advance_armed,
    shown_json,
    poll_timer,
    chapter,
  };
  return r;
}
