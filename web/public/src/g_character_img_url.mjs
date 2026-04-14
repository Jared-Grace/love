import { property_get } from "../../../love/public/src/property_get.mjs";
export function g_character_img_url(c) {
  const game_prefix = g_game_prefix();
  let img = property_get(c, "img");
  const c_src = game_prefix + "characters\\" + img + "\\rotations\\south.png";
  return c_src;
}
