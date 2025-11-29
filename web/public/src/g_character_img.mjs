import { html_click_none } from "../../../love/public/src/html_click_none.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { g_img_square_style_position_object } from "../../../love/public/src/g_img_square_style_position_object.mjs";
import { g_img_square } from "../../../love/public/src/g_img_square.mjs";
export function g_character_img(game_prefix, div, c) {
  let img = object_property_get(c, "img");
  const c_src = game_prefix + "characters\\" + img + "\\rotations\\south.png";
  let ci = g_img_square(div, c_src, -1, -1, "character");
  g_img_square_style_position_object(c, ci);
  html_click_none(ci);
  return ci;
}
