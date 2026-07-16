import { html_style_code_generic_unshadowed } from "../../love/js/html_style_code_generic_unshadowed.mjs";
import { app_shared_symbol_tile_style_box_shadow_value_set } from "../../love/js/app_shared_symbol_tile_style_box_shadow_value_set.mjs";
export function html_style_code_generic(
  component,
  color_background,
  color_box_shadow,
  color_font,
) {
  html_style_code_generic_unshadowed(component, color_background, color_font);
  app_shared_symbol_tile_style_box_shadow_value_set(
    component,
    color_box_shadow,
  );
}
