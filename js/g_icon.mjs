import { html_text_set } from "./html_text_set.mjs";
import { g_img_square_style_position } from "./g_img_square_style_position.mjs";
import { html_click_none } from "./html_click_none.mjs";
import { html_div } from "./html_div.mjs";
export function g_icon(div_map, coordinates, text) {
  let div = g_img_square_div(div_map, coordinates, "tutorial");
  html_click_none(div);
  html_text_set(div, text);
  return div;
}
