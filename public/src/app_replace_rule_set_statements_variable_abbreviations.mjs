import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { app_replace_rule_set_identifiers_simple_abbreviation_id } from "../../../love/public/src/app_replace_rule_set_identifiers_simple_abbreviation_id.mjs";
export function app_replace_rule_set_statements_variable_abbreviations(
  abbreviations,
) {
  app_replace_rule_set_identifiers_simple_abbreviation_id(abbreviations);
  object_merge(abbreviations, {
    vs: ["", "v", "ariable ", "s", "tatement"],
    vk: ["", "v", "ariable ", "k", "eyword"],
    vdg: ["", "v", "ariable ", "d", "eclaration ", "g", "rower"],
    vd: ["", "v", "ariable ", "d", "eclaration"],
  });
}
