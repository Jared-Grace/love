import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { app_replace_rule_set_expressions_relational_abbreviations } from "../../../love/public/src/app_replace_rule_set_expressions_relational_abbreviations.mjs";
import { app_replace_rule_set_expressions_relational_rules } from "../../../love/public/src/app_replace_rule_set_expressions_relational_rules.mjs";
export function app_new_rule_set_new_2() {
  const rules = [];
  app_replace_rule_set_expressions_relational_rules(rules);
  let abbreviations = {};
  app_replace_rule_set_expressions_relational_abbreviations(abbreviations);
  object_merge(abbreviations, {
    ee: ["", "e", "quality ", "e", "xpression"],
    eo: ["", "e", "elational ", "o", "perator"],
  });
  let r = {
    name: "Expressions equality",
    rules,
    goals: [
      {
        start: "a",
        end: "b",
      },
    ],
  };
  return r;
}
