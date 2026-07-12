import { app_g_button_back } from "./app_g_button_back.mjs";
import { app_g_menu } from "./app_g_menu.mjs";
export function app_g_menu_back(overlay, player) {
  function lambda() {
    app_g_menu(overlay, player);
  }
  app_g_button_back(overlay, lambda);
}
