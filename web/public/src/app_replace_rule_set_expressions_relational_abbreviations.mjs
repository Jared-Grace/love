import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { app_replace_rule_set_expresions_additive_abbreviations } from "../../../love/public/src/app_replace_rule_set_expresions_additive_abbreviations.mjs";
export function app_replace_rule_set_expressions_relational_abbreviations(
  abbreviations,
) {
  app_replace_rule_set_expresions_additive_abbreviations(abbreviations);
  object_merge(abbreviations, {
    re: ["", "r", "elational ", "e", "xpression"],
    ro: ["", "r", "elational ", "o", "perator"],
  });
}
