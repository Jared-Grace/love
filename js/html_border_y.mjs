import { html_border_bottom } from "./html_border_bottom.mjs";
import { html_border_top } from "./html_border_top.mjs";
export function html_border_y(component, border_width, border_color) {
  html_border_top(component, border_width, border_color);
  html_border_bottom(component, border_width, border_color);
}
