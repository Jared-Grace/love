import { g_img_square_style_position_object } from "../../../love/public/src/g_img_square_style_position_object.mjs";
import { g_img_square } from "../../../love/public/src/g_img_square.mjs";
export function g_character_img(game_prefix, div, c) {
  const c_src = game_prefix + "characters\\" + p + "\\rotations\\south.png";
  let ci = g_img_square(div, c_src, -1, -1, "character");
  g_img_square_style_position_object(c, ci);
  return ci;
}
