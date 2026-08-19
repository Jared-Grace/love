import { arguments_assert } from "./arguments_assert.mjs";
import { app_replace_rule_set_start_indices } from "./app_replace_rule_set_start_indices.mjs";
import { property_get } from "./property_get.mjs";
export function app_replace_rule_set_goals(context, root) {
  arguments_assert(arguments, 2);
  let r4 = app_replace_rule_set_start_indices(context, root);
  let start_indices = property_get(r4, "start_indices");
  let div_proof = property_get(r4, "div_proof");
  let history = property_get(r4, "history");
  let start = property_get(r4, "start");
  let resumed = property_get(r4, "resumed");
  let end = property_get(r4, "end");
  let rule_set_name = property_get(r4, "rule_set_name");
  let rules_used = property_get(r4, "rules_used");
  let start_over = property_get(r4, "start_over");
  let index_selected = property_get(r4, "index_selected");
  let rules_parsed = property_get(r4, "rules_parsed");
  let goal = property_get(r4, "goal");
  let goal_index = property_get(r4, "goal_index");
  let goals_count = property_get(r4, "goals_count");
  let goals = property_get(r4, "goals");
  return {
    start_indices,
    div_proof,
    history,
    start,
    resumed,
    end,
    rule_set_name,
    rules_used,
    start_over,
    index_selected,
    rules_parsed,
    goal,
    goal_index,
    goals_count,
    goals,
  };
}
