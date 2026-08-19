import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_verify_home_view } from "./app_g_verify_home_view.mjs";
import { property_get } from "./property_get.mjs";
export function app_g_verify_home_selected_key() {
  arguments_assert(arguments, 0);
  let r32 = app_g_verify_home_view();
  let view2 = property_get(r32, "view");
  let chapter_codes2 = property_get(r32, "chapter_codes");
  let chapter_code2 = property_get(r32, "chapter_code");
  let storage_key = property_get(r32, "storage_key");
  let selected_key2 = property_get(r32, "selected_key");
  let advanced_for2 = property_get(r32, "advanced_for");
  let chapter_advance_armed2 = property_get(r32, "chapter_advance_armed");
  let shown_json2 = property_get(r32, "shown_json");
  let poll_timer3 = property_get(r32, "poll_timer");
  let chapter3 = property_get(r32, "chapter");
  let status2 = property_get(r32, "status");
  let shown_json = shown_json2;
  let chapter_advance_armed = chapter_advance_armed2;
  let advanced_for = advanced_for2;
  let selected_key = selected_key2;
  return {
    r32,
    view2,
    chapter_codes2,
    chapter_code2,
    storage_key,
    poll_timer3,
    chapter3,
    status2,
    shown_json,
    chapter_advance_armed,
    advanced_for,
    selected_key,
  };
}
