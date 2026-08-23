import { html_style_set } from "./html_style_set.mjs";
export function html_style_color_set(component, color) {
  "the colour the text of a component is drawn in, set the same way its background already could be";
  html_style_set(component, "color", color);
}
