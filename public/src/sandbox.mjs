import { app_replace_rule_set_rules_get } from "../../../love/public/src/app_replace_rule_set_rules_get.mjs";
import { app_replace_rule_set_scientific_notation_numbers } from "../../../love/public/src/app_replace_rule_set_scientific_notation_numbers.mjs";
import { app_replace_rule_set_verify_nearley } from "../../../love/public/src/app_replace_rule_set_verify_nearley.mjs";
export async function sandbox() {
  let rs = app_replace_rule_set_scientific_notation_numbers();
  let rules = app_replace_rule_set_rules_get(rs);
  let r = app_replace_rule_set_verify_nearley(rules);
  return r;
}
