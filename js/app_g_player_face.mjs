import { g_character_img_url } from "./g_character_img_url.mjs";
import { html_src_set } from "./html_src_set.mjs";
import { property_set } from "./property_set.mjs";
export function app_g_player_face(player, player_img_c, direction) {
  property_set(player, "direction", direction);
  let src = g_character_img_url(player);
  html_src_set(player_img_c, src);
}
