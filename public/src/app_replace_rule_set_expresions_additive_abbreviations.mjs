import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { app_replace_rule_set_expressions_multiplicative_abbreviations } from "../../../love/public/src/app_replace_rule_set_expressions_multiplicative_abbreviations.mjs";
export function app_replace_rule_set_expresions_additive_abbreviations(
  abbreviations,
) {
  app_replace_rule_set_expressions_multiplicative_abbreviations(abbreviations);
  object_merge(abbreviations, {
    ade: ["", "ad", "ditive ", "e", "xpression"],
    ao: ["", "a", "dditive ", "o", "perator"],
  });
}
