import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
export function html_style_padding(component, value) {
  html_style_assign(component, {
    "padding-left": value,
    "padding-right": value,
  });
}
