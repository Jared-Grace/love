import { app_shared_symbol_tile_style_box_shadow_value_set } from "../../love/js/app_shared_symbol_tile_style_box_shadow_value_set.mjs";
import { html_font_jetbrains_mono } from "../../love/js/html_font_jetbrains_mono.mjs";
import { html_font_color_set } from "../../love/js/html_font_color_set.mjs";
import { html_style_background_color_set } from "../../love/js/html_style_background_color_set.mjs";
import { app_shared_symbol_tile_style } from "../../love/js/app_shared_symbol_tile_style.mjs";
import { app_shared_symbol_tile } from "../../love/js/app_shared_symbol_tile.mjs";
export function app_code_symbol_generic(
  parent,
  d,
  color_background,
  color_box_shadow,
) {
  let s = app_shared_symbol_tile(parent, d);
  app_shared_symbol_tile_style(s);
  html_font_color_set(s, "white");
  html_style_background_color_set(s, color_background);
  app_shared_symbol_tile_style_box_shadow_value_set(s, color_box_shadow);
  html_font_jetbrains_mono(s);
  return s;
}
