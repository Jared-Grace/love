import { app_shared_name_expression_value } from "../../../love/public/src/app_shared_name_expression_value.mjs";
import { text_suffix_without } from "../../../love/public/src/text_suffix_without.mjs";
import { app_replace_rule_sets } from "../../../love/public/src/app_replace_rule_sets.mjs";
export function app_replace_rule_sets_name_expression_value(e) {
  let n = app_replace_rule_sets.name;
  let prefix = text_suffix_without(n, "s");
  let name_new = app_shared_name_expression_value(e, prefix);
  return name_new;
}
