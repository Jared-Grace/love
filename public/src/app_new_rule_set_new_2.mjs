import { app_replace_rule_set_expressions_equality_abbreviations } from "../../../love/public/src/app_replace_rule_set_expressions_equality_abbreviations.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { app_replace_rule_set_expressions_equality_rules } from "../../../love/public/src/app_replace_rule_set_expressions_equality_rules.mjs";
export function app_new_rule_set_new_2() {
  const rules = [];
  app_replace_rule_set_expressions_equality_rules(rules);
  list_add(rules, "ex > ee");
  let abbreviations = {};
  app_replace_rule_set_expressions_equality_abbreviations(abbreviations);
  let r = {
    name: "Logical Expressions",
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
