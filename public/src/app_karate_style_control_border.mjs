import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
export function app_karate_style_control_border(input, border_color) {
  const border_width = "4px";
  html_style_assign(input, {
    "border-width": border_width,
    "border-color": border_color,
  });
}
