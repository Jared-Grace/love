import { list_add } from "../../../love/public/src/list_add.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { app_replace_rule_set_expressions_relational_abbreviations } from "../../../love/public/src/app_replace_rule_set_expressions_relational_abbreviations.mjs";
import { app_replace_rule_set_expressions_relational_rules } from "../../../love/public/src/app_replace_rule_set_expressions_relational_rules.mjs";
export function app_replace_rule_set_expressions_equality() {
  const rules = [];
  app_replace_rule_set_expressions_relational_rules(rules);
  list_add_multiple(rules, ["ee > re", "ee > ee === re"]);
  list_add(rules, "ex > ee");
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
        start: "ee",
        end: "mue === mue",
      },
      {
        start: "mue === mue",
        end: "mae === mae",
      },
      {
        start: "mae === mae",
        end: "pe === pe",
      },
      {
        start: "mae === mae",
        end: "nu === nu",
      },
      {
        start: "nu === nu",
        end: "1 === 1",
      },
      {
        start: "pe === pe",
        end: "( ae ao mue ) === pe",
      },
      {
        start: "( ae ao mue ) === pe",
        end: "( ue ao ue ) === pe",
      },
      {
        start: "( ue ao ue ) === pe",
        end: "( mae ao mae ) === pe",
      },
    ],
  };
  return r;
}
