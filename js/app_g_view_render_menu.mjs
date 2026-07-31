import { app_g_player_get } from "./app_g_player_get.mjs";
import { app_g_prayer_menu_overlay } from "./app_g_prayer_menu_overlay.mjs";
import { app_g_menu } from "./app_g_menu.mjs";
export async function app_g_view_render_menu(div_map) {
  ("the tap-yourself menu wears the SAME full-screen centered wrapper as the prayer menu (",
    app_g_prayer_menu_overlay.name,
    "), not the conversation overlay, so it reads as a menu laid out like the prayer turn rather than a conversation. div_map is unused here — the wrapper is fixed to the viewport, not parented to the map.");
  let player = await app_g_player_get();
  let overlay = app_g_prayer_menu_overlay();
  app_g_menu(overlay, player);
}
