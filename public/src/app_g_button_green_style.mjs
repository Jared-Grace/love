import { app_shared_button_background } from "../../../love/public/src/app_shared_button_background.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
export function app_g_button_green_style(component2) {
  html_style_assign(component2, {
    "background-color": app_shared_button_background() + "dd",
  });
}
