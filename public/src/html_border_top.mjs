import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
export function html_border_top(component, border_width, border_color) {
  html_style_assign(component, {
    "border-top-width": border_width,
    "border-top-color": border_color,
  });
}
