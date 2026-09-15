import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { property_get } from "./property_get.mjs";
import { g_img_square_size_times } from "./g_img_square_size_times.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_pixels_text } from "./html_pixels_text.mjs";
import { html_text_set } from "./html_text_set.mjs";
export function app_g_hero_sprite(fx, point, text, tiles) {
  arguments_assert(arguments, 4);
  ("One symbol drawn on the fire sheet, centred on a point and sized in map tiles.");
  ("The box has no size of its own and the symbol is centred over it, so growing or turning the box happens around the point itself rather than around a corner.");
  let sprite = html_div(fx);
  let x = property_get(point, "x");
  let y = property_get(point, "y");
  let font_size = g_img_square_size_times(tiles);
  html_style_assign(sprite, {
    position: "absolute",
    left: html_pixels_text(x),
    top: html_pixels_text(y),
    width: "0",
    height: "0",
    display: "flex",
    "align-items": "center",
    "justify-content": "center",
    "white-space": "nowrap",
    "font-size": font_size,
    "line-height": "1",
    "pointer-events": "none",
  });
  html_text_set(sprite, text);
  return sprite;
}
