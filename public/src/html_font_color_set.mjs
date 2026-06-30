import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { html_style_set } from "../../../love/public/src/html_style_set.mjs";
export function html_font_color_set(component, color) {
  arguments_assert(arguments, 2);
  html_style_set(component, "color", color);
}
