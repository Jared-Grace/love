import { html_style_margin_y } from "../../../love/public/src/html_style_margin_y.mjs";
import { app_karate_button_uncolored_style_assign } from "../../../karate_code/public/src/app_karate_button_uncolored_style_assign.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
export function app_a_control_style(component) {
  html_style_assign(component, {
    "border-radius": "0.8em",
    width: "100%",
    "border-width": "0px",
  });
  app_karate_button_uncolored_style_assign(component);
  html_style_margin_y(component, "2px");
}
