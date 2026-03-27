import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { app_replace_rule_set_expresions_additive_rules } from "../../../love/public/src/app_replace_rule_set_expresions_additive_rules.mjs";
export function app_replace_rule_set_expressions_relational_rules(rules) {
  app_replace_rule_set_expresions_additive_rules(rules);
  list_add_multiple(rules, ["re > ae", "re > re ro ae", "ro > <", "ro > >>"]);
}
