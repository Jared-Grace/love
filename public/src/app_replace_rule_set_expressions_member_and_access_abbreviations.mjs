import { app_replace_rule_set_expressions_primary_abbreviations } from "../../../love/public/src/app_replace_rule_set_expressions_primary_abbreviations.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
export function app_replace_rule_set_expressions_member_and_access_abbreviations(
  abbreviations,
) {
  app_replace_rule_set_expressions_primary_abbreviations(abbreviations);
  object_merge(abbreviations, {
    me: ["", "m", "ember ", "a", "ccess", "e", "xpression"],
  });
}
