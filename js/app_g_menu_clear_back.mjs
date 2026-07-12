import { app_g_menu_back } from "./app_g_menu_back.mjs";
import { html_clear } from "./html_clear.mjs";
export function app_g_menu_clear_back(overlay, player) {
  html_clear(overlay);
  app_g_menu_back(overlay, player);
}
