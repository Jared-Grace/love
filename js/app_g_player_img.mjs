import { app_g_player_get } from "./app_g_player_get.mjs";
import { app_g_player_style } from "./app_g_player_style.mjs";
import { g_character_img } from "./g_character_img.mjs";
import { g_character_img_preload } from "./g_character_img_preload.mjs";
export async function app_g_player_img(parent) {
  let player = await app_g_player_get();
  let player_img_c = g_character_img(parent, player);
  app_g_player_style(player_img_c);
  g_character_img_preload(player);
  return player_img_c;
}
