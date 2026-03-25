import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { app_replace_rule_set_expressions_unary_abbreviations } from "../../../love/public/src/app_replace_rule_set_expressions_unary_abbreviations.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { app_replace_rule_set_expressions_unary_rules } from "../../../love/public/src/app_replace_rule_set_expressions_unary_rules.mjs";
export function app_new_rule_set_new_2() {
  const rules = [];
  app_replace_rule_set_expressions_unary_rules(rules);
  list_add(rules, "ex > mue");
  let abbreviations = {};
  app_replace_rule_set_expressions_unary_abbreviations(abbreviations);
  object_merge(abbreviations, {
    mue: ["", "mu", "ltiplicative ", "e", "xpression"],
    uo: ["", "m", "ultiplicative ", "o", "perator"],
  });
  let r = {
    name: "Expressions multiplicative",
    rules: ["mue > ue", "mue > mue mo ue", "mo > *", "mo > /"],
    goals: [
      {
        start: "a",
        end: "b",
      },
    ],
  };
  return r;
}
