import { object_merge_set } from "../../../love/public/src/object_merge_set.mjs";
import { app_replace_rule_set_statements_block_abbreviations } from "../../../love/public/src/app_replace_rule_set_statements_block_abbreviations.mjs";
export function app_replace_rule_set_statements_while_abbreviations(
  abbreviations,
) {
  app_replace_rule_set_statements_block_abbreviations(abbreviations);
  object_merge_set(abbreviations, {
    ws: ["", "w", "hile ", "s", "tatement"],
  });
}
