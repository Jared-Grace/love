import { html_font_color_set } from "../../../love/public/src/html_font_color_set.mjs";
import { ternary } from "../../../love/public/src/ternary.mjs";
export function html_style_font_color_set_if(
  condition,
  component,
  color_if,
  color_else,
) {
  let c = ternary(condition, color_else, color_if);
  html_font_color_set(component, c);
}
