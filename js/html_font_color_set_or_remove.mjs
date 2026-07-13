import { html_style_remove } from "./html_style_remove.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
export function html_font_color_set_or_remove(chosen, component, color) {
  if (chosen) {
    html_font_color_set(component, color);
  } else {
    html_style_remove(component, "color");
  }
}
