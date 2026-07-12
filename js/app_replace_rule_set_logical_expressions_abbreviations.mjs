import { object_merge_set } from "./object_merge_set.mjs";
import { app_replace_rule_set_expressions_equality_abbreviations } from "./app_replace_rule_set_expressions_equality_abbreviations.mjs";
export function app_replace_rule_set_logical_expressions_abbreviations(
  abbreviations,
) {
  app_replace_rule_set_expressions_equality_abbreviations(abbreviations);
  object_merge_set(abbreviations, {
    le: ["", "l", "ogical ", "e", "xpression"],
    lo: ["", "l", "ogical ", "o", "perator"],
  });
}
