import { html_style_background_color } from "../../../love/public/src/html_style_background_color.mjs";
export function html_style_background_color_set_if(
  chosen,
  component,
  color_if,
  color_else,
) {
  if (chosen) {
    html_style_background_color(component, color_if);
  } else {
    html_style_background_color(component, color_else);
  }
}
