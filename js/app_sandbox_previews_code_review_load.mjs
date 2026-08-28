import { arguments_assert } from "./arguments_assert.mjs";
import { app_sandbox_previews_dream_prison_load } from "./app_sandbox_previews_dream_prison_load.mjs";
import { property_get } from "./property_get.mjs";
export function app_sandbox_previews_code_review_load() {
  arguments_assert(arguments, 0);
  let r2 = app_sandbox_previews_dream_prison_load();
  let dream_prison_load = property_get(r2, "dream_prison_load");
  let dream_trace_load = property_get(r2, "dream_trace_load");
  let second_takes_load = property_get(r2, "second_takes_load");
  let song_image_audit_load = property_get(r2, "song_image_audit_load");
  let song_image_choose_load = property_get(r2, "song_image_choose_load");
  let availability_editor_load = property_get(r2, "availability_editor_load");
  let week_calendar_load = property_get(r2, "week_calendar_load");
  async function typing_box_load() {
    let m = await import("./typing_box_preview.mjs");
    let r9 = m.typing_box_preview;
    return r9;
  }
  async function song_image_review_load() {
    let m = await import("./song_image_review_preview.mjs");
    let r11 = m.song_image_review_preview;
    return r11;
  }
  async function code_review_load() {
    let m = await import("./app_code_review_preview.mjs");
    let r10 = m.app_code_review_preview;
    return r10;
  }
  let r = {
    dream_prison_load,
    dream_trace_load,
    second_takes_load,
    song_image_audit_load,
    song_image_choose_load,
    availability_editor_load,
    week_calendar_load,
    typing_box_load,
    song_image_review_load,
    code_review_load,
  };
  return r;
}
