import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { app_replace_rule_set_expressions_function_calls_abbreviations } from "../../../love/public/src/app_replace_rule_set_expressions_function_calls_abbreviations.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { app_replace_rule_set_expressions_function_calls_rules } from "../../../love/public/src/app_replace_rule_set_expressions_function_calls_rules.mjs";
export function app_replace_rule_set_expressions_unary() {
  const rules = [];
  app_replace_rule_set_expressions_function_calls_rules(rules);
  list_add_multiple(rules, [
    "ue > ce",
    "ue > uo ue",
    "uo > !",
    "uo > -",
    "uo > +",
    "uo > typeof",
  ]);
  list_add(rules, "e > ue");
  let abbreviations = {};
  app_replace_rule_set_expressions_function_calls_abbreviations(abbreviations);
  object_merge(abbreviations, {
    ce: ["", "u", "nary ", "e", "xpression"],
    arg: ["", "u", "nary ", "o", "perator"],
  });
  let r = {
    name: "Expressions unary",
    rules,
    goals: [
      {
        start: "ue",
        end: "- de",
      },
      {
        start: "ue",
        end: "! true",
      },
      {
        start: "ue",
        end: "+ i",
      },
      {
        start: "ue",
        end: "typeof null",
      },
    ],
  };
  return r;
}
