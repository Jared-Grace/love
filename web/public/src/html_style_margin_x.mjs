import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
export function html_style_margin_x(component, value) {
  html_style_assign(component, {
    "margin-left": value,
    "margin-right": value,
  });
}
