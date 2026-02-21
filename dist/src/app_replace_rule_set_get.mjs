import { list_get } from "../../../love/public/src/list_get.mjs";
import { app_replace_rule_sets } from "../../../love/public/src/app_replace_rule_sets.mjs";
import { storage_local_get_context } from "../../../love/public/src/storage_local_get_context.mjs";
export function app_replace_rule_set_get(context) {
  let rule_set_index = storage_local_get_context(context, "rule_set_index");
  let rule_sets = app_replace_rule_sets();
  let item = list_get(rule_sets, rule_set_index);
  return item;
}
