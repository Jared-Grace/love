import { app_shared_name_text_to_idenitifier } from "../../../love/public/src/app_shared_name_text_to_idenitifier.mjs";
import { text_suffix_without } from "../../../love/public/src/text_suffix_without.mjs";
import { app_replace_rule_sets } from "../../../love/public/src/app_replace_rule_sets.mjs";
import { app_replace_rule_sets_name_expression } from "../../../love/public/src/app_replace_rule_sets_name_expression.mjs";
import { null_is } from "../../../love/public/src/null_is.mjs";
export function app_replace_rule_sets_name_expression_value(e) {
  let found = app_replace_rule_sets_name_expression(e);
  if (null_is(found)) {
    return found;
  }
  let n = app_replace_rule_sets.name;
  let prefix = text_suffix_without(n, "s");
  let f_name_new = app_shared_name_text_to_idenitifier(prefix, found);
  return f_name_new;
}
