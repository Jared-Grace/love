import { html_style_set } from "../../../love/public/src/html_style_set.mjs";
import { app_replace_button_symbol_style_box_shadow_value } from "../../../love/public/src/app_replace_button_symbol_style_box_shadow_value.mjs";
import { html_font_color_set } from "../../../love/public/src/html_font_color_set.mjs";
import { html_style_background_color_set } from "../../../love/public/src/html_style_background_color_set.mjs";
import { app_replace_button_symbol_style } from "../../../love/public/src/app_replace_button_symbol_style.mjs";
import { app_replace_button_symbol } from "../../../love/public/src/app_replace_button_symbol.mjs";
export function app_code_symbol(parent, d) {
  let s = app_replace_button_symbol(parent, d);
  app_replace_button_symbol_style(s);
  html_style_background_color_set(s, "#444");
  html_font_color_set(s, "white");
  let style_value = app_replace_button_symbol_style_box_shadow_value("#777");
  html_style_set(s, "box-shadow", style_value);
  return s;
}
