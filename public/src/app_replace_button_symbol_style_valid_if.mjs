import { app_replace_button_symbol_style_background_color_valid } from "../../../love/public/src/app_replace_button_symbol_style_background_color_valid.mjs";
import { app_replace_button_symbol_style_background_color_invalid } from "../../../love/public/src/app_replace_button_symbol_style_background_color_invalid.mjs";
import { app_replace_button_symbol_style_valid_if_attribute } from "../../../love/public/src/app_replace_button_symbol_style_valid_if_attribute.mjs";
import { html_data_set_test_suffix } from "../../../love/public/src/html_data_set_test_suffix.mjs";
import { app_replace_button_symbol_style_box_shadow } from "../../../love/public/src/app_replace_button_symbol_style_box_shadow.mjs";
import { app_replace_rule_set_highlight } from "../../../love/public/src/app_replace_rule_set_highlight.mjs";
import { html_style_background_color_set_if_else } from "../../../love/public/src/html_style_background_color_set_if_else.mjs";
import { html_style_font_color_set_if } from "../../../love/public/src/html_style_font_color_set_if.mjs";
import { html_enable_if } from "../../../love/public/src/html_enable_if.mjs";
export function app_replace_button_symbol_style_valid_if(sb, valid) {
  html_enable_if(sb, valid);
  let color_else = app_replace_button_symbol_style_background_color_invalid();
  let color_if = app_replace_button_symbol_style_background_color_valid();
  html_style_background_color_set_if_else(valid, sb, color_if, color_else);
  html_style_font_color_set_if(valid, sb, "white", "#b9fcb9ff");
  let suffix = app_replace_button_symbol_style_valid_if_attribute();
  html_data_set_test_suffix(sb, suffix, valid);
  let h = app_replace_rule_set_highlight();
  app_replace_button_symbol_style_box_shadow(valid, sb, h);
}
