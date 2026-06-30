import { app_replace_button_symbol_style_box_shadow_value_width } from "../../../love/public/src/app_replace_button_symbol_style_box_shadow_value_width.mjs";
import { html_style_set } from "../../../love/public/src/html_style_set.mjs";
export function app_replace_button_symbol_style_box_shadow_value_width_set(
  component,
  color_box_shadow,
) {
  const width = "0.1";
  let style_value = app_replace_button_symbol_style_box_shadow_value_width(
    width,
    color_box_shadow,
  );
  html_style_set(component, "box-shadow", style_value);
}
