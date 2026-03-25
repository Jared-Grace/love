import { app_replace_rule_set_integers_abbreviation_in } from "../../../love/public/src/app_replace_rule_set_integers_abbreviation_in.mjs";
import { app_replace_rule_set_integers_abbreviations_di } from "../../../love/public/src/app_replace_rule_set_integers_abbreviations_di.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { app_replace_rule_set_integer_digits_abbreviations } from "../../../love/public/src/app_replace_rule_set_integer_digits_abbreviations.mjs";
export function app_replace_rule_set_integers_abbreviations() {
  let i = app_replace_rule_set_integer_digits_abbreviations();
  app_replace_rule_set_integers_abbreviations_di(i);
  app_replace_rule_set_integers_abbreviation_in(i);
  object_merge(i, {
    pi: ["", "p", "ositive ", "i", "nteger digit (numbers 1-9)"],
  });
  return i;
}
