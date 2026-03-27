import { html_progress_bar } from "../../../love/public/src/html_progress_bar.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_replace_rule_set_index_get } from "../../../love/public/src/app_replace_rule_set_index_get.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
export function app_replace_rule_sets_progress_bar(context) {
  let size = list_size(rule_sets);
  let rule_set_index = app_replace_rule_set_index_get(context);
  let root2 = property_get(context, "root");
  html_progress_bar(root2, rule_set_index, size, "rule set");
}
