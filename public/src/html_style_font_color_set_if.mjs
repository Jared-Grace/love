import { ternary } from "../../../love/public/src/ternary.mjs";
import { html_style_background_color } from "../../../love/public/src/html_style_background_color.mjs";
export function html_style_font_color_set_if(
  condition,
  component,
  color_if,
  color_else,
) {
  let c = ternary(condition, color_if, color_else);
  html_style_background_color(component, c);
}
