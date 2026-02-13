import { ternary } from "../../../love/public/src/ternary.mjs";
import { html_style_background_color_set } from "../../../love/public/src/html_style_background_color_set.mjs";
export function html_style_background_color_set_if(
  condition,
  component,
  color_if,
  color_else,
) {
  let c = ternary(condition, color_if, color_else);
  html_style_background_color_set(component, c);
}
