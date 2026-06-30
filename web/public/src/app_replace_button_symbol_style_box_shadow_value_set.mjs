import { html_style_set } from "../../../love/public/src/html_style_set.mjs";
import { app_replace_button_symbol_style_box_shadow_value } from "../../../love/public/src/app_replace_button_symbol_style_box_shadow_value.mjs";
export function app_replace_button_symbol_style_box_shadow_value_set(
  color_box_shadow,
  s,
) {
  let style_value =
    app_replace_button_symbol_style_box_shadow_value(color_box_shadow);
  html_style_set(s, "box-shadow", style_value);
}
