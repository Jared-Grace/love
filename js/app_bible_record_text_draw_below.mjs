import { math_min } from "./math_min.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_bible_record_text_layout } from "./app_bible_record_text_layout.mjs";
import { property_get } from "./property_get.mjs";
import { subtract } from "./subtract.mjs";
import { multiply } from "./multiply.mjs";
export function app_bible_record_text_draw_below(
  ctx,
  width,
  height,
  reference,
  text,
  below,
) {
  "$plain ctx width height reference text below";
  "The passage laid over one frame of the video: a dark band with the reference small at its top and the words beneath it in white, starting right under the picture - below is where the camera picture ends, counted down from the top of the frame.";
  "WHY IT STARTS UNDER THE PICTURE (asked for by the human 2026-11-23): a phone browser that only sends a wide camera picture leaves a tall frame with empty black under it; the picture is drawn at the top and the words fill that black straight beneath, so there is no empty strip and the words never cover the face. A picture that fills the whole frame passes below as the frame's height, and the band then sits at the bottom over the picture, as it always did.";
  "It is drawn into the frame itself rather than floated over the camera, because what is recorded is the canvas - text floated above it would show on this screen and be missing from the saved video.";
  arguments_assert(arguments, 6);
  let layout = app_bible_record_text_layout(ctx, width, height, text, below);
  let margin = property_get(layout, "margin");
  let size = property_get(layout, "size");
  let lines = property_get(layout, "lines");
  let reference_size = property_get(layout, "reference_size");
  let line_height = property_get(layout, "line_height");
  let band = property_get(layout, "band");
  let b = subtract(height, band);
  let top = math_min(below, b);
  ctx.fillStyle = "rgba(0, 0, 0, 0.55)";
  ctx.fillRect(0, top, width, band);
  ctx.fillStyle = "white";
  ctx.textBaseline = "top";
  ctx.font = "bold " + reference_size + "px sans-serif";
  ctx.fillText(reference, margin, top + multiply(margin, 0.6));
  ctx.font = size + "px sans-serif";
  let y = top + multiply(margin, 0.6) + multiply(reference_size, 1.4);
  for (let line of lines) {
    ctx.fillText(line, margin, y);
    y = y + line_height;
  }
}
