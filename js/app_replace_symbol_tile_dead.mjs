import { html_style_background_color_set } from "../../love/js/html_style_background_color_set.mjs";
import { html_box_shadow_set } from "../../love/js/html_box_shadow_set.mjs";
import { html_font_color_set } from "../../love/js/html_font_color_set.mjs";
import { app_replace_symbol_tile_dead_background_color } from "../../love/js/app_replace_symbol_tile_dead_background_color.mjs";
export function app_replace_symbol_tile_dead(sb) {
  let bg = app_replace_symbol_tile_dead_background_color();
  html_style_background_color_set(sb, bg);
  html_box_shadow_set(sb, "none");
  html_font_color_set(sb, "white");
}
