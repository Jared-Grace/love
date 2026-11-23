import { math_min } from "./math_min.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
import { subtract } from "./subtract.mjs";
export function html_canvas_draw_contain(
  ctx,
  source,
  source_width,
  source_height,
  width,
  height,
) {
  "$plain ctx source source_width source_height width height";
  "Draws the whole of source inside the width by height area, as large as it can go without cutting any of it off, centred - so a picture of another shape leaves empty bars on two sides rather than losing its edges. The picture is never stretched: it is scaled by the smaller of the two ratios, so the side that fits best just touches its edge.";
  arguments_assert(arguments, 6);
  let scale_x = divide(width, source_width);
  let scale_y = divide(height, source_height);
  let scale = math_min(scale_x, scale_y);
  let drawn_width = multiply(source_width, scale);
  let drawn_height = multiply(source_height, scale);
  let top2 = subtract(width, drawn_width);
  let left = divide(top2, 2);
  let top3 = subtract(height, drawn_height);
  let top = divide(top3, 2);
  ctx.drawImage(source, left, top, drawn_width, drawn_height);
}
