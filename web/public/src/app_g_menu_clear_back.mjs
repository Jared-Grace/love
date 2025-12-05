import { app_g_button_back } from "../../../love/public/src/app_g_button_back.mjs";
import { app_g_menu } from "../../../love/public/src/app_g_menu.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
export function app_g_menu_clear_back(overlay, player) {
  html_clear(overlay);
  function lambda23() {
    app_g_menu(overlay, player);
  }
  let button2 = app_g_button_back(overlay, lambda23);
}
