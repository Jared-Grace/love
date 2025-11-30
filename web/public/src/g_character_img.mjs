import { g_character_img_url } from "../../../love/public/src/g_character_img_url.mjs";
import { html_click_none } from "../../../love/public/src/html_click_none.mjs";
import { g_img_square_style_position_object } from "../../../love/public/src/g_img_square_style_position_object.mjs";
import { g_img_square } from "../../../love/public/src/g_img_square.mjs";
export function g_character_img(game_prefix, div, c) {
  const c_src = g_character_img_url(c, game_prefix);
  let ci = g_img_square(div, c_src, -1, -1, "character");
  g_img_square_style_position_object(c, ci);
  html_click_none(ci);
  return ci;
}
