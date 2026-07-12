import { html_font_color_set } from "./html_font_color_set.mjs";
import { ternary } from "./ternary.mjs";
export function html_font_color_set_if(
  condition,
  component,
  color_if,
  color_else,
) {
  let c = ternary(condition, color_if, color_else);
  html_font_color_set(component, c);
}
