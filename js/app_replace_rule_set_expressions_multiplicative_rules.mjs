import { list_add_multiple } from "./list_add_multiple.mjs";
import { app_replace_rule_set_expressions_unary_rules } from "./app_replace_rule_set_expressions_unary_rules.mjs";
export function app_replace_rule_set_expressions_multiplicative_rules(rules) {
  app_replace_rule_set_expressions_unary_rules(rules);
  list_add_multiple(rules, ["mue > ue", "mue > mue mo ue", "mo > *", "mo > /"]);
}
