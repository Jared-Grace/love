import { html_style_background_color } from "../../../love/public/src/html_style_background_color.mjs";
export function html_style_background_color_set_if(
  condition,
  component,
  color_if,
  color_else,
) {
  ternary(condition, color_if, color_else);
  html_style_background_color(component, color_else);
}
function ternary(condition, color_if, color_else) {
  let c = null;
  if (condition) {
    c = color_if;
  } else {
    c = color_else;
  }
}

