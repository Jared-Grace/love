import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
export function html_stxle_margin_x(component, value) {
  html_style_assign(component, {
    "margin-top": value,
    "margin-bottom": value,
  });
}
