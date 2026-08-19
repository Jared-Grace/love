import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function app_g_verify_home_status(r3) {
  arguments_assert(arguments, 1);
  let chapter_codes = property_get(r3, "chapter_codes");
  let r32 = property_get(r3, "r32");
  let view2 = property_get(r3, "view2");
  let chapter_code = property_get(r3, "chapter_code2");
  let storage_key = property_get(r3, "storage_key");
  let poll_timer = property_get(r3, "poll_timer3");
  let chapter = property_get(r3, "chapter3");
  let status2 = property_get(r3, "status2");
  let shown_json = property_get(r3, "shown_json");
  let chapter_advance_armed = property_get(r3, "chapter_advance_armed");
  let advanced_for = property_get(r3, "advanced_for");
  let selected_key = property_get(r3, "selected_key");
  let view = view2;
  let status = status2;
  let r = {
    chapter_codes,
    r32,
    chapter_code2: chapter_code,
    storage_key,
    poll_timer3: poll_timer,
    chapter3: chapter,
    shown_json,
    chapter_advance_armed,
    advanced_for,
    selected_key,
    view,
    status,
  };
  return r;
}
