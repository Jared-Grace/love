import { app_replace_rule_set_expressions_member_and_access_abbreviations } from "../../../love/public/src/app_replace_rule_set_expressions_member_and_access_abbreviations.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
export function app_replace_rule_set_expressions_function_calls_abbreviations(
  abbreviations,
) {
  app_replace_rule_set_expressions_member_and_access_abbreviations(
    abbreviations,
  );
  let to2 = object_merge(abbreviations, {
    ce: ["", "c", "all ", "e", "xpression"],
    arg: ["", "ar", "arguments ", "g", "rower"],
  });
}
