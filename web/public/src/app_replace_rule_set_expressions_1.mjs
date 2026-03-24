import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { app_replace_rule_set_boolean_literal_abbreviations } from "../../../love/public/src/app_replace_rule_set_boolean_literal_abbreviations.mjs";
import { app_replace_rule_set_boolean_literal_rules } from "../../../love/public/src/app_replace_rule_set_boolean_literal_rules.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
export function app_replace_rule_set_expressions_1() {
  const rules = [
    "pe > id",
    "pe > li",
    "pe > ( e )",
    "li > n",
    "n > de",
    "n > i",
    "li > st",
  ];
  let b = app_replace_rule_set_boolean_literal_abbreviations();
  let abbreviations = {
    bo: ["", "bo", "oolean literal"],
    pe: ["", "p", "rimary ", "e", "xpression"],
    id: ["", "id", "entifier"],
  };
  let to2 = object_merge(abbreviations, b);
  let items = app_replace_rule_set_boolean_literal_rules();
  list_add_multiple(rules, items);
  let r = {
    name: "Expressions 1",
    abbreviations,
    rules: rules,
    goals: [
      {
        start: "pe",
        end: "b",
      },
    ],
  };
  return r;
}
