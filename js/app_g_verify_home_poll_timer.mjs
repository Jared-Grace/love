import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function app_g_verify_home_poll_timer(r4) {
  arguments_assert(arguments, 1);
  let status = property_get(r4, "status");
  let view = property_get(r4, "view");
  let selected_key = property_get(r4, "selected_key");
  let advanced_for = property_get(r4, "advanced_for");
  let chapter_advance_armed = property_get(r4, "chapter_advance_armed");
  let shown_json = property_get(r4, "shown_json");
  let chapter = property_get(r4, "chapter3");
  let poll_timer3 = property_get(r4, "poll_timer3");
  let storage_key = property_get(r4, "storage_key");
  let chapter_code = property_get(r4, "chapter_code2");
  let r32 = property_get(r4, "r32");
  let chapter_codes = property_get(r4, "chapter_codes");
  let poll_timer = poll_timer3;
  let r = {
    status,
    view,
    selected_key,
    advanced_for,
    chapter_advance_armed,
    shown_json,
    chapter3: chapter,
    storage_key,
    chapter_code2: chapter_code,
    r32,
    chapter_codes,
    poll_timer,
  };
  return r;
}
