import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { html_pixels_text } from "./html_pixels_text.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function html_pixels_point_text(point) {
  arguments_assert(arguments, 1);
  ("a point written the way a style names a place: its across and its down, each in pixels, with a space between - as a gradient's centre or a transform's origin wants it");
  let x = property_get(point, "x");
  let y = property_get(point, "y");
  let across = html_pixels_text(x);
  let down = html_pixels_text(y);
  let at = text_combine_multiple([across, " ", down]);
  return at;
}
