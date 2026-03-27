import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { app_replace_rule_set_expressions_relational_abbreviations } from "../../../love/public/src/app_replace_rule_set_expressions_relational_abbreviations.mjs";
export function app_replace_rule_set_expressions_equality_abbreviations(
  abbreviations,
) {
  app_replace_rule_set_expressions_relational_abbreviations(abbreviations);
  object_merge(abbreviations, {
    ee: ["", "e", "quality ", "e", "xpression"],
    eo: ["", "e", "elational ", "o", "perator"],
  });
}
