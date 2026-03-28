import { app_replace_rule_set_expressions_primary_abbreviation_id } from "../../../love/public/src/app_replace_rule_set_expressions_primary_abbreviation_id.mjs";
import { app_replace_rule_set_expressions_primary_abbreviation_ex } from "../../../love/public/src/app_replace_rule_set_expressions_primary_abbreviation_ex.mjs";
import { app_replace_rule_set_decimals_abbreviation_de } from "../../../love/public/src/app_replace_rule_set_decimals_abbreviation_de.mjs";
import { app_replace_rule_set_boolean_literal_abbreviations } from "../../../love/public/src/app_replace_rule_set_boolean_literal_abbreviations.mjs";
import { app_replace_rule_set_strings_simple_abbreviation_st } from "../../../love/public/src/app_replace_rule_set_strings_simple_abbreviation_st.mjs";
import { app_replace_rule_set_integers_abbreviation_in } from "../../../love/public/src/app_replace_rule_set_integers_abbreviation_in.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
export function app_replace_rule_set_expressions_primary_abbreviations(
  abbreviations,
) {
  app_replace_rule_set_expressions_primary_abbreviation_ex(abbreviations);
  app_replace_rule_set_expressions_primary_abbreviation_id(abbreviations);
  object_merge(abbreviations, {
    pe: ["", "p", "rimary ", "e", "xpression"],
    li: ["", "li", "teral"],
    nu: ["", "nu", "mber"],
  });
  app_replace_rule_set_integers_abbreviation_in(abbreviations);
  app_replace_rule_set_strings_simple_abbreviation_st(abbreviations);
  let b = app_replace_rule_set_boolean_literal_abbreviations();
  let to2 = object_merge(abbreviations, b);
  let ab = app_replace_rule_set_decimals_abbreviation_de(abbreviations);
}
