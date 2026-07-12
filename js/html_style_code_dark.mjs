import { html_style_code_generic } from "./html_style_code_generic.mjs";
export function html_style_code_dark(component) {
  let color_box_shadow = "transparent";
  let color_background = "black";
  let color_font = "white";
  html_style_code_generic(
    component,
    color_background,
    color_box_shadow,
    color_font,
  );
}
