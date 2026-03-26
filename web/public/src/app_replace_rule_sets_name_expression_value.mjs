import { app_replace_rule_sets_name_expression } from "../../../love/public/src/app_replace_rule_sets_name_expression.mjs";
import { null_is } from "../../../love/public/src/null_is.mjs";
import { app_replace_rule_sets_name } from "../../../love/public/src/app_replace_rule_sets_name.mjs";
export function app_replace_rule_sets_name_expression_value(e) {
  let found = app_replace_rule_sets_name_expression(e);
  if (null_is(found)) {
    return found;
  }
  let f_name_new = app_replace_rule_sets_name(found);
  return f_name_new;
}
