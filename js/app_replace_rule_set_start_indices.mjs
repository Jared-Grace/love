import { arguments_assert } from "./arguments_assert.mjs";
import { app_replace_rule_set_nav } from "./app_replace_rule_set_nav.mjs";
import { app_replace_rule_set_get } from "./app_replace_rule_set_get.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { storage_session_get_context } from "./storage_session_get_context.mjs";
import { list_get } from "./list_get.mjs";
import { app_replace_rule_set_rules_get } from "./app_replace_rule_set_rules_get.mjs";
import { app_replace_start_end_get } from "./app_replace_start_end_get.mjs";
import { app_replace_rule_sets_data_initialize } from "./app_replace_rule_sets_data_initialize.mjs";
import { app_replace_rule_sets_data_goal } from "./app_replace_rule_sets_data_goal.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { property_exists } from "./property_exists.mjs";
import { ternary } from "./ternary.mjs";
import { list_to_indices } from "./list_to_indices.mjs";
export function app_replace_rule_set_start_indices(context, root) {
  arguments_assert(arguments, 2);
  app_replace_rule_set_nav(context, root);
  let rs = app_replace_rule_set_get(context);
  let goals = property_get(rs, "goals");
  let goals_count = list_size(goals);
  let goal_index = storage_session_get_context(context, "goal_index");
  let goal = list_get(goals, goal_index);
  let rules_parsed = app_replace_rule_set_rules_get(rs);
  let index_selected = null;
  let start_over = null;
  let rules_used = null;
  let rule_set_name = property_get(rs, "name");
  let start_end = app_replace_start_end_get(goal);
  let end = property_get(start_end, "end");
  let data = app_replace_rule_sets_data_initialize(context);
  let g_saved = app_replace_rule_sets_data_goal(data, rule_set_name, goal);
  let history_saved = property_get_or_null(g_saved, "history");
  let resumed = false;
  if (null_not_is(history_saved)) {
    ("only resume history saved in the current {state, rule, index} shape; an older saved shape (no index) is ignored so a format change never crashes an existing player - the goal reopens unsolved and re-saves on the next solve");
    let object = list_get(history_saved, 0);
    resumed = property_exists(object, "index");
  }
  ("a goal solved in a past session resumes solved: start at the goal so success fires, and reuse the saved steps so the green proof survives a browser refresh");
  let on_false = property_get(start_end, "start");
  let start = ternary(resumed, end, on_false);
  let history = ternary(resumed, history_saved, [
    {
      state: start,
      rule: null,
      index: null,
    },
  ]);
  let div_proof = null;
  let start_indices = list_to_indices(start);
  let r = {
    goals,
    goals_count,
    goal_index,
    goal,
    rules_parsed,
    index_selected,
    start_over,
    rules_used,
    rule_set_name,
    end,
    resumed,
    start,
    history,
    div_proof,
    start_indices,
  };
  return r;
}
