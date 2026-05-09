import { object_merge_set } from "../../../love/public/src/object_merge_set.mjs";
import { app_replace_rule_set_expressions_function_calls_abbreviations } from "../../../love/public/src/app_replace_rule_set_expressions_function_calls_abbreviations.mjs";
export function app_replace_rule_set_expressions_unary_abbreviations(
  abbreviations,
) {
  app_replace_rule_set_expressions_function_calls_abbreviations(abbreviations);
  object_merge_set(abbreviations, {
    ue: ["", "u", "nary ", "e", "xpression"],
    uo: ["", "u", "nary ", "o", "perator"],
  });
}
