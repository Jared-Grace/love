import { html_style_margin_bottom } from "../../../love/public/src/html_style_margin_bottom.mjs";
import { app_replace_rule_sets } from "../../../love/public/src/app_replace_rule_sets.mjs";
import { html_progress_bar } from "../../../love/public/src/html_progress_bar.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_replace_rule_set_index_get } from "../../../love/public/src/app_replace_rule_set_index_get.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
export function app_replace_rule_sets_progress_bar(context) {
  let rule_sets = app_replace_rule_sets();
  let size = list_size(rule_sets);
  let rule_set_index = app_replace_rule_set_index_get(context);
  let root = property_get(context, "root");
  let r = html_progress_bar(root, rule_set_index, size, "rule set");
  let container = property_get(r, "container");
  html_style_margin_bottom(container, "0.1em");
  return r;
}
