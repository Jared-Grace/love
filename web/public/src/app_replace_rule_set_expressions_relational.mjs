import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { app_replace_rule_set_expresions_additive_abbreviations } from "../../../love/public/src/app_replace_rule_set_expresions_additive_abbreviations.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { app_replace_rule_set_expresions_additive_rules } from "../../../love/public/src/app_replace_rule_set_expresions_additive_rules.mjs";
export function app_replace_rule_set_expressions_relational() {
  const rules = [];
  app_replace_rule_set_expresions_additive_rules(rules);
  list_add_multiple(rules, ["re > ae", "re > re ro ae", "ro > <", "ro > >>"]);
  list_add(rules, "ex > re");
  let abbreviations = {};
  app_replace_rule_set_expresions_additive_abbreviations(abbreviations);
  object_merge(abbreviations, {
    re: ["", "r", "elational ", "e", "xpression"],
    ro: ["", "r", "elational ", "o", "perator"],
  });
  let r = {
    name: "Expressions relational",
    abbreviations,
    rules,
    goals: [
      {
        start: "re",
        end: "mue < mue",
      },
      {
        start: "mue < mue",
        end: "mae < mae",
      },
      {
        start: "mae < mae",
        end: "1 < 2",
      },
    ],
  };
  return r;
}
