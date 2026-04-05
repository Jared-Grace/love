import { app_shared_button_uncolored_background_color } from "../../../love/public/src/app_shared_button_uncolored_background_color.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
export function app_shared_button_uncolored_style_assign(component) {
  html_style_assign(component, {
    color: "black",
    "background-color": app_shared_button_uncolored_background_color(),
  });
}
