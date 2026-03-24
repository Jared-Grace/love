import { app_replace_rule_set_decimals_abbreviations_only } from "../../../love/public/src/app_replace_rule_set_decimals_abbreviations_only.mjs";
import { app_replace_rule_set_integers_abbreviations } from "../../../love/public/src/app_replace_rule_set_integers_abbreviations.mjs";
export function app_replace_rule_set_decimals_abbreviations() {
  let i = app_replace_rule_set_integers_abbreviations();
  let ab = app_replace_rule_set_decimals_abbreviations_only(i);
  return ab;
}
