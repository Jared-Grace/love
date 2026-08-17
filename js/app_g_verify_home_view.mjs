import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_verify_home_chapter_state } from "./app_g_verify_home_chapter_state.mjs";
import { property_get } from "./property_get.mjs";
export function app_g_verify_home_view() {
  arguments_assert(arguments, 0);
  let r3 = app_g_verify_home_chapter_state();
  let chapter_state = property_get(r3, "chapter_state");
  let status = property_get(r3, "status");
  let chapter = property_get(r3, "chapter");
  let poll_timer = property_get(r3, "poll_timer");
  let shown_json = property_get(r3, "shown_json");
  let chapter_advance_armed = property_get(r3, "chapter_advance_armed");
  let advanced_for = property_get(r3, "advanced_for");
  let selected_key = property_get(r3, "selected_key");
  let storage_key = property_get(r3, "storage_key");
  let chapter_code = property_get(r3, "chapter_code");
  let chapter_codes = null;
  let view = null;
  let r = {
    chapter_state,
    status,
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
  };
  return r;
}
