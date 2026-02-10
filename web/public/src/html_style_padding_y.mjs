import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
export function html_style_padding_y(component, value) {
  html_style_assign(component, {
    "padding-top": value,
    "padding-bottom": value,
  });
}
