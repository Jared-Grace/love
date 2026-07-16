import { html_box_shadow_set } from "../../love/js/html_box_shadow_set.mjs";
import { app_shared_symbol_tile_style_box_shadow_value_width } from "../../love/js/app_shared_symbol_tile_style_box_shadow_value_width.mjs";
import { html_style_code_generic_unshadowed } from "../../love/js/html_style_code_generic_unshadowed.mjs";
import { app_code_container_light_blue_border_color } from "../../love/js/app_code_container_light_blue_border_color.mjs";
export function app_code_lesson_symbols_space_style(component) {
  let color_background = "white";
  let color_font = "transparent";
  let color_box_shadow = app_code_container_light_blue_border_color();
  html_style_code_generic_unshadowed(component, color_background, color_font);
  let width = "0.03";
  let style_value = app_shared_symbol_tile_style_box_shadow_value_width(
    color_box_shadow,
    width,
  );
  html_box_shadow_set(component, style_value);
}
