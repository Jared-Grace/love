import { html_style_margin_bottom } from "../../../love/public/src/html_style_margin_bottom.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
export function html_style_margin_y(component, value) {
  html_style_assign(component, {
    "margin-top": value,
  });
  html_style_margin_bottom(component, value);
}
