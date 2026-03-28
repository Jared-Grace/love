import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { app_replace_rule_set_statements_simple_abbreviations } from "../../../love/public/src/app_replace_rule_set_statements_simple_abbreviations.mjs";
export function app_replace_rule_set_statements_block_abbreviations(
  abbreviations,
) {
  app_replace_rule_set_statements_simple_abbreviations(abbreviations);
  object_merge(abbreviations, {
    smg: ["", "s", "tate", "m", "ent ", "g", "rower"],
    bs: ["", "b", "lock ", "statement"],
  });
}
