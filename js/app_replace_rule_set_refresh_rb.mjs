import { property_get } from "./property_get.mjs";
import { html_enable_if } from "./html_enable_if.mjs";
import { app_replace_lefts_rights_style } from "./app_replace_lefts_rights_style.mjs";
import { app_replace_rule_set_rule_background_color } from "./app_replace_rule_set_rule_background_color.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { html_font_color_set_if } from "./html_font_color_set_if.mjs";
import { not } from "./not.mjs";
export function app_replace_rule_set_refresh_rb(rb, index2, state) {
  let index_selected = property_get(state, "index_selected");
  let success = property_get(state, "success");
  let selected = index2 === index_selected;
  let enabled = true;
  html_enable_if(rb, enabled);
  app_replace_lefts_rights_style(rb, selected || success, success);
  let c = app_replace_rule_set_rule_background_color(selected, enabled, success);
  html_style_background_color_set(rb, c);
  let arrow2 = property_get(rb, "arrow");
  html_font_color_set_if(selected && not(success), arrow2, "white", "black");
}
