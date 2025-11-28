import { app_g_button_green_style } from "../../../love/public/src/app_g_button_green_style.mjs";
import { app_karate_button_green } from "../../../karate_code/public/src/app_karate_button_green.mjs";
export function app_g_button_green(overlay, text, lambda22) {
  let b = app_karate_button_green(overlay, text, lambda22);
  app_g_button_green_style(b);
}
