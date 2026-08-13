import { app_replace_rule_set_integers_abbreviation_in } from "./app_replace_rule_set_integers_abbreviation_in.mjs";
import { app_replace_rule_set_abbreviation_di } from "./app_replace_rule_set_abbreviation_di.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
export function app_replace_rule_set_integers_abbreviations() {
  let i = {
    ig: ["", "i", "nteger ", "g", "rower"],
  };
  app_replace_rule_set_abbreviation_di(i);
  app_replace_rule_set_integers_abbreviation_in(i);
  object_merge_set(i, {
    pi: ["", "p", "ositive ", "i", "nteger digit (numbers 1-9)"],
  });
  return i;
}
