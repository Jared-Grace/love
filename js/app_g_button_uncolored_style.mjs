import { app_shared_button_uncolored_background_color } from "./app_shared_button_uncolored_background_color.mjs";
import { app_g_button_background_translucent } from "./app_g_button_background_translucent.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
export function app_g_button_uncolored_style(component) {
  app_g_button_background_translucent(component, app_shared_button_uncolored_background_color(), "dd");
  html_font_color_set(component, "black");
}
