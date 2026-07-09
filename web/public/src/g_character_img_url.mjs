import { g_game_prefix } from "../../../love/public/src/g_game_prefix.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export function g_character_img_url(c) {
  const game_prefix = g_game_prefix();
  let img = property_get(c, "img");
  const c_src = text_combine_multiple([
    game_prefix,
    "characters\\",
    img,
    "\\rotations\\south.png",
  ]);
  return c_src;
}
