import { list_map } from "./list_map.mjs";
import { app_replace_rule_from_row } from "./app_replace_rule_from_row.mjs";
import { object_values_map } from "./object_values_map.mjs";
export function app_replace_rule_sets_fns_rules_used_from_rows(by_name) {
  "Reads the whole saved list of rules-for-a-goal back out of the short form it is stored in: an exercise by name, then one list of rules for each of its goals, then one rule.";
  "The names are put back on here rather than left off, so nothing downstream of this ever meets a row - every reader of the saved list goes on asking a rule what its left, its right and its original are.";
  function goal_rules(rows) {
    let rules = list_map(rows, app_replace_rule_from_row);
    return rules;
  }
  function set_goals(goals) {
    let expanded = list_map(goals, goal_rules);
    return expanded;
  }
  let rule_sets = object_values_map(by_name, set_goals);
  return rule_sets;
}
