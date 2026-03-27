import { html_style_margin_top } from "../../../love/public/src/html_style_margin_top.mjs";
import { html_style_margin_bottom } from "../../../love/public/src/html_style_margin_bottom.mjs";
export function html_style_margin_y(component, value) {
  html_style_margin_top(component, value);
  html_style_margin_bottom(component, value);
}
