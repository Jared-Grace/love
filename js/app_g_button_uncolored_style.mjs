import { app_shared_button_uncolored_background_color } from "./app_shared_button_uncolored_background_color.mjs";
import { app_g_button_background_translucent } from "./app_g_button_background_translucent.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function app_g_button_uncolored_style(component) {
  app_g_button_background_translucent(component, app_shared_button_uncolored_background_color(), "dd");
  html_style_set(component, "color", "black");
}
