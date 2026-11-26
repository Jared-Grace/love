import { arguments_assert } from "./arguments_assert.mjs";
import { html_canvas_drawn_centred_across } from "./html_canvas_drawn_centred_across.mjs";
import { property_get } from "./property_get.mjs";
import { subtract } from "./subtract.mjs";
import { multiply } from "./multiply.mjs";
export function html_canvas_draw_scaled({
  ctx,
  source,
  source_width,
  source_height,
  width,
  height,
  scale,
  down,
}) {
  "Draws a picture onto a canvas at the given scale, centred across, and placed down the frame by down - the share of the height left over that goes above it: 0 puts it against the top, a half centres it. Hands back how tall it was drawn, so what goes beneath it knows where to start.";
  arguments_assert(arguments, 1);
  let drawn = html_canvas_drawn_centred_across(
    source_width,
    source_height,
    width,
    scale,
  );
  let drawn_width = property_get(drawn, "drawn_width");
  let drawn_height = property_get(drawn, "drawn_height");
  let left = property_get(drawn, "left");
  let spare = subtract(height, drawn_height);
  let top = multiply(spare, down);
  ctx.drawImage(source, left, top, drawn_width, drawn_height);
  return drawn_height;
}
