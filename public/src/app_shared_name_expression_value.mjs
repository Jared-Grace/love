import { app_shared_name_text_to_identifier } from "../../../love/public/src/app_shared_name_text_to_identifier.mjs";
import { null_is } from "../../../love/public/src/null_is.mjs";
import { app_replace_rule_sets_name_expression } from "../../../love/public/src/app_replace_rule_sets_name_expression.mjs";
export function app_shared_name_expression_value(e, prefix) {
  let name = app_replace_rule_sets_name_expression(e);
  if (null_is(name)) {
    ("return name");
  }
  let name_new = app_shared_name_text_to_identifier(prefix, name);
  return name_new;
}
