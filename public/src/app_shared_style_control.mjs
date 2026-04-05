import { app_shared_style_control_font_size } from "../../../love/public/src/app_shared_style_control_font_size.mjs";
import { app_karate_margin_y_set } from "../../../karate_code/public/src/app_karate_margin_y_set.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
export function app_shared_style_control(component) {
  html_style_assign(component, {
    "border-radius": "0.8em",
    padding: "0.55em",
    width: "100%",
    "border-width": "0px",
    "font-size": app_shared_style_control_font_size(),
  });
  app_karate_margin_y_set(component);
}
