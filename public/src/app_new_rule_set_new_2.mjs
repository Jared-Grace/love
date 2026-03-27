import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { app_replace_rule_set_expresions_additive_abbreviations } from "../../../love/public/src/app_replace_rule_set_expresions_additive_abbreviations.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { app_replace_rule_set_expresions_additive_rules } from "../../../love/public/src/app_replace_rule_set_expresions_additive_rules.mjs";
export function app_new_rule_set_new_2() {
  const rules = [];
  app_replace_rule_set_expresions_additive_rules(rules);
  list_add_multiple(rules, [
    "coe > mue",
    "coe > ae ao mue",
    "coo > <",
    "coo > >>",
  ]);
  list_add(rules, "ex > coe");
  let abbreviations = {};
  app_replace_rule_set_expresions_additive_abbreviations(abbreviations);
  object_merge(abbreviations, {
    coe: ["", "co", "mparison ", "e", "xpression"],
    coo: ["", "co", "mparison ", "o", "perator"],
  });
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
