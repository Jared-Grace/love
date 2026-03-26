import { app_replace_rule_set_index_get } from "../../../love/public/src/app_replace_rule_set_index_get.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
import { app_replace_rule_sets } from "../../../love/public/src/app_replace_rule_sets.mjs";
export function app_replace_rule_set_get(context) {
  let rule_set_index = app_replace_rule_set_index_get(context);
  let rule_sets = app_replace_rule_sets();
  let item = list_get(rule_sets, rule_set_index);
  return item;
}
