import { app_replace_button_symbol_style_box_shadow } from "./app_replace_button_symbol_style_box_shadow.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
export function app_replace_symbol_tile_invalid(sb) {
  html_style_background_color_set(sb, "#D10000");
  app_replace_button_symbol_style_box_shadow(true, sb, "#FF8A8A");
}
