import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
export function app_karate_style_control_border(input, border_color) {
  html_style_assign(input, {
    "border-width": "4px",
    "border-color": border_color,
  });
}
