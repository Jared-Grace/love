import { arguments_assert } from "./arguments_assert.mjs";
export function app_sandbox_previews_dream_prison_load() {
  arguments_assert(arguments, 0);
  async function week_calendar_load() {
    let m = await import("./week_calendar_preview.mjs");
    let r2 = m.week_calendar_preview;
    return r2;
  }
  async function availability_editor_load() {
    let m = await import("./availability_editor_preview.mjs");
    let r3 = m.availability_editor_preview;
    return r3;
  }
  async function song_image_choose_load() {
    let m = await import("./song_image_choose_preview.mjs");
    let r4 = m.song_image_choose_preview;
    return r4;
  }
  async function song_image_audit_load() {
    let m = await import("./song_image_audit_preview.mjs");
    let r5 = m.song_image_audit_preview;
    return r5;
  }
  async function second_takes_load() {
    let m = await import("./psalms_second_takes_preview.mjs");
    let r6 = m.psalms_second_takes_preview;
    return r6;
  }
  async function dream_trace_load() {
    let m = await import("./bible_dream_trace_preview.mjs");
    let r7 = m.bible_dream_trace_preview;
    return r7;
  }
  async function dream_prison_load() {
    let m = await import("./bible_dream_prison_trace_preview.mjs");
    let r8 = m.bible_dream_prison_trace_preview;
    return r8;
  }
  let r = {
    week_calendar_load,
    availability_editor_load,
    song_image_choose_load,
    song_image_audit_load,
    second_takes_load,
    dream_trace_load,
    dream_prison_load,
  };
  return r;
}
