import { html_style_margin_bottom } from "./html_style_margin_bottom.mjs";
import { app_replace_rule_sets } from "./app_replace_rule_sets.mjs";
import { html_progress_bar } from "./html_progress_bar.mjs";
import { property_get } from "./property_get.mjs";
import { app_replace_rule_set_index_get } from "./app_replace_rule_set_index_get.mjs";
import { list_size } from "./list_size.mjs";
export function app_replace_rule_sets_progress_bar(context) {
  let rule_sets = app_replace_rule_sets();
  let size = list_size(rule_sets);
  let rule_set_index = app_replace_rule_set_index_get(context);
  let root = property_get(context, "root");
  let r = html_progress_bar(root, rule_set_index, size, "rule set");
  let container = property_get(r, "container");
  html_style_margin_bottom(container, 0);
  return r;
}
