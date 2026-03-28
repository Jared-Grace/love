import { app_replace_rule_set_logical_expressions_abbreviations } from "../../../love/public/src/app_replace_rule_set_logical_expressions_abbreviations.mjs";
import { app_replace_rule_set_logical_expressions_rules } from "../../../love/public/src/app_replace_rule_set_logical_expressions_rules.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
export function app_new_rule_set_new_3() {
  const rules = [];
  app_replace_rule_set_logical_expressions_rules(rules);
  list_add_multiple(rules, ["ase > b"]);
  let abbreviations = {};
  app_replace_rule_set_logical_expressions_abbreviations(abbreviations);
  let r = {
    name: "TODO",
    rules,
    abbreviations,
    goals: [
      {
        start: "a",
        end: "b",
      },
    ],
  };
  return r;
}
