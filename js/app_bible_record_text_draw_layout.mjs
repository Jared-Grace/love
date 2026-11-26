import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_color_black_behind_words } from "./app_shared_color_black_behind_words.mjs";
import { multiply } from "./multiply.mjs";
export function app_bible_record_text_draw_layout(
  ctx,
  width,
  reference,
  layout,
  top,
) {
  "$plain ctx width reference layout top";
  "Paints a passage already laid out: a clear dark band layout's band tall, starting top down from the frame's top, with the reference small at its top and the lines beneath it in white.";
  arguments_assert(arguments, 5);
  let margin = property_get(layout, "margin");
  let size = property_get(layout, "size");
  let lines = property_get(layout, "lines");
  let reference_size = property_get(layout, "reference_size");
  let line_height = property_get(layout, "line_height");
  let band = property_get(layout, "band");
  ctx.fillStyle = app_shared_color_black_behind_words();
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
