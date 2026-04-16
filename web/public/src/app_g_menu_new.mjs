import { app_g_player_get } from "../../../love/public/src/app_g_player_get.mjs";
import { app_g_menu } from "../../../love/public/src/app_g_menu.mjs";
import { app_g_overlay } from "../../../love/public/src/app_g_overlay.mjs";
export async function app_g_menu_new(div_map) {
  let player2 = await app_g_player_get();
  let overlay = app_g_overlay(div_map);
  app_g_menu(overlay, player);
}
