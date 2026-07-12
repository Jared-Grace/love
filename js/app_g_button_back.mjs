import { app_g_button_uncolored_style } from "./app_g_button_uncolored_style.mjs";
import { app_shared_button_back } from "./app_shared_button_back.mjs";
export function app_g_button_back(overlay, lambda) {
  let component = app_shared_button_back(overlay, lambda);
  app_g_button_uncolored_style(component);
}
