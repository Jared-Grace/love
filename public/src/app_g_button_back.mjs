import { app_g_button_uncolored_style } from "../../../love/public/src/app_g_button_uncolored_style.mjs";
import { app_karate_button_back } from "../../../karate_code/public/src/app_karate_button_back.mjs";
export function app_g_button_back(overlay, lambda) {
  let component2 = app_karate_button_back(overlay, lambda);
  app_g_button_uncolored_style(component2);
}
