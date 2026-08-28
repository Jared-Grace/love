import { arguments_assert } from "./arguments_assert.mjs";
import { g_img_square_style_position } from "./g_img_square_style_position.mjs";
import { property_get } from "./property_get.mjs";
import { g_img_square_size_css } from "./g_img_square_size_css.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export function g_img_rectangle_style_position(component, rectangle, z) {
  arguments_assert(arguments, 3);
  ("Places and sizes one block of ground that is several squares wide or deep, the way a");
  ("single square is placed and sized.");
  ("It is the square placer with the size written over afterwards, rather than a second way");
  ("of placing things. Everything about WHERE a thing sits on this map - the sum the corner");
  ("is worked out from, the layer, the row added to the depth so people in front are drawn");
  ("in front - is decided in one place and must go on being decided there. Only how much");
  ("ground the thing covers is different here, and that is the one thing written over.");
  ("Both sides are counted in squares and turned into a sum the browser redoes, for the same");
  ("reason the corner is: the map is drawn at whatever size the screen has room for, and a");
  ("block written in pixels would be the right size on the phone it was measured on.");
  g_img_square_style_position(component, rectangle, z);
  let across = property_get(rectangle, "across");
  let down = property_get(rectangle, "down");
  let size = g_img_square_size_css();
  let width = text_combine_multiple(["calc(", across, " * (", size, "))"]);
  let height = text_combine_multiple(["calc(", down, " * (", size, "))"]);
  html_style_assign(component, {
    width: width,
    height: height,
  });
}
