import { html_style_assign } from "./html_style_assign.mjs";
export function html_border_radius(component, border_radius) {
  html_style_assign(component, {
    "border-radius": border_radius,
  });
}
