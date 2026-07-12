import { object_merge_set } from "./object_merge_set.mjs";
export function app_replace_rule_set_statements_simple_abbreviation_sm(
  abbreviations,
) {
  object_merge_set(abbreviations, {
    sm: ["", "s", "tate", "m", "ent"],
  });
}
