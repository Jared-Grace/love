import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_bible_record_inline_path_camera_show_passage } from "./app_bible_record_inline_path_camera_show_passage.mjs";
import { app_bible_record_native_is } from "./app_bible_record_native_is.mjs";
import { property_set } from "./property_set.mjs";
import { app_bible_record_inline_path_changed } from "./app_bible_record_inline_path_changed.mjs";
import { app_bible_record_inline_path_camera_show_native_done } from "./app_bible_record_inline_path_camera_show_native_done.mjs";
import { app_bible_record_native_open } from "./app_bible_record_native_open.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { html_camera_microphone_stream } from "./html_camera_microphone_stream.mjs";
import { text_combine } from "./text_combine.mjs";
import { html_display_block } from "./html_display_block.mjs";
import { app_bible_record_frame_size } from "./app_bible_record_frame_size.mjs";
import { html_request_animation_frame } from "./html_request_animation_frame.mjs";
import { app_bible_record_frame_draw } from "./app_bible_record_frame_draw.mjs";
export async function app_bible_record_inline_path_camera_show({
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
  arguments_assert(arguments, 1);
  if (property_get(held, "camera_on")) {
    return;
  }
  let passage = await app_bible_record_inline_path_camera_show_passage(
    held,
    playback_element,
    playback,
    entry,
    refreshes,
    chapter_code,
    verse_numbers,
  );
  let reference = property_get(passage, "reference");
  let text = property_get(passage, "text");
  ("INSIDE THE ANDROID APP, THE APP FILMS (human 2026-11-23): a phone's browser only gave a wide, zoomed picture, and the app (android/record) opens the camera upright and whole. The app shows its own camera screen with these same words over it; this page gets the take back and plays and sends it as it would its own. A project is chosen first, because a take sent without one has nowhere to go.");
  if (app_bible_record_native_is()) {
    property_set(held, "camera_on", false);
    let blob = property_get(held, "blob");
    app_bible_record_inline_path_changed(entry, blob, refreshes);
    async function native_done(taken, why) {
      let r = await app_bible_record_inline_path_camera_show_native_done({
        taken,
        why,
        problem,
        held,
        playback,
        entry,
        refreshes,
        chapter_code,
        verse_numbers,
      });
      return r;
    }
    function native_open() {
      app_bible_record_native_open(reference, text, native_done);
    }
    project_ensure(native_open);
    return;
  }
  ("A CAMERA THAT WILL NOT OPEN SAYS WHY, under the buttons, and Show camera comes back so it can be tried again (human 2026-11-23: the camera isn't working on computer - and nothing on the page said why). The usual reasons are all outside this page - an address that is not https, permission refused, no camera, or another program holding it - so the browser's own words are shown as they are.");
  html_text_set(problem, "");
  try {
    let value = await html_camera_microphone_stream();
    property_set(held, "stream", value);
  } catch (e) {
    property_set(held, "camera_on", false);
    let said = text_combine("The camera did not open: ", e.message);
    html_text_set(problem, said);
    let blob8 = property_get(held, "blob");
    app_bible_record_inline_path_changed(entry, blob8, refreshes);
    return;
  }
  camera_element.srcObject = property_get(held, "stream");
  camera_element.play();
  html_display_block(canvas);
  ("every take is upright 9:16 whatever shape the camera sends, so it can go up as a YouTube Short");
  ("THE WHOLE CAMERA PICTURE IS SHOWN, never cropped (human 2026-11-23: camera is very zoomed in on my face). Filling the upright frame from a wide camera picture keeps only its middle third, which is a close-up of a face. So the picture is fitted inside the frame and the rest left black - the text band then sits on the black below it rather than across the face.");
  ("REJECTED: cropping to fill (what this replaced) - the zoom it causes is the complaint. Asking the camera for an upright picture instead - a browser treats the request as a wish, and a phone that still sends a wide picture would be cropped again.");
  let size = app_bible_record_frame_size();
  let width = property_get(size, "width");
  let height = property_get(size, "height");
  canvas_element.width = width;
  canvas_element.height = height;
  let ctx = canvas_element.getContext("2d");
  while (property_get(held, "camera_on")) {
    await html_request_animation_frame();
    app_bible_record_frame_draw(
      ctx,
      camera_element,
      width,
      height,
      reference,
      text,
    );
  }
}
