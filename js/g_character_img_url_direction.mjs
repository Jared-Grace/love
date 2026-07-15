import { g_game_prefix } from "./g_game_prefix.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function g_character_img_url_direction(c, direction) {
  let game_prefix = g_game_prefix();
  let img = property_get(c, "img");
  let c_src = text_combine_multiple([
    game_prefix,
    "characters\\",
    img,
    "\\rotations\\",
    direction,
    ".png",
  ]);
  return c_src;
}
