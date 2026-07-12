import { app_replace_button_symbol_style_box_shadow_value_width_set } from "./app_replace_button_symbol_style_box_shadow_value_width_set.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { app_replace_button_rule_background_color } from "./app_replace_button_rule_background_color.mjs";
import { app_replace_button_symbol_style } from "./app_replace_button_symbol_style.mjs";
export function app_replace_button_style(b) {
  app_replace_button_symbol_style(b);
  let c = app_replace_button_rule_background_color();
  html_style_background_color_set(b, c);
  return;
  app_replace_button_symbol_style_box_shadow_value_width_set(
    b,
    "#9a9a9a",
    "0.04",
  );
}
