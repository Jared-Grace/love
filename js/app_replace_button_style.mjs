import { html_style_background_color_set } from "../../love/js/html_style_background_color_set.mjs";
import { app_replace_button_rule_background_color } from "../../love/js/app_replace_button_rule_background_color.mjs";
import { app_shared_symbol_tile_style } from "../../love/js/app_shared_symbol_tile_style.mjs";
export function app_replace_button_style(b) {
  app_shared_symbol_tile_style(b);
  let c = app_replace_button_rule_background_color();
  html_style_background_color_set(b, c);
}
