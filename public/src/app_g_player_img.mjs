import { app_g_game_save_get_player } from "../../../love/public/src/app_g_game_save_get_player.mjs";
import { app_g_player_style } from "../../../love/public/src/app_g_player_style.mjs";
import { g_character_img } from "../../../love/public/src/g_character_img.mjs";
export async function app_g_player_img(parent) {
  let player = await app_g_game_save_get_player();
  let player_img_c = g_character_img(parent, player);
  app_g_player_style(player_img_c);
  return player_img_c;
}
