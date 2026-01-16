import { marker } from "../../../love/public/src/marker.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
export function html_stxle_margin_x(component, value) {
  marker("1");
  html_style_assign(component, {
    "margin-top": value,
    "margin-bottom": value,
  });
}
