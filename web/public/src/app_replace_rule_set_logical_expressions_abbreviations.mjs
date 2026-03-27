import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { app_replace_rule_set_expressions_equality_abbreviations } from "../../../love/public/src/app_replace_rule_set_expressions_equality_abbreviations.mjs";
export function app_replace_rule_set_logical_expressions_abbreviations(
  abbreviations,
) {
  app_replace_rule_set_expressions_equality_abbreviations(abbreviations);
  object_merge(abbreviations, {
    le: ["", "l", "ogical ", "e", "xpression"],
    lo: ["", "l", "ogical ", "o", "perator"],
  });
}
