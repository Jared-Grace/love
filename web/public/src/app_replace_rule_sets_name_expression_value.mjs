import { app_replace_rule_sets_prefix } from "../../../love/public/src/app_replace_rule_sets_prefix.mjs";
import { app_shared_name_expression_value } from "../../../love/public/src/app_shared_name_expression_value.mjs";
export function app_replace_rule_sets_name_expression_value(e) {
  let prefix = app_replace_rule_sets_prefix();
  let name_new = app_shared_name_expression_value(e, prefix);
  return name_new;
}
