import { object_merge_set } from "./object_merge_set.mjs";
import { app_replace_rule_set_expressions_relational_abbreviations } from "./app_replace_rule_set_expressions_relational_abbreviations.mjs";
export function app_replace_rule_set_expressions_equality_abbreviations(
  abbreviations,
) {
  app_replace_rule_set_expressions_relational_abbreviations(abbreviations);
  object_merge_set(abbreviations, {
    ee: ["", "e", "quality ", "e", "xpression"],
    eo: ["", "e", "elational ", "o", "perator"],
  });
}
