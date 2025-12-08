import { html_text_set } from "../../../love/public/src/html_text_set.mjs";
import { g_img_square_style_position } from "../../../love/public/src/g_img_square_style_position.mjs";
import { html_click_none } from "../../../love/public/src/html_click_none.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
export function g_icon(div_map, coordinates, text) {
  let div = html_div(div_map);
  html_click_none(div);
  g_img_square_style_position(div, coordinates, "tutorial");
  html_text_set(div, text);
  return div;
}
