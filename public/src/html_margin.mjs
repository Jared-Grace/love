import { html_style_margin_y } from "../../../love/public/src/html_style_margin_y.mjs";
import { html_style_margin_x } from "../../../love/public/src/html_style_margin_x.mjs";
export function html_margin(b, value) {
  html_style_margin_x(b, value);
  html_style_margin_y(b, value);
}
