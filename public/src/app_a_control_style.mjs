import { html_border_radius } from "../../../love/public/src/html_border_radius.mjs";
import { html_style_margin_y } from "../../../love/public/src/html_style_margin_y.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
export function app_a_control_style(component) {
  const border_radius = "0.8";
  const border_radius_em = border_radius + "em";
  html_border_radius(component, border_radius_em);
  html_style_assign(component, {
    "border-width": "0px",
  });
  html_style_margin_y(component, "2px");
}
