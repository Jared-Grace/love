import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_verify_home_selected_key } from "./app_g_verify_home_selected_key.mjs";
import { property_get } from "./property_get.mjs";
export function app_g_verify_home_chapter_codes() {
  arguments_assert(arguments, 0);
  let r3 = app_g_verify_home_selected_key();
  let selected_key = property_get(r3, "selected_key");
  let advanced_for = property_get(r3, "advanced_for");
  let chapter_advance_armed = property_get(r3, "chapter_advance_armed");
  let shown_json = property_get(r3, "shown_json");
  let status = property_get(r3, "status2");
  let chapter = property_get(r3, "chapter3");
  let poll_timer = property_get(r3, "poll_timer3");
  let storage_key = property_get(r3, "storage_key");
  let chapter_code = property_get(r3, "chapter_code2");
  let chapter_codes2 = property_get(r3, "chapter_codes2");
  let view = property_get(r3, "view2");
  let r32 = property_get(r3, "r32");
  let chapter_codes = chapter_codes2;
  let r = {
    selected_key,
    advanced_for,
    chapter_advance_armed,
    shown_json,
    status2: status,
    chapter3: chapter,
    poll_timer3: poll_timer,
    storage_key,
    chapter_code2: chapter_code,
    view2: view,
    r32,
    chapter_codes,
  };
  return r;
}
