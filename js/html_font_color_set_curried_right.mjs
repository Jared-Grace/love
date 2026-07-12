import { html_font_color_set } from "./html_font_color_set.mjs";
export function html_font_color_set_curried_right(color) {
  let c = function html_font_color_set_curried_right_result(component) {
    let r = html_font_color_set(component, color);
    return r;
  };
  return c;
}
