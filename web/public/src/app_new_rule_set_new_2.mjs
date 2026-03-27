import { app_replace_rule_set_expresions_additive_abbreviations } from "../../../love/public/src/app_replace_rule_set_expresions_additive_abbreviations.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { app_replace_rule_set_expresions_additive_rules } from "../../../love/public/src/app_replace_rule_set_expresions_additive_rules.mjs";
export function app_new_rule_set_new_2() {
  const rules = [];
  app_replace_rule_set_expresions_additive_rules(rules);
  list_add(rules, "ex > ae");
  let abbreviations = {};
  app_replace_rule_set_expresions_additive_abbreviations(abbreviations);
  let r = {
    name: "Expressions comparison",
    abbreviations,
    rules: ["a > b"],
    goals: [
      {
        start: "a",
        end: "b",
      },
      {
        start: "a a",
        end: "b a",
      },
    ],
  };
  return r;
}
