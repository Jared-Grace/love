import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { app_replace_rule_set_logical_expressions_abbreviations } from "../../../love/public/src/app_replace_rule_set_logical_expressions_abbreviations.mjs";
import { app_replace_rule_set_logical_expressions_rules } from "../../../love/public/src/app_replace_rule_set_logical_expressions_rules.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
export function app_new_rule_set_new_3() {
  const rules = [];
  app_replace_rule_set_logical_expressions_rules(rules);
  list_add_multiple(rules, ["ase > id = ase", "ase > le"]);
  list_add(rules, "ex > ase");
  let abbreviations = {};
  app_replace_rule_set_logical_expressions_abbreviations(abbreviations);
  object_merge(abbreviations, {
    ase: ["", "as", "signment ", "e", "xpression"],
  });
  let r = {
    name: "Expressions assignment",
    rules,
    abbreviations,
    goals: [
      {
        start: "ase",
        end: "id = ade",
      },
      {
        start: "id = ade",
        end: "id = pee",
      },
    ],
  };
  return r;
}
