import { arguments_assert } from "./arguments_assert.mjs";
import { app_replace_rule_sets_data_goal } from "./app_replace_rule_sets_data_goal.mjs";
import { property_delete_if_exists } from "./property_delete_if_exists.mjs";
import { storage_local_transform_empty_context } from "./storage_local_transform_empty_context.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
import { app_replace_rule_set } from "./app_replace_rule_set.mjs";
export async function app_replace_rule_set_on_start_over(
  rule_set_name,
  goal,
  context,
) {
  arguments_assert(arguments, 3);
  ("start over is an explicit redo: forget this goal's saved steps so it opens unsolved again, unlike a browser refresh which keeps them");
  function forget(value) {
    let g = app_replace_rule_sets_data_goal(value, rule_set_name, goal);
    property_delete_if_exists(g, "history");
    return value;
  }
  storage_local_transform_empty_context(context, "rule_sets_data", forget);
  await app_shared_screen_set(context, app_replace_rule_set);
}
