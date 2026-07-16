import { html_box_shadow_set } from "../../love/js/html_box_shadow_set.mjs";
import { app_shared_symbol_tile_style_box_shadow_value } from "../../love/js/app_shared_symbol_tile_style_box_shadow_value.mjs";
export function app_shared_symbol_tile_style_box_shadow_value_set(
  component,
  color_box_shadow,
) {
  let style_value =
    app_shared_symbol_tile_style_box_shadow_value(color_box_shadow);
  html_box_shadow_set(component, style_value);
}
