import { app_g_button_style } from "../../../love/public/src/app_g_button_style.mjs";
import { app_karate_button_uncolored } from "../../../karate_code/public/src/app_karate_button_uncolored.mjs";
export function app_g_button_uncolored(overlay, text, lambda7) {
  let button = app_karate_button_uncolored(overlay, text, lambda7);
  app_g_button_style(button);
}
