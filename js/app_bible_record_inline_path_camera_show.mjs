import { app_bible_record_inline_path_camera_show_native_done } from "./app_bible_record_inline_path_camera_show_native_done.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { html_display_none } from "./html_display_none.mjs";
import { app_bible_record_inline_path_changed } from "./app_bible_record_inline_path_changed.mjs";
import { app_bible_record_passage } from "./app_bible_record_passage.mjs";
import { app_bible_record_native_is } from "./app_bible_record_native_is.mjs";
import { text_combine } from "./text_combine.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { html_display_block } from "./html_display_block.mjs";
import { app_bible_record_native_open } from "./app_bible_record_native_open.mjs";
import { html_camera_microphone_stream } from "./html_camera_microphone_stream.mjs";
import { app_bible_record_frame_size } from "./app_bible_record_frame_size.mjs";
import { html_request_animation_frame } from "./html_request_animation_frame.mjs";
import { greater_than } from "./greater_than.mjs";
import { html_canvas_draw_cover } from "./html_canvas_draw_cover.mjs";
import { html_canvas_draw_contain_top } from "./html_canvas_draw_contain_top.mjs";
import { app_bible_record_text_draw_below } from "./app_bible_record_text_draw_below.mjs";
export async function app_bible_record_inline_path_camera_show(
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
) {
  arguments_assert(arguments, 12);
  if (property_get(held, "camera_on")) {
    return;
  }
  property_set(held, "camera_on", true);
  playback_element.pause();
  html_display_none(playback);
  let blob = property_get(held, "blob");
  app_bible_record_inline_path_changed(entry, blob, refreshes);
  let passage = await app_bible_record_passage(chapter_code, verse_numbers);
  let reference = property_get(passage, "reference");
  let text = property_get(passage, "text");
  ("INSIDE THE ANDROID APP, THE APP FILMS (human 2026-11-23): a phone's browser only gave a wide, zoomed picture, and the app (android/record) opens the camera upright and whole. The app shows its own camera screen with these same words over it; this page gets the take back and plays and sends it as it would its own. A project is chosen first, because a take sent without one has nowhere to go.");
  if (app_bible_record_native_is()) {
    property_set(held, "camera_on", false);
    let blob6 = property_get(held, "blob");
    app_bible_record_inline_path_changed(entry, blob6, refreshes);
    async function native_done(taken, why) {
      let r = await app_bible_record_inline_path_camera_show_native_done(
        taken,
        why,
        problem,
        held,
        playback,
        entry,
        refreshes,
        chapter_code,
        verse_numbers,
      );
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
    let camera_width = camera_element.videoWidth;
    let camera_height = camera_element.videoHeight;
    if (greater_than(camera_width, 0)) {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, width, height);
      ("an upright camera picture fills the frame, losing only a little at its sides; a wide one is fitted whole, because filling with it is the heavy zoom on a face");
      let upright = greater_than(camera_height, camera_width);
      ("a wide one sits against the top, so the black left over is all beneath it and the words fill that (human 2026-11-23) rather than leaving an empty strip above the face");
      let below = height;
      ("THE PICTURE IS MIRRORED, like a mirror or a phone's selfie camera (human 2026-11-23: can it be mirrored?), so moving left moves left on the screen and the face is the one its owner knows. Only the picture is turned, never the words, and the recording keeps it mirrored too, because what is recorded is this canvas. REJECTED: mirroring only the screen and saving the camera's true view - the take would not match what was set up in the preview.");
      ctx.save();
      ctx.translate(width, 0);
      ctx.scale(-1, 1);
      if (upright) {
        html_canvas_draw_cover(
          ctx,
          camera_element,
          camera_width,
          camera_height,
          width,
          height,
        );
      } else {
        ("THE WHOLE WIDTH OF THE CAMERA PICTURE IS SHOWN, at the top, and the words grow to fill what is left beneath it (human 2026-11-23: camera zoomed in). REJECTED: the picture filling all the room above the words (what this replaced) - it trimmed the wide picture's sides, which is a zoom on the face, the complaint made twice now. The cost: a wide picture in an upright frame can only be a little under half its height, and the bigger words take the rest.");
        below = html_canvas_draw_contain_top(
          ctx,
          camera_element,
          camera_width,
          camera_height,
          width,
          height,
        );
      }
      ctx.restore();
      app_bible_record_text_draw_below(
        ctx,
        width,
        height,
        reference,
        text,
        below,
      );
    }
  }
}
