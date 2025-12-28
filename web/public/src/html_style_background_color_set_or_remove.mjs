import { html_style_remove } from "../../../love/public/src/html_style_remove.mjs";
import { html_style_background_color } from "../../../love/public/src/html_style_background_color.mjs";
export function html_style_background_color_set_or_remove(
  chosen,
  component,
  color,
) {
  if (chosen) {
    html_style_background_color(component, color);
  } else {
    html_style_remove(component, "background-color");
  }
}
