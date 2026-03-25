import { list_add } from "../../../love/public/src/list_add.mjs";
import { app_replace_rule_set_expressions_function_calls_rules } from "../../../love/public/src/app_replace_rule_set_expressions_function_calls_rules.mjs";
export function app_replace_rule_set_expressions_unary() {
  const rules = [];
  app_replace_rule_set_expressions_function_calls_rules(rules);
  list_add(rules, "e > ce");
  let r = {
    name: "Expressions unary",
    rules: [
      "ue > ce",
      "ue > uo ue",
      "uo > !",
      "uo > -",
      "uo > +",
      "uo > typeof",
    ],
    goals: [
      {
        start: "a",
        end: "b",
      },
    ],
  };
  return r;
}
