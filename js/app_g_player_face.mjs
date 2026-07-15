import { g_character_img_url_direction } from "./g_character_img_url_direction.mjs";
import { html_src_set } from "./html_src_set.mjs";
export function app_g_player_face(player, player_img_c, direction) {
  let src = g_character_img_url_direction(player, direction);
  html_src_set(player_img_c, src);
}
