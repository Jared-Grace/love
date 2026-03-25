import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { app_replace_rule_set_expressions_function_calls_abbreviations } from "../../../love/public/src/app_replace_rule_set_expressions_function_calls_abbreviations.mjs";
export function app_replace_rule_set_expressions_member_and_access_abbreviations(
  abbreviations,
) {
  app_replace_rule_set_expressions_function_calls_abbreviations(abbreviations);
  object_merge(abbreviations, {
    ce: ["", "m", "ember ", "e", "xpression"],
  });
}
