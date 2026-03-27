import { app_replace_rule_set_logical_expressions_abbreviations } from "../../../love/public/src/app_replace_rule_set_logical_expressions_abbreviations.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { app_replace_rule_set_logical_expressions_rules } from "../../../love/public/src/app_replace_rule_set_logical_expressions_rules.mjs";
export function app_new_rule_set_new_2() {
  const rules = [];
  app_replace_rule_set_logical_expressions_rules(rules);
  list_add(rules, "ase > le");
  let abbreviations = {};
  app_replace_rule_set_logical_expressions_abbreviations(abbreviations);
  let r = {
    name: "Assignment Expressions",
    rules: ["a > b"],
    goals: [
      {
        start: "a",
        end: "b",
      },
    ],
  };
  return r;
}
