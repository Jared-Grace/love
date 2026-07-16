import { app_replace_button_symbol_style_background_color_valid } from "../../love/js/app_replace_button_symbol_style_background_color_valid.mjs";
import { app_replace_button_symbol_style_background_color_invalid } from "../../love/js/app_replace_button_symbol_style_background_color_invalid.mjs";
import { app_replace_button_symbol_style_font_color_invalid } from "../../love/js/app_replace_button_symbol_style_font_color_invalid.mjs";
import { app_replace_symbol_tile_valid_if_attribute } from "../../love/js/app_replace_symbol_tile_valid_if_attribute.mjs";
import { html_data_set_test_suffix } from "../../love/js/html_data_set_test_suffix.mjs";
import { app_replace_button_symbol_style_box_shadow } from "../../love/js/app_replace_button_symbol_style_box_shadow.mjs";
import { app_replace_rule_set_highlight } from "../../love/js/app_replace_rule_set_highlight.mjs";
import { app_replace_button_symbol_style_background_color_valid_unsolved } from "../../love/js/app_replace_button_symbol_style_background_color_valid_unsolved.mjs";
import { app_shared_container_blue_border_color } from "../../love/js/app_shared_container_blue_border_color.mjs";
import { ternary } from "../../love/js/ternary.mjs";
import { html_style_background_color_set_if_else } from "../../love/js/html_style_background_color_set_if_else.mjs";
import { html_font_color_set_if } from "../../love/js/html_font_color_set_if.mjs";
import { html_enable_if } from "../../love/js/html_enable_if.mjs";
export function app_replace_button_symbol_style_valid_if(sb, valid, solved) {
  html_enable_if(sb, valid);
  let color_else = app_replace_button_symbol_style_background_color_invalid();
  let color_valid_solved =
    app_replace_button_symbol_style_background_color_valid();
  let color_valid_unsolved =
    app_replace_button_symbol_style_background_color_valid_unsolved();
  let color_if = ternary(solved, color_valid_solved, color_valid_unsolved);
  html_style_background_color_set_if_else(valid, sb, color_if, color_else);
  let font_color_else = app_replace_button_symbol_style_font_color_invalid();
  html_font_color_set_if(valid, sb, "white", font_color_else);
  let suffix = app_replace_symbol_tile_valid_if_attribute();
  html_data_set_test_suffix(sb, suffix, valid);
  let glow_solved = app_replace_rule_set_highlight();
  let glow_unsolved = app_shared_container_blue_border_color();
  let glow = ternary(solved, glow_solved, glow_unsolved);
  app_replace_button_symbol_style_box_shadow(valid, sb, glow);
}
