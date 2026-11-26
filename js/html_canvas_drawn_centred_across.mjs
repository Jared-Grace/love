import { arguments_assert } from "./arguments_assert.mjs";
import { multiply } from "./multiply.mjs";
import { subtract } from "./subtract.mjs";
import { divide } from "./divide.mjs";
export function html_canvas_drawn_centred_across(
  source_width,
  source_height,
  width,
  scale,
) {
  "$plain source_width source_height width scale";
  "How big a picture comes out once scaled, and how far in from the left it starts so it sits centred across an area width wide: the part every way of fitting a picture into an area shares, whichever ratio chose the scale.";
  arguments_assert(arguments, 4);
  let drawn_width = multiply(source_width, scale);
  let drawn_height = multiply(source_height, scale);
  let spare = subtract(width, drawn_width);
  let left = divide(spare, 2);
  let r = {
    drawn_width,
    drawn_height,
    left,
  };
  return r;
}
