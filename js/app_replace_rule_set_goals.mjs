import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function app_replace_rule_set_goals(r4) {
  arguments_assert(arguments, 1);
  let index_selected = property_get(r4, "index_selected");
  let rules_parsed = property_get(r4, "rules_parsed");
  let goal = property_get(r4, "goal");
  let goal_index = property_get(r4, "goal_index");
  let goals_count = property_get(r4, "goals_count");
  let goals = property_get(r4, "goals");
  return {
    index_selected,
    rules_parsed,
    goal,
    goal_index,
    goals_count,
    goals,
  };
}
