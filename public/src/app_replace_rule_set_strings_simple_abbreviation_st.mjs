import { object_merge } from "../../../love/public/src/object_merge.mjs";
export function app_replace_rule_set_strings_simple_abbreviation_st(
  abbreviations,
) {
  object_merge(abbreviations, {
    st: ["", "st", "ring"],
  });
}
