import { html_border_radius } from "../../../love/public/src/html_border_radius.mjs";
import { html_style_margin_y } from "../../../love/public/src/html_style_margin_y.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
export function app_a_control_style(component) {
  const border_radius = "0.8em";
  html_border_radius(component, border_radius);
  html_style_assign(component, {
    "border-width": "0px",
  });
  html_style_margin_y(component, "2px");
}
