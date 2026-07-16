import { app_shared_symbol_tile_style_box_shadow_value_width } from "../../love/js/app_shared_symbol_tile_style_box_shadow_value_width.mjs";
import { html_style_set } from "../../love/js/html_style_set.mjs";
export function app_shared_symbol_tile_style_box_shadow_value_width_set(
  component,
  color_box_shadow,
  width,
) {
  let style_value = app_shared_symbol_tile_style_box_shadow_value_width(
    color_box_shadow,
    width,
  );
  html_style_set(component, "box-shadow", style_value);
}
