import { g_character_img_url } from "./g_character_img_url.mjs";
import { html_src_set } from "./html_src_set.mjs";
import { g_character_face_set } from "./g_character_face_set.mjs";
export function app_g_player_face(player, player_img_c, direction) {
  g_character_face_set(player, direction);
  let src = g_character_img_url(player);
  html_src_set(player_img_c, src);
}
