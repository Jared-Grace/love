import { app_shared_symbol_tile_style_box_shadow } from "../../love/js/app_shared_symbol_tile_style_box_shadow.mjs";
import { html_style_background_color_set } from "../../love/js/html_style_background_color_set.mjs";
export function app_replace_symbol_tile_invalid(sb) {
  html_style_background_color_set(sb, "#D10000");
  app_shared_symbol_tile_style_box_shadow(true, sb, "#FF8A8A");
}
