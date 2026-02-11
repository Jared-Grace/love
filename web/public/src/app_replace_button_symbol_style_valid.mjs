import { html_style_set } from "../../../love/public/src/html_style_set.mjs";
import { html_border } from "../../../love/public/src/html_border.mjs";
import { app_replace_rule_set_highlight } from "../../../love/public/src/app_replace_rule_set_highlight.mjs";
import { html_style_background_color_set_if } from "../../../love/public/src/html_style_background_color_set_if.mjs";
import { html_style_font_color_set_if } from "../../../love/public/src/html_style_font_color_set_if.mjs";
import { html_enable_if } from "../../../love/public/src/html_enable_if.mjs";
export function app_replace_button_symbol_style_valid(sb, valid) {
  let h = app_replace_rule_set_highlight();
  html_border(sb, "4px", h);
  html_style_set(sb, "box-shadow", "none");
  html_enable_if(sb, valid);
  html_style_background_color_set_if(valid, sb, "#00b400ff", "#1e6c1eff");
  html_style_font_color_set_if(valid, sb, "white", "#b9fcb9ff");
}
