import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
export function html_border(component, border_width, border_color) {
  html_style_assign(component, {
    "border-width": border_width,
    "border-color": border_color,
  });
}
