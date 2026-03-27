import { html_style_margin_top } from "../../../love/public/src/html_style_margin_top.mjs";
import { html_style_margin_y } from "../../../love/public/src/html_style_margin_y.mjs";
import { html_style_font_size } from "../../../love/public/src/html_style_font_size.mjs";
import { app_replace_rule_sets_progress_bar } from "../../../love/public/src/app_replace_rule_sets_progress_bar.mjs";
import { html_p_text } from "../../../love/public/src/html_p_text.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_replace_rule_set_get } from "../../../love/public/src/app_replace_rule_set_get.mjs";
export function app_replace_rule_set_title(context) {
  let r2 = app_replace_rule_sets_progress_bar(context);
  let root = property_get(context, "root");
  let rule_set = app_replace_rule_set_get(context);
  let rule_set_name = property_get(rule_set, "name");
  let title = html_p_text(root, "Rule set: " + rule_set_name);
  html_style_margin_y(title, "0.3em");
  let why = property_get(rule_set, "why");
  let p = html_p_text(root, why);
  html_style_margin_top(p, "0.3em");
  html_style_font_size(p, "0.9em");
  let r = {
    rule_set,
    rule_set_name,
  };
  return r;
}
