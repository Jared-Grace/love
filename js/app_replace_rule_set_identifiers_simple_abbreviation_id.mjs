import { object_merge_set } from "./object_merge_set.mjs";
export function app_replace_rule_set_identifiers_simple_abbreviation_id(
  abbreviations,
) {
  object_merge_set(abbreviations, {
    id: ["", "id", "entifier"],
  });
}
