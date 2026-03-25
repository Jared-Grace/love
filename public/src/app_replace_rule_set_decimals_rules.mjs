import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { app_replace_rule_set_integers_rules } from "../../../love/public/src/app_replace_rule_set_integers_rules.mjs";
export function app_replace_rule_set_decimals_rules() {
  const rules = app_replace_rule_set_integers_rules();
  list_add_multiple(rules, ["de > in . ig", "de > in .", "de > . ig"]);
  return rules;
}
