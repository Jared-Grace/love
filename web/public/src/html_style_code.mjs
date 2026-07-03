import { app_replace_button_symbol_style_box_shadow_value_set } from "../../../love/public/src/app_replace_button_symbol_style_box_shadow_value_set.mjs";
import { html_style_background_color_set } from "../../../love/public/src/html_style_background_color_set.mjs";
import { html_font_jetbrains_mono } from "../../../love/public/src/html_font_jetbrains_mono.mjs";
export function html_style_code(component) {
  html_font_jetbrains_mono(component);
  html_style_background_color_set(component, color_background);
  app_replace_button_symbol_style_box_shadow_value_set(
    component,
    color_box_shadow,
  );
}
