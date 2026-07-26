import { html_box_shadow_set } from "./html_box_shadow_set.mjs";
import { app_shared_symbol_tile_style_box_shadow_value_width } from "./app_shared_symbol_tile_style_box_shadow_value_width.mjs";
export function app_shared_symbol_tile_style_box_shadow_value_width_set(
  component,
  color_box_shadow,
  width,
) {
  let style_value = app_shared_symbol_tile_style_box_shadow_value_width(
    color_box_shadow,
    width,
  );
  html_box_shadow_set(component, style_value);
}
