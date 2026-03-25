import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { app_replace_rule_set_expressions_unary_abbreviations } from "../../../love/public/src/app_replace_rule_set_expressions_unary_abbreviations.mjs";
export function app_replace_rule_set_expressions_multiplicative_abbreviations(
  abbreviations,
) {
  app_replace_rule_set_expressions_unary_abbreviations(abbreviations);
  object_merge(abbreviations, {
    mue: ["", "mu", "ltiplicative ", "e", "xpression"],
    mo: ["", "m", "ultiplicative ", "o", "perator"],
  });
}
