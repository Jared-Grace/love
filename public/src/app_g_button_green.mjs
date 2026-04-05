import { app_g_button_green_style } from "../../../love/public/src/app_g_button_green_style.mjs";
import { app_shared_button_green } from "../../../love/public/src/app_shared_button_green.mjs";
export function app_g_button_green(overlay, text, lambda) {
  let b = app_shared_button_green(overlay, text, lambda);
  app_g_button_green_style(b);
  return b;
}
