import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function app_g_verify_home_chapter(r5) {
  arguments_assert(arguments, 1);
  let poll_timer = property_get(r5, "poll_timer");
  let chapter_codes = property_get(r5, "chapter_codes");
  let r32 = property_get(r5, "r32");
  let chapter_code = property_get(r5, "chapter_code2");
  let storage_key = property_get(r5, "storage_key");
  let chapter3 = property_get(r5, "chapter3");
  let shown_json = property_get(r5, "shown_json");
  let chapter_advance_armed = property_get(r5, "chapter_advance_armed");
  let advanced_for = property_get(r5, "advanced_for");
  let selected_key = property_get(r5, "selected_key");
  let view = property_get(r5, "view");
  let status = property_get(r5, "status");
  let chapter = chapter3;
  let r = {
    poll_timer,
    chapter_codes,
    r32,
    chapter_code2: chapter_code,
    storage_key,
    shown_json,
    chapter_advance_armed,
    advanced_for,
    selected_key,
    view,
    status,
    chapter,
  };
  return r;
}
