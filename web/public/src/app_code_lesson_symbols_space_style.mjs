import { html_box_shadow_set } from "../../../love/public/src/html_box_shadow_set.mjs";
import { app_replace_button_symbol_style_box_shadow_value_width } from "../../../love/public/src/app_replace_button_symbol_style_box_shadow_value_width.mjs";
import { html_style_code_generic_unshadowed } from "../../../love/public/src/html_style_code_generic_unshadowed.mjs";
import { app_code_container_light_blue_border_color } from "../../../love/public/src/app_code_container_light_blue_border_color.mjs";
export function app_code_lesson_symbols_space_style(component) {
  const color_background = "white";
  const color_font = "transparent";
  let color_box_shadow = app_code_container_light_blue_border_color();
  html_style_code_generic_unshadowed(component, color_background, color_font);
  const width = "0.03";
  let style_value = app_replace_button_symbol_style_box_shadow_value_width(
    color_box_shadow,
    width,
  );
  html_box_shadow_set(component, style_value);
}
