import { app_shared_symbol_tile_style_box_shadow_value } from "../../love/js/app_shared_symbol_tile_style_box_shadow_value.mjs";
import { html_style_set_or_remove } from "../../love/js/html_style_set_or_remove.mjs";
export function app_shared_symbol_tile_style_box_shadow(valid, sb, h) {
  let style_value = app_shared_symbol_tile_style_box_shadow_value(h);
  html_style_set_or_remove(valid, sb, "box-shadow", style_value);
}
