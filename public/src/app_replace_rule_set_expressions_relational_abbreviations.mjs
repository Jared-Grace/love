import { object_merge_set } from "../../../love/public/src/object_merge_set.mjs";
import { app_replace_rule_set_expresions_additive_abbreviations } from "../../../love/public/src/app_replace_rule_set_expresions_additive_abbreviations.mjs";
export function app_replace_rule_set_expressions_relational_abbreviations(
  abbreviations,
) {
  app_replace_rule_set_expresions_additive_abbreviations(abbreviations);
  object_merge_set(abbreviations, {
    re: ["", "r", "elational ", "e", "xpression"],
    ro: ["", "r", "elational ", "o", "perator"],
  });
}
