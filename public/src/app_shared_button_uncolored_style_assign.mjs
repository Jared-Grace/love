import { app_karate_button_uncolored_background_color } from "../../../karate_code/public/src/app_karate_button_uncolored_background_color.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
export function app_shared_button_uncolored_style_assign(component) {
  html_style_assign(component, {
    color: "black",
    "background-color": app_karate_button_uncolored_background_color(),
  });
}
