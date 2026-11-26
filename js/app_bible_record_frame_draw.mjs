import { arguments_assert } from "./arguments_assert.mjs";
import { greater_than } from "./greater_than.mjs";
import { html_canvas_draw_cover } from "./html_canvas_draw_cover.mjs";
import { html_canvas_draw_contain_top } from "./html_canvas_draw_contain_top.mjs";
import { app_bible_record_text_draw_below } from "./app_bible_record_text_draw_below.mjs";
export function app_bible_record_frame_draw(
  ctx,
  camera_element,
  width,
  height,
  reference,
  text,
) {
  "One frame of the recorder: the camera picture as it is right now, mirrored and fitted, with the passage drawn in the room left beneath it. Nothing is drawn until the camera has a picture to give, so the canvas keeps its last frame rather than flashing black.";
  arguments_assert(arguments, 6);
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
