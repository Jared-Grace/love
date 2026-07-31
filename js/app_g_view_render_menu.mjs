import { app_g_overlay } from "./app_g_overlay.mjs";
import { app_g_menu_container } from "./app_g_menu_container.mjs";
import { app_g_player_get } from "./app_g_player_get.mjs";
import { app_g_menu } from "./app_g_menu.mjs";
export async function app_g_view_render_menu(div_map) {
  ("the tap-yourself menu opens in the MAP's own overlay (",
    app_g_overlay.name,
    "), NOT the prayer menu's viewport-fixed wrapper: the menu belongs to the map you tapped, and this overlay scrolls its own content so a tall menu is never trapped below the fold. the centering the menu needs is the column inside it (",
    app_g_menu_container.name,
    "), so the wrapper does not have to supply it.");
  let player = await app_g_player_get();
  let overlay = app_g_overlay(div_map);
  app_g_menu(overlay, player);
}
