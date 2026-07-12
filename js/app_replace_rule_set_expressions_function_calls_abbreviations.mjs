import { app_replace_rule_set_expressions_member_and_access_abbreviations } from "./app_replace_rule_set_expressions_member_and_access_abbreviations.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
export function app_replace_rule_set_expressions_function_calls_abbreviations(
  abbreviations,
) {
  app_replace_rule_set_expressions_member_and_access_abbreviations(
    abbreviations,
  );
  let to = object_merge_set(abbreviations, {
    ce: ["", "c", "all ", "e", "xpression"],
    ag: ["", "a", "rguments ", "g", "rower"],
  });
}
