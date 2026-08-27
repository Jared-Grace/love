import { property_get } from "./property_get.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
import { app_replace_settings } from "./app_replace_settings.mjs";
import { app_shared_gear_text } from "./app_shared_gear_text.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { app_shared_text_body } from "./app_shared_text_body.mjs";
import { app_replace_rule_sets_data_initialize } from "./app_replace_rule_sets_data_initialize.mjs";
import { app_replace_rule_sets } from "./app_replace_rule_sets.mjs";
import { app_replace_rule_sets_data_goal } from "./app_replace_rule_sets_data_goal.mjs";
import { app_replace_goal_completed_initialize } from "./app_replace_goal_completed_initialize.mjs";
import { list_all } from "./list_all.mjs";
import { app_shared_button_numbered_progress } from "./app_shared_button_numbered_progress.mjs";
import { html_data_set_test } from "./html_data_set_test.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { each_index } from "./each_index.mjs";
import { app_shared_screen_go_tab } from "./app_shared_screen_go_tab.mjs";
import { app_replace_goals } from "./app_replace_goals.mjs";
export function app_replace_home(context) {
  let root = property_get(context, "root");
  async function lambda4() {
    await app_shared_screen_set(context, app_replace_settings);
  }
  let text = app_shared_gear_text(" Settings");
  app_shared_button_wide(root, text, lambda4);
  app_shared_text_body(root, "Choose a rule set");
  let d = app_replace_rule_sets_data_initialize(context);
  let rule_sets = app_replace_rule_sets();
  ("what is carried down the list is whether EVERY rule set so far is finished, and the row itself works out what to carry on - so the one pointing hand lands on the lowest-numbered unfinished set even where a later one was finished first");
  let completed_all_previous = true;
  function each_item(item, index2) {
    let rule_name = property_get(item, "name");
    let goals = property_get(item, "goals");
    function lambda2(goal) {
      let g = app_replace_rule_sets_data_goal(d, rule_name, goal);
      let value = app_replace_goal_completed_initialize(g);
      return value;
    }
    let completed_all = list_all(goals, lambda2);
    let row = app_shared_button_numbered_progress(
      root,
      completed_all,
      completed_all_previous,
      index2,
      lambda,
    );
    completed_all_previous = property_get(row, "completed_all_previous_next");
    let title = property_get(row, "title");
    html_data_set_test(title, rule_name);
    html_text_set(title, rule_name);
    function lambda() {
      on_click(index2);
    }
  }
  each_index(rule_sets, each_item);
  async function on_click(index) {
    await app_shared_screen_go_tab(
      context,
      "rule_set_index",
      index,
      app_replace_goals,
    );
  }
}
