import { html_style_margin_y } from "../../../love/public/src/html_style_margin_y.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function app_a_control_style(component) {
  marker("1");
  html_style_assign(component, {
    "border-radius": "0.8em",
    "border-width": "0px",
  });
  html_style_margin_y(component, "2px");
}
