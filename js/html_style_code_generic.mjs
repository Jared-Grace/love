import { html_style_code_generic_unshadowed } from "./html_style_code_generic_unshadowed.mjs";
import { app_replace_button_symbol_style_box_shadow_value_set } from "./app_replace_button_symbol_style_box_shadow_value_set.mjs";
export function html_style_code_generic(
  component,
  color_background,
  color_box_shadow,
  color_font,
) {
  html_style_code_generic_unshadowed(component, color_background, color_font);
  app_replace_button_symbol_style_box_shadow_value_set(
    component,
    color_box_shadow,
  );
}
