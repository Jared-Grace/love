import { g_character_img_url } from "./g_character_img_url.mjs";
import { html_click_none } from "./html_click_none.mjs";
import { g_img_square_style_position_object } from "./g_img_square_style_position_object.mjs";
import { g_img_square } from "./g_img_square.mjs";
export function g_character_img(parent, c) {
  let c_src = g_character_img_url(c);
  let ci = g_img_square(parent, c_src, -1, -1, "character");
  g_img_square_style_position_object(c, ci);
  html_click_none(ci);
  return ci;
}
