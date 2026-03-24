import { app_replace_rule_set_identifiers_simple_goals } from "../../../love/public/src/app_replace_rule_set_identifiers_simple_goals.mjs";
import { app_replace_rule_set_identifiers_simple_rules } from "../../../love/public/src/app_replace_rule_set_identifiers_simple_rules.mjs";
export function app_replace_rule_set_identifiers_simple() {
  let r = {
    name: "Identifiers simple",
    rules: app_replace_rule_set_identifiers_simple_rules(),
    goals: app_replace_rule_set_identifiers_simple_goals(),
  };
  return r;
}
