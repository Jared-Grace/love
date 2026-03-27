import { html_style_set } from "../../../love/public/src/html_style_set.mjs";
import { app_replace_rule_sets_progress_bar } from "../../../love/public/src/app_replace_rule_sets_progress_bar.mjs";
import { html_p_text } from "../../../love/public/src/html_p_text.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_replace_rule_set_get } from "../../../love/public/src/app_replace_rule_set_get.mjs";
export function app_replace_rule_set_title(context) {
  app_replace_rule_sets_progress_bar(context);
  let root = property_get(context, "root");
  let rule_set = app_replace_rule_set_get(context);
  let rule_set_name = property_get(rule_set, "name");
  html_p_text(root, "Rule set: " + rule_set_name);
  let why = property_get(rule_set, "why");
  let p = html_p_text(root, why);
  html_style_set(b, style_key, style_value);
  let r = {
    rule_set,
    rule_set_name,
  };
  return r;
}
