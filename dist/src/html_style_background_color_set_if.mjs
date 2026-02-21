import { html_style_background_color_set } from "../../../love/public/src/html_style_background_color_set.mjs";
export function html_style_background_color_set_if(
  condition,
  component,
  background,
) {
  if (condition) {
    html_style_background_color_set(component, background);
  }
}
