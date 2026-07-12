import { app_replace_rule_sets_prefix } from "./app_replace_rule_sets_prefix.mjs";
import { app_shared_name_expression_value } from "./app_shared_name_expression_value.mjs";
export function app_replace_rule_sets_name_expression_value(e) {
  let prefix = app_replace_rule_sets_prefix();
  let name_new = app_shared_name_expression_value(e, prefix);
  return name_new;
}
