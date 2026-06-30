import { html_style_set } from "../../../love/public/src/html_style_set.mjs";
import { app_replace_button_symbol_style_box_shadow_value } from "../../../love/public/src/app_replace_button_symbol_style_box_shadow_value.mjs";
export function app_replace_button_symbol_style_box_shadow_value_width_set(
  component,
  color_box_shadow,
) {
  let style_value =
    app_replace_button_symbol_style_box_shadow_value(color_box_shadow);
  html_style_set(component, "box-shadow", style_value);
}
