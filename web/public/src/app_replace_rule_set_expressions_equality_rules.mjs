import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { app_replace_rule_set_expressions_relational_rules } from "../../../love/public/src/app_replace_rule_set_expressions_relational_rules.mjs";
export function app_replace_rule_set_expressions_equality_rules(rules) {
  app_replace_rule_set_expressions_relational_rules(rules);
  list_add_multiple(rules, ["ee > re", "ee > ee === re"]);
}
