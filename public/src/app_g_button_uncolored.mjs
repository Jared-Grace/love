import { app_g_button_uncolored_style } from "../../../love/public/src/app_g_button_uncolored_style.mjs";
import { app_shared_button_uncolored } from "../../../love/public/src/app_shared_button_uncolored.mjs";
export function app_g_button_uncolored(overlay, text, lambda) {
  let button = app_shared_button_uncolored(overlay, text, lambda);
  app_g_button_uncolored_style(button);
}
