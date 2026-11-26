import { arguments_assert } from "./arguments_assert.mjs";
import { divide } from "./divide.mjs";
import { math_min } from "./math_min.mjs";
import { html_canvas_drawn_centred_across } from "./html_canvas_drawn_centred_across.mjs";
import { property_get } from "./property_get.mjs";
export function html_canvas_draw_contain_top(
  ctx,
  source,
  source_width,
  source_height,
  width,
  height,
) {
  "$plain ctx source source_width source_height width height";
  "Draws the whole of source inside the width by height area, as large as it can go without cutting any of it off, centred across but against the top - so a picture wider than the area leaves its empty space all below it, in one piece, where something else can go. Returns how far down the picture reaches.";
  "Never stretched: scaled by the smaller of the two ratios, so the side that fits best just touches its edge.";
  arguments_assert(arguments, 6);
  let scale_x = divide(width, source_width);
  let scale_y = divide(height, source_height);
  let scale = math_min(scale_x, scale_y);
  let drawn = html_canvas_drawn_centred_across(
    source_width,
    source_height,
    width,
    scale,
  );
  let drawn_width = property_get(drawn, "drawn_width");
  let drawn_height = property_get(drawn, "drawn_height");
  let left = property_get(drawn, "left");
  ctx.drawImage(source, left, 0, drawn_width, drawn_height);
  return drawn_height;
}
