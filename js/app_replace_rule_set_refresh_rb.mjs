import { property_get } from "./property_get.mjs";
import { html_enable_if } from "./html_enable_if.mjs";
import { app_replace_lefts_rights_style } from "./app_replace_lefts_rights_style.mjs";
import { app_replace_rule_set_rule_background_color } from "./app_replace_rule_set_rule_background_color.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { html_font_color_set_if } from "./html_font_color_set_if.mjs";
import { not } from "./not.mjs";
export function app_replace_rule_set_refresh_rb(rule_button, rule_index, state) {
  let index_selected = property_get(state, "index_selected");
  let success = property_get(state, "success");
  let selected = rule_index === index_selected;
  let enabled = true;
  html_enable_if(rule_button, enabled);
  app_replace_lefts_rights_style(rule_button, selected || success, success);
  let c = app_replace_rule_set_rule_background_color(selected, enabled, success);
  html_style_background_color_set(rule_button, c);
  let arrow = property_get(rule_button, "arrow");
  html_font_color_set_if(selected && not(success), arrow, "white", "black");
}
