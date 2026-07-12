import { object_merge_set } from "./object_merge_set.mjs";
import { app_replace_rule_set_identifiers_simple_abbreviation_id } from "./app_replace_rule_set_identifiers_simple_abbreviation_id.mjs";
export function app_replace_rule_set_statements_variable_abbreviations(
  abbreviations,
) {
  app_replace_rule_set_identifiers_simple_abbreviation_id(abbreviations);
  object_merge_set(abbreviations, {
    vs: ["", "v", "ariable ", "s", "tatement"],
    vk: ["", "v", "ariable ", "k", "eyword"],
    vdg: ["", "v", "ariable ", "d", "eclaration ", "g", "rower"],
    vd: ["", "v", "ariable ", "d", "eclaration"],
  });
}
