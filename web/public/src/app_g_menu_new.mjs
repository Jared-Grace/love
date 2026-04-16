import { app_g_menu } from "../../../love/public/src/app_g_menu.mjs";
import { app_g_overlay } from "../../../love/public/src/app_g_overlay.mjs";
export function app_g_menu_new(div_map, player) {
  let overlay = app_g_overlay(div_map);
  app_g_menu(overlay, player);
}
