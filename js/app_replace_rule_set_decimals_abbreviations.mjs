import { app_replace_rule_set_decimals_abbreviation_de } from "./app_replace_rule_set_decimals_abbreviation_de.mjs";
import { app_replace_rule_set_integers_abbreviations } from "./app_replace_rule_set_integers_abbreviations.mjs";
export function app_replace_rule_set_decimals_abbreviations() {
  let i = app_replace_rule_set_integers_abbreviations();
  let ab = app_replace_rule_set_decimals_abbreviation_de(i);
  return ab;
}
