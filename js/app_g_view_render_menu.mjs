import { app_g_player_get } from "./app_g_player_get.mjs";
import { app_g_overlay } from "./app_g_overlay.mjs";
import { app_g_menu } from "./app_g_menu.mjs";
export async function app_g_view_render_menu(div_map) {
  let player = await app_g_player_get();
  let overlay = app_g_overlay(div_map);
  app_g_menu(overlay, player);
}
