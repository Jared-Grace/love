import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { html_box_shadow_set } from "./html_box_shadow_set.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { app_replace_button_symbol_style_dead_background_color } from "./app_replace_button_symbol_style_dead_background_color.mjs";
export function app_replace_button_symbol_style_dead(sb) {
  let bg = app_replace_button_symbol_style_dead_background_color();
  html_style_background_color_set(sb, bg);
  html_box_shadow_set(sb, "none");
  html_font_color_set(sb, "white");
}
