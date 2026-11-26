import { arguments_assert } from "./arguments_assert.mjs";
import { greater_than } from "./greater_than.mjs";
import { html_canvas_draw_cover } from "./html_canvas_draw_cover.mjs";
import { multiply } from "./multiply.mjs";
import { html_canvas_draw_contain_top } from "./html_canvas_draw_contain_top.mjs";
import { app_bible_record_text_draw_band } from "./app_bible_record_text_draw_band.mjs";
export function app_bible_record_frame_draw(
  ctx,
  camera_element,
  width,
  height,
  reference,
  text,
) {
  "One frame of the recorder: the camera picture as it is right now, mirrored and fitted, with the passage in a clear band across the top. Nothing is drawn until the camera has a picture to give, so the canvas keeps its last frame rather than flashing black.";
  arguments_assert(arguments, 6);
  let camera_width = camera_element.videoWidth;
  let camera_height = camera_element.videoHeight;
  if (greater_than(camera_width, 0)) {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, width, height);
    ("an upright camera picture fills the frame, losing only a little at its sides; a wide one is fitted whole, because filling with it is the heavy zoom on a face");
    let upright = greater_than(camera_height, camera_width);
    ("THE WORDS ARE ALWAYS ACROSS THE TOP, in a clear band, as the Android app paints them (human 2026-11-26, on an iPhone's browser: text should be above, and it doesn't have opacity). An upright picture shows through the band; a wide one sits straight under the band, whole, so the words never cover its face. REJECTED: the words beneath a wide picture (what this replaced, human 2026-11-23) - below the picture they lay on black, so the band's shade could not show, and they sat away from the lens.");
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
      let p = multiply(height, 0.4);
      ctx.translate(0, p);
      html_canvas_draw_contain_top(
        ctx,
        camera_element,
        camera_width,
        camera_height,
        width,
        height,
      );
    }
    ctx.restore();
    app_bible_record_text_draw_band(ctx, width, height, reference, text);
  }
}
