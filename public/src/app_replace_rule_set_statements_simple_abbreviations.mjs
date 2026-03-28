import { app_replace_rule_set_statements_simple_abbreviation_sm } from "../../../love/public/src/app_replace_rule_set_statements_simple_abbreviation_sm.mjs";
import { app_replace_rule_set_expressions_primary_abbreviation_ex } from "../../../love/public/src/app_replace_rule_set_expressions_primary_abbreviation_ex.mjs";
export function app_replace_rule_set_statements_simple_abbreviations(
  abbreviations,
) {
  app_replace_rule_set_expressions_primary_abbreviation_ex(abbreviations);
  app_replace_rule_set_statements_simple_abbreviation_sm(abbreviations);
}
