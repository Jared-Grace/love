import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function app_g_verify_home_status(r4) {
  arguments_assert(arguments, 1);
  let chapter = property_get(r4, "chapter");
  let poll_timer = property_get(r4, "poll_timer");
  let shown_json = property_get(r4, "shown_json");
  let chapter_advance_armed = property_get(r4, "chapter_advance_armed");
  let advanced_for = property_get(r4, "advanced_for");
  let selected_key = property_get(r4, "selected_key");
  let storage_key = property_get(r4, "storage_key");
  let chapter_code = property_get(r4, "chapter_code");
  let chapter_codes = property_get(r4, "chapter_codes");
  let view = property_get(r4, "view");
  let r3 = property_get(r4, "r3");
  let status = property_get(r3, "status");
  let r = {
    chapter,
    poll_timer,
    shown_json,
    chapter_advance_armed,
    advanced_for,
    selected_key,
    storage_key,
    chapter_code,
    chapter_codes,
    view,
    r3,
    status,
  };
  return r;
}
