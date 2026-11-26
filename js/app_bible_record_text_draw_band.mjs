import { arguments_assert } from "./arguments_assert.mjs";
import { multiply } from "./multiply.mjs";
import { app_bible_record_text_layout_band } from "./app_bible_record_text_layout_band.mjs";
import { app_bible_record_text_draw_layout } from "./app_bible_record_text_draw_layout.mjs";
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
  app_bible_record_text_draw_layout(ctx, width, reference, layout, 0);
}
