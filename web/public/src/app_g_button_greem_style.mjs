import { marker } from "../../../love/public/src/marker.mjs";
import { app_karate_button_uncolored_background_color } from "../../../karate_code/public/src/app_karate_button_uncolored_background_color.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
export function app_g_button_greem_style(component2) {
  marker("1");
  html_style_assign(component2, {
    "background-color": app_karate_button_uncolored_background_color() + "dd",
  });
}
