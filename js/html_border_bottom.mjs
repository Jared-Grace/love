import { html_style_assign } from "./html_style_assign.mjs";
export function html_border_bottom(component, border_width, border_color) {
  html_style_assign(component, {
    "border-bottom-width": border_width,
    "border-bottom-color": border_color,
    "border-bottom-style": "solid",
  });
}
