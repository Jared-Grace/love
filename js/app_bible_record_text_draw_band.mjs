import { arguments_assert } from "./arguments_assert.mjs";
import { multiply } from "./multiply.mjs";
import { app_bible_record_text_layout_band } from "./app_bible_record_text_layout_band.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_color_black_behind_words } from "./app_shared_color_black_behind_words.mjs";
export function app_bible_record_text_draw_band(
  ctx,
  width,
  height,
  reference,
  text,
) {
  "$plain ctx width height reference text";
  "The passage laid over one frame of the video in the band the Android app paints: 40% of the height, across the top, a clear dark shade with the picture showing through, the reference small at its top and the words beneath it in white (human 2026-11-26, on an iPhone's browser: text should be above, and it doesn't have opacity). Laid out by the same layout the app is handed, so a take looks the same whichever one filmed it.";
  arguments_assert(arguments, 5);
  let band = multiply(height, 0.4);
  let layout = app_bible_record_text_layout_band(ctx, width, text, band);
  let margin = property_get(layout, "margin");
  let size = property_get(layout, "size");
  let lines = property_get(layout, "lines");
  let reference_size = property_get(layout, "reference_size");
  let line_height = property_get(layout, "line_height");
  ctx.fillStyle = app_shared_color_black_behind_words();
  ctx.fillRect(0, 0, width, band);
  ctx.fillStyle = "white";
  ctx.textBaseline = "top";
  ctx.font = "bold " + reference_size + "px sans-serif";
  let p = multiply(margin, 0.6);
  ctx.fillText(reference, margin, p);
  ctx.font = size + "px sans-serif";
  let y = multiply(margin, 0.6) + multiply(reference_size, 1.4);
  for (let line of lines) {
    ctx.fillText(line, margin, y);
    y = y + line_height;
  }
}
