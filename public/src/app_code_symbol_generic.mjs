import { app_replace_button_symbol_style_box_shadow_value_set } from "../../../love/public/src/app_replace_button_symbol_style_box_shadow_value_set.mjs";
import { html_font_jetbrains_mono } from "../../../love/public/src/html_font_jetbrains_mono.mjs";
import { html_font_color_set } from "../../../love/public/src/html_font_color_set.mjs";
import { html_style_background_color_set } from "../../../love/public/src/html_style_background_color_set.mjs";
import { app_replace_button_symbol_style } from "../../../love/public/src/app_replace_button_symbol_style.mjs";
import { app_replace_button_symbol } from "../../../love/public/src/app_replace_button_symbol.mjs";
export function app_code_symbol_generic(
  parent,
  d,
  color_background,
  color_box_shadow,
) {
  let s = app_replace_button_symbol(parent, d);
  app_replace_button_symbol_style(s);
  html_style_background_color_set(s, color_background);
  html_font_color_set(s, "white");
  app_replace_button_symbol_style_box_shadow_value_set(color_box_shadow, s);
  html_font_jetbrains_mono(s);
  return s;
}
