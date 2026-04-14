import { app_g_player_style } from "../../../love/public/src/app_g_player_style.mjs";
import { g_character_img } from "../../../love/public/src/g_character_img.mjs";
export function app_g_player_img(parent, player) {
  let player_img_c = g_character_img(parent, player);
  app_g_player_style(player_img_c);
  return player_img_c;
}
