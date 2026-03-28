import { js_keywords_true_false } from "../../../love/public/src/js_keywords_true_false.mjs";
import { app_replace_rule_set_add_rights } from "../../../love/public/src/app_replace_rule_set_add_rights.mjs";
export function app_replace_rule_set_boolean_literal_rules() {
  let rules = [];
  let r = js_keywords_true_false();
  app_replace_rule_set_add_rights(rules, "bo", r);
  return rules;
}
