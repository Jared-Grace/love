import { object_merge_set } from "./object_merge_set.mjs";
import { app_replace_rule_set_expressions_unary_abbreviations } from "./app_replace_rule_set_expressions_unary_abbreviations.mjs";
export function app_replace_rule_set_expressions_multiplicative_abbreviations(
  abbreviations,
) {
  app_replace_rule_set_expressions_unary_abbreviations(abbreviations);
  object_merge_set(abbreviations, {
    mue: ["", "mu", "ltiplicative ", "e", "xpression"],
    mo: ["", "m", "ultiplicative ", "o", "perator"],
  });
}
