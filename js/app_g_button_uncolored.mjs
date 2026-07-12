import { app_g_button_uncolored_style } from "./app_g_button_uncolored_style.mjs";
import { app_shared_button_uncolored } from "./app_shared_button_uncolored.mjs";
export function app_g_button_uncolored(overlay, text, lambda) {
  let button = app_shared_button_uncolored(overlay, text, lambda);
  app_g_button_uncolored_style(button);
}
