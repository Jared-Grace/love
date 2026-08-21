import { app_replace_rule_sets_fns_rules_used_rows } from "./app_replace_rule_sets_fns_rules_used_rows.mjs";
import { app_replace_rule_sets_fns_rules_used_from_rows } from "./app_replace_rule_sets_fns_rules_used_from_rows.mjs";
export function app_replace_rule_sets_fns_rules_used() {
  "Which of an exercise's rules each of its goals actually leant on, by exercise name, one list of rules per goal in the order the goals are played.";
  "The rules themselves are stored next door in short form, three words to a rule, and put back together into whole records here - so a reader goes on asking a rule what its left, its right and its original are, and never meets a row.";
  let rows = app_replace_rule_sets_fns_rules_used_rows();
  let rule_sets = app_replace_rule_sets_fns_rules_used_from_rows(rows);
  return rule_sets;
}
