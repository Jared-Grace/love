import { app_replace_goals_generic } from "../../../love/public/src/app_replace_goals_generic.mjs";
import { app_replace_goal_completed_initialize } from "../../../love/public/src/app_replace_goal_completed_initialize.mjs";
import { app_replace_rule_sets_data_initialize } from "../../../love/public/src/app_replace_rule_sets_data_initialize.mjs";
import { app_replace_button_home } from "../../../love/public/src/app_replace_button_home.mjs";
import { app_replace_lefts_rights_style } from "../../../love/public/src/app_replace_lefts_rights_style.mjs";
import { app_replace_button_rule_content } from "../../../love/public/src/app_replace_button_rule_content.mjs";
import { app_replace_rule_sets_data_goal } from "../../../love/public/src/app_replace_rule_sets_data_goal.mjs";
import { app_replace_rule_set } from "../../../love/public/src/app_replace_rule_set.mjs";
import { each_index } from "../../../love/public/src/each_index.mjs";
import { app_shared_screen_set } from "../../../love/public/src/app_shared_screen_set.mjs";
import { storage_local_set_context } from "../../../love/public/src/storage_local_set_context.mjs";
import { html_p_text } from "../../../love/public/src/html_p_text.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_replace_rule_set_get } from "../../../love/public/src/app_replace_rule_set_get.mjs";
import { text_split_empty } from "./text_split_empty.mjs";
export function app_replace_goals(context) {
  let root = property_get(context, "root");
  app_replace_button_home(root, context);
  let item = app_replace_rule_set_get(context);
  let rule_name = property_get(item, "name");
  html_p_text(root, "Rule set: " + rule_name);
  let goals = property_get(item, "goals");
  let completed_previous = true;
  let d = app_replace_rule_sets_data_initialize(context);
  function each_item(goal, index) {
    let g = app_replace_rule_sets_data_goal(d, rule_name, goal);
    let completed = app_replace_goal_completed_initialize(g);
    let start = property_get(goal, "start");
    let left = text_split_empty(start);
    let end = property_get(goal, "end");
    let right = text_split_empty(end);
    let title = app_replace_goals_generic(
      completed,
      completed_previous,
      index,
      root,
      lambda,
    );
    let r2 = app_replace_button_rule_content(title, left, right);
    app_replace_lefts_rights_style(r2, completed);
    function lambda() {
      on_click(index);
    }
    completed_previous = completed;
  }
  each_index(goals, each_item);
  function on_click(index) {
    storage_local_set_context(context, "goal_index", index);
    app_shared_screen_set(context, app_replace_rule_set);
  }
}
