import { html_style_margin_y } from "./html_style_margin_y.mjs";
import { html_style_margin_x } from "./html_style_margin_x.mjs";
export function html_margin(b, value) {
  html_style_margin_x(b, value);
  html_style_margin_y(b, value);
}
