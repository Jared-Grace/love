import { app_replace_rule_set_integers_abbreviation_in } from "./app_replace_rule_set_integers_abbreviation_in.mjs";
import { app_replace_rule_set_integers_abbreviations_di } from "./app_replace_rule_set_integers_abbreviations_di.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
import { app_replace_rule_set_integer_digits_abbreviations } from "./app_replace_rule_set_integer_digits_abbreviations.mjs";
export function app_replace_rule_set_integers_abbreviations() {
  let i = app_replace_rule_set_integer_digits_abbreviations();
  app_replace_rule_set_integers_abbreviations_di(i);
  app_replace_rule_set_integers_abbreviation_in(i);
  object_merge_set(i, {
    pi: ["", "p", "ositive ", "i", "nteger digit (numbers 1-9)"],
  });
  return i;
}
