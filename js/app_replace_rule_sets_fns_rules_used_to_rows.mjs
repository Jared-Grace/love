import { fn_name } from "./fn_name.mjs";
import { list_map } from "./list_map.mjs";
import { app_replace_rule_row } from "./app_replace_rule_row.mjs";
import { object_values_map } from "./object_values_map.mjs";
export function app_replace_rule_sets_fns_rules_used_to_rows(rule_sets) {
  ("Puts the whole saved list of rules-for-a-goal into the short form it is stored in, the twin of ",
    fn_name("app_replace_rule_sets_fns_rules_used_from_rows"),
    ".");
  function goal_rows(rules) {
    let rows = list_map(rules, app_replace_rule_row);
    return rows;
  }
  function set_rows(goals) {
    let rows = list_map(goals, goal_rows);
    return rows;
  }
  let by_name = object_values_map(rule_sets, set_rows);
  return by_name;
}
