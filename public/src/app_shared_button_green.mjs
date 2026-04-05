import { app_shared_button_screen_green_style_assign } from "../../../love/public/src/app_shared_button_screen_green_style_assign.mjs";
import { app_karate_button_uncolored } from "../../../karate_code/public/src/app_karate_button_uncolored.mjs";
export function app_shared_button_green(div, text, lambda) {
  let component = app_karate_button_uncolored(div, text, lambda);
  app_shared_button_screen_green_style_assign(component);
  return component;
}
