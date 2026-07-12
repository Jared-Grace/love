import { object_merge_set } from "./object_merge_set.mjs";
import { app_replace_rule_set_statements_while_abbreviations } from "./app_replace_rule_set_statements_while_abbreviations.mjs";
export function app_replace_rule_set_statements_for_abbreviations(
  abbreviations,
) {
  app_replace_rule_set_statements_while_abbreviations(abbreviations);
  object_merge_set(abbreviations, {
    fs: ["", "f", "or ", "s", "tatement"],
  });
}
