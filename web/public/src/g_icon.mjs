import { html_text_set } from "../../../love/public/src/html_text_set.mjs";
import { g_img_square_style_position } from "../../../love/public/src/g_img_square_style_position.mjs";
import { html_click_none } from "../../../love/public/src/html_click_none.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
export function g_icon(div_map, coordinates, text) {
  let tutorial = html_div(div_map);
  html_click_none(tutorial);
  g_img_square_style_position(tutorial, coordinates, "tutorial");
  html_text_set(tutorial, text);
  return tutorial;
}
