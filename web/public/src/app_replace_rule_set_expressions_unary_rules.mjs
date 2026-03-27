import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { app_replace_rule_set_expressions_function_calls_rules } from "../../../love/public/src/app_replace_rule_set_expressions_function_calls_rules.mjs";
export function app_replace_rule_set_expressions_unary_rules(rules) {
  app_replace_rule_set_expressions_function_calls_rules(rules);
  list_add_multiple(rules, [
    "ue > cae",
    "ue > uo ue",
    "uo > !",
    "uo > -",
    "uo > +",
    "uo > typeof",
  ]);
}
