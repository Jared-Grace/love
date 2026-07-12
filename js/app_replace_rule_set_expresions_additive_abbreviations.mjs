import { object_merge_set } from "./object_merge_set.mjs";
import { app_replace_rule_set_expressions_multiplicative_abbreviations } from "./app_replace_rule_set_expressions_multiplicative_abbreviations.mjs";
export function app_replace_rule_set_expresions_additive_abbreviations(
  abbreviations,
) {
  app_replace_rule_set_expressions_multiplicative_abbreviations(abbreviations);
  object_merge_set(abbreviations, {
    ade: ["", "ad", "ditive ", "e", "xpression"],
    ao: ["", "a", "dditive ", "o", "perator"],
  });
}
