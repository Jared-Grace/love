import { arguments_assert } from "./arguments_assert.mjs";
import { divide } from "./divide.mjs";
import { math_max } from "./math_max.mjs";
import { html_canvas_drawn_centred_across } from "./html_canvas_drawn_centred_across.mjs";
import { property_get } from "./property_get.mjs";
import { subtract } from "./subtract.mjs";
export function html_canvas_draw_cover(
  ctx,
  source,
  source_width,
  source_height,
  width,
  height,
) {
  "$plain ctx source source_width source_height width height";
  "Draws source so it fills the whole width by height area with no empty bars, cutting off whatever sticks out, equally from both sides - the way a photo is cropped to fit a frame of another shape. The picture is never stretched: it is scaled by the larger of the two ratios, so the side that fits worst still just fills its edge.";
  arguments_assert(arguments, 6);
  let scale_x = divide(width, source_width);
  let scale_y = divide(height, source_height);
  let scale = math_max(scale_x, scale_y);
  let drawn = html_canvas_drawn_centred_across(
    source_width,
    source_height,
    width,
    scale,
  );
  let drawn_width = property_get(drawn, "drawn_width");
  let drawn_height = property_get(drawn, "drawn_height");
  let left = property_get(drawn, "left");
  let top3 = subtract(height, drawn_height);
  let top = divide(top3, 2);
  ctx.drawImage(source, left, top, drawn_width, drawn_height);
}
