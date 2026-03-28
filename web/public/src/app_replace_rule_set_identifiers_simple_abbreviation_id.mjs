import { object_merge } from "../../../love/public/src/object_merge.mjs";
export function app_replace_rule_set_identifiers_simple_abbreviation_id(
  abbreviations,
) {
  object_merge(abbreviations, {
    id: ["", "id", "entifier"],
  });
}
