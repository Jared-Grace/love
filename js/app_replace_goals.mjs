import { property_path_get_2 } from "./property_path_get_2.mjs";
import { app_replace_rule_set_title } from "./app_replace_rule_set_title.mjs";
import { html_data_set_test } from "./html_data_set_test.mjs";
import { html_data_set_object } from "./html_data_set_object.mjs";
import { json_to } from "./json_to.mjs";
import { app_replace_start_end_get } from "./app_replace_start_end_get.mjs";
import { app_shared_button_numbered_progress } from "./app_shared_button_numbered_progress.mjs";
import { app_replace_goal_completed_initialize } from "./app_replace_goal_completed_initialize.mjs";
import { app_replace_rule_sets_data_initialize } from "./app_replace_rule_sets_data_initialize.mjs";
import { app_replace_button_home } from "./app_replace_button_home.mjs";
import { app_replace_lefts_rights_style } from "./app_replace_lefts_rights_style.mjs";
import { app_replace_button_rule_content } from "./app_replace_button_rule_content.mjs";
import { app_replace_rule_sets_data_goal } from "./app_replace_rule_sets_data_goal.mjs";
import { app_replace_rule_set } from "./app_replace_rule_set.mjs";
import { each_index } from "./each_index.mjs";
import { app_shared_screen_go_tab } from "./app_shared_screen_go_tab.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { html_font_color_set_if } from "./html_font_color_set_if.mjs";
export function app_replace_goals(context) {
  let root = property_get(context, "root");
  app_replace_button_home(root, context);
  let r = app_replace_rule_set_title(context);
  let rule_set_name = property_get(r, "rule_set_name");
  let goals = property_path_get_2(r, "rule_set", "goals");
  let completed_previous = true;
  let d = app_replace_rule_sets_data_initialize(context);
  function each_goal(goal, index) {
    let g = app_replace_rule_sets_data_goal(d, rule_set_name, goal);
    let completed = app_replace_goal_completed_initialize(g);
    let choose_this_next = not(completed) && completed_previous;
    let row = app_shared_button_numbered_progress(
      root,
      completed,
      completed_previous,
      index,
      lambda,
    );
    let title = property_get(row, "title");
    html_data_set_object(title, goal);
    let v = json_to(goal);
    html_data_set_test(title, v);
    let r4 = app_replace_start_end_get(goal);
    let start = property_get(r4, "start");
    let end = property_get(r4, "end");
    let r2 = app_replace_button_rule_content(title, start, end);
    app_replace_lefts_rights_style(
      r2,
      completed || choose_this_next,
      completed,
    );
    let arrow = property_get(r2, "arrow");
    html_font_color_set_if(choose_this_next, arrow, "white", "black");
    function lambda() {
      on_click(index);
    }
    completed_previous = completed;
  }
  each_index(goals, each_goal);
  async function on_click(index) {
    await app_shared_screen_go_tab(
      context,
      "goal_index",
      index,
      app_replace_rule_set,
    );
  }
}
