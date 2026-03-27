import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { app_replace_rule_set_expressions_multiplicative_rules } from "../../../love/public/src/app_replace_rule_set_expressions_multiplicative_rules.mjs";
export function app_replace_rule_set_expresions_additive_rules(rules) {
  app_replace_rule_set_expressions_multiplicative_rules(rules);
  list_add_multiple(rules, [
    "ade > mue",
    "ade > ade ao mue",
    "ao > +",
    "ao > -",
  ]);
}
