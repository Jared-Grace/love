import { html_style_margin_y } from "../../../love/public/src/html_style_margin_y.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
export function app_a_control_style(component) {
  html_style_assign(component, {
    "border-radius": "0.8em",
    width: "100%",
    "border-width": "0px",
  });
  html_style_margin_y(component, "2px");
}
