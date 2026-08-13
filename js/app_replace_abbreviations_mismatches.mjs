import { app_replace_rule_sets } from "./app_replace_rule_sets.mjs";
import { app_replace_rule_set_abbreviations_mismatches } from "./app_replace_rule_set_abbreviations_mismatches.mjs";
import { list_map } from "./list_map.mjs";
import { list_squash } from "./list_squash.mjs";
export function app_replace_abbreviations_mismatches() {
  "Every place in the replacing app where the explanations shown beside a set of rules and the symbols those rules are spelled with fail to answer to each other.";
  let rule_sets = app_replace_rule_sets();
  let mapped = list_map(
    rule_sets,
    app_replace_rule_set_abbreviations_mismatches,
  );
  let squashed = list_squash(mapped);
  return squashed;
}
