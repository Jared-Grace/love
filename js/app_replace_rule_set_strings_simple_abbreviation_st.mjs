import { object_merge_set } from "./object_merge_set.mjs";
export function app_replace_rule_set_strings_simple_abbreviation_st(
  abbreviations,
) {
  object_merge_set(abbreviations, {
    st: ["", "st", "ring"],
  });
}
