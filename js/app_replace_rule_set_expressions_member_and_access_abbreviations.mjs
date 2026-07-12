import { app_replace_rule_set_expressions_primary_abbreviations } from "./app_replace_rule_set_expressions_primary_abbreviations.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
export function app_replace_rule_set_expressions_member_and_access_abbreviations(
  abbreviations,
) {
  app_replace_rule_set_expressions_primary_abbreviations(abbreviations);
  object_merge_set(abbreviations, {
    mae: ["", "m", "ember ", "a", "ccess ", "e", "xpression"],
    mlh: ["", "m", "ember access ", "l", "eft-hand expression"],
  });
}
