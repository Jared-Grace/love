import { app_g_button_style } from "../../../love/public/src/app_g_button_style.mjs";
import { app_karate_button_back } from "../../../karate_code/public/src/app_karate_button_back.mjs";
export function app_g_button_back(overlay, lambda21) {
  let component2 = app_karate_button_back(overlay, lambda21);
  app_g_button_style(component2);
}
