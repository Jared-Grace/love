import { html_style_code_generic } from "./html_style_code_generic.mjs";
import { app_shared_color_code_background } from "./app_shared_color_code_background.mjs";
import { app_shared_color_code_font } from "./app_shared_color_code_font.mjs";
export function html_style_code_dark(component) {
  let color_box_shadow = "transparent";
  let color_background = app_shared_color_code_background();
  let color_font = app_shared_color_code_font();
  html_style_code_generic(
    component,
    color_background,
    color_box_shadow,
    color_font,
  );
}
