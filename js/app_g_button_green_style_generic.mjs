import { app_shared_button_background } from "./app_shared_button_background.mjs";
import { app_g_button_background_translucent } from "./app_g_button_background_translucent.mjs";
export function app_g_button_green_style_generic(component, alpha_channel) {
  app_g_button_background_translucent(component, app_shared_button_background(), alpha_channel);
}
