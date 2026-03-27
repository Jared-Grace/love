import { list_add } from "../../../love/public/src/list_add.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { app_replace_rule_set_expressions_relational_abbreviations } from "../../../love/public/src/app_replace_rule_set_expressions_relational_abbreviations.mjs";
import { app_replace_rule_set_expressions_relational_rules } from "../../../love/public/src/app_replace_rule_set_expressions_relational_rules.mjs";
export function app_new_rule_set_new_2() {
  const rules = [];
  app_replace_rule_set_expressions_relational_rules(rules);
  list_add_multiple(rules, ["re > ae", "re > re ro ae", "ro > <", "ro > >>"]);
  list_add(rules, "ex > re");
  let abbreviations = {};
  app_replace_rule_set_expressions_relational_abbreviations(abbreviations);
  object_merge(abbreviations, {
    ee: ["", "e", "quality ", "e", "xpression"],
    eo: ["", "e", "elational ", "o", "perator"],
  });
  let r = {
    name: "Expressions Equality",
    abbreviations,
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
