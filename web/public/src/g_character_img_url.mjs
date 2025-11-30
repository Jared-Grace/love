import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function g_character_img_url(c, game_prefix) {
  let img = object_property_get(c, "img");
  const c_src = game_prefix + "characters\\" + img + "\\rotations\\south.png";
  return c_src;
}
