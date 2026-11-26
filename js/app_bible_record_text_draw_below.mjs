import { arguments_assert } from "./arguments_assert.mjs";
import { app_bible_record_text_layout } from "./app_bible_record_text_layout.mjs";
import { property_get } from "./property_get.mjs";
import { subtract } from "./subtract.mjs";
import { math_min } from "./math_min.mjs";
import { app_bible_record_text_draw_layout } from "./app_bible_record_text_draw_layout.mjs";
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
  let band = property_get(layout, "band");
  let b = subtract(height, band);
  let top = math_min(below, b);
  app_bible_record_text_draw_layout(ctx, width, reference, layout, top);
}
