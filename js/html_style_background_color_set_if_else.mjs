import { ternary } from "./ternary.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
export function html_style_background_color_set_if_else(
  condition,
  component,
  color_if,
  color_else,
) {
  let c = ternary(condition, color_if, color_else);
  html_style_background_color_set(component, c);
}
