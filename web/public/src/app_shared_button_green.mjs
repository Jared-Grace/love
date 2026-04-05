import { app_shared_button_screen_green_style_assign } from "../../../love/public/src/app_shared_button_screen_green_style_assign.mjs";
import { app_shared_button_uncolored } from "../../../love/public/src/app_shared_button_uncolored.mjs";
export function app_shared_button_green(div, text, lambda) {
  let component = app_shared_button_uncolored(div, text, lambda);
  app_shared_button_screen_green_style_assign(component);
  return component;
}
