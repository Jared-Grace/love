import { object_merge_set } from "./object_merge_set.mjs";
import { app_replace_rule_set_statements_block_abbreviations } from "./app_replace_rule_set_statements_block_abbreviations.mjs";
import { app_replace_rule_set_statements_variable_abbreviations } from "./app_replace_rule_set_statements_variable_abbreviations.mjs";
export function app_replace_rule_set_statements_if_abbreviations(
  abbreviations,
) {
  app_replace_rule_set_statements_variable_abbreviations(abbreviations);
  app_replace_rule_set_statements_block_abbreviations(abbreviations);
  object_merge_set(abbreviations, {
    is: ["", "i", "f ", "s", "tatement"],
  });
}
