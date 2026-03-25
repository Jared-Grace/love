import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { app_replace_rule_set_expressions_unary_abbreviations } from "../../../love/public/src/app_replace_rule_set_expressions_unary_abbreviations.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { app_replace_rule_set_expressions_unary_rules } from "../../../love/public/src/app_replace_rule_set_expressions_unary_rules.mjs";
export function app_replace_rule_set_expressions_multiplicative() {
  const rules = [];
  app_replace_rule_set_expressions_unary_rules(rules);
  list_add(rules, "ex > mue");
  let abbreviations = {};
  app_replace_rule_set_expressions_unary_abbreviations(abbreviations);
  object_merge(abbreviations, {
    mue: ["", "mu", "ltiplicative ", "e", "xpression"],
    mo: ["", "m", "ultiplicative ", "o", "perator"],
  });
  let r = {
    name: "Expressions multiplicative",
    rules: ["mue > ue", "mue > mue mo ue", "mo > *", "mo > /"],
    goals: [
      {
        start: "mue",
        end: "mae mo mae",
      },
    ],
  };
  return r;
}
