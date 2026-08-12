import { app_shared_color_green } from "./app_shared_color_green.mjs";
import { app_replace_symbol_tile_background_color_invalid } from "./app_replace_symbol_tile_background_color_invalid.mjs";
import { app_replace_symbol_tile_font_color_invalid } from "./app_replace_symbol_tile_font_color_invalid.mjs";
import { app_replace_symbol_tile_valid_if_attribute } from "./app_replace_symbol_tile_valid_if_attribute.mjs";
import { html_data_set_test_suffix } from "./html_data_set_test_suffix.mjs";
import { app_shared_symbol_tile_style_box_shadow } from "./app_shared_symbol_tile_style_box_shadow.mjs";
import { app_shared_color_green_light } from "./app_shared_color_green_light.mjs";
import { app_replace_symbol_tile_background_color_valid_unsolved } from "./app_replace_symbol_tile_background_color_valid_unsolved.mjs";
import { app_shared_color_blue_pale } from "./app_shared_color_blue_pale.mjs";
import { ternary } from "./ternary.mjs";
import { html_style_background_color_set_if_else } from "./html_style_background_color_set_if_else.mjs";
import { html_font_color_set_if } from "./html_font_color_set_if.mjs";
import { html_enable_if } from "./html_enable_if.mjs";
export function app_replace_symbol_tile_valid_if(sb, valid, solved) {
  html_enable_if(sb, valid);
  let color_else = app_replace_symbol_tile_background_color_invalid();
  let color_valid_solved = app_shared_color_green();
  let color_valid_unsolved =
    app_replace_symbol_tile_background_color_valid_unsolved();
  let color_if = ternary(solved, color_valid_solved, color_valid_unsolved);
  html_style_background_color_set_if_else(valid, sb, color_if, color_else);
  let font_color_else = app_replace_symbol_tile_font_color_invalid();
  html_font_color_set_if(valid, sb, "white", font_color_else);
  let suffix = app_replace_symbol_tile_valid_if_attribute();
  html_data_set_test_suffix(sb, suffix, valid);
  let glow_solved = app_shared_color_green_light();
  let glow_unsolved = app_shared_color_blue_pale();
  let glow = ternary(solved, glow_solved, glow_unsolved);
  app_shared_symbol_tile_style_box_shadow(valid, sb, glow);
}
