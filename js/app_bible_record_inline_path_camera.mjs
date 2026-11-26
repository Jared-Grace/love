import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { app_bible_record_native_is } from "./app_bible_record_native_is.mjs";
import { each } from "./each.mjs";
import { html_display_none } from "./html_display_none.mjs";
import { app_bible_record_inline_path_camera_show } from "./app_bible_record_inline_path_camera_show.mjs";
import { app_bible_record_inline_path_start } from "./app_bible_record_inline_path_start.mjs";
import { app_bible_record_inline_path_finish } from "./app_bible_record_inline_path_finish.mjs";
export function app_bible_record_inline_path_camera({
  buttons,
  held,
  playback_element,
  playback,
  entry,
  refreshes,
  chapter_code,
  verse_numbers,
  problem,
  project_ensure,
  camera_element,
  canvas,
  canvas_element,
}) {
  "The recorder's camera buttons - show camera, record, stop - each wired to its step, and handed back so the redraw can fade them. held is the record every piece of the recorder shares, so a press of Stop here is seen by the camera loop while it waits.";
  arguments_assert(arguments, 1);
  ("A PREVIEW COMES FIRST (asked for by the human 2026-11-23): the camera opens on its own button and shows the very frame that will be recorded - picture, fit and text band - so the face and the light are set right before a take starts, rather than discovered on playback.");
  let camera_button = app_shared_button_wide(
    buttons,
    "📷 Show camera",
    camera_show,
  );
  let record_button = app_shared_button_wide(buttons, "", record);
  let stop_button = app_shared_button_wide(
    buttons,
    "⏹️ Stop recording",
    finish,
  );
  ("IN THE APP NO RECORD OR STOP: the Android app records on its own camera screen, which has Record and Stop of its own, so here they could only ever be faded.");
  if (app_bible_record_native_is()) {
    each([record_button, stop_button], html_display_none);
  }
  async function camera_show() {
    await app_bible_record_inline_path_camera_show(
      held,
      playback_element,
      playback,
      entry,
      refreshes,
      chapter_code,
      verse_numbers,
      problem,
      project_ensure,
      camera_element,
      canvas,
      canvas_element,
    );
  }
  function record() {
    project_ensure(start);
  }
  function start() {
    app_bible_record_inline_path_start(held, canvas_element, entry, refreshes);
  }
  async function finish() {
    await app_bible_record_inline_path_finish(
      held,
      canvas,
      playback,
      entry,
      refreshes,
      chapter_code,
      verse_numbers,
    );
  }
  let r = {
    camera_button,
    record_button,
    stop_button,
  };
  return r;
}
