import { html_data_set_test } from "../../love/js/html_data_set_test.mjs";
import { html_text_set } from "../../love/js/html_text_set.mjs";
import { app_replace_goals_generic } from "../../love/js/app_replace_goals_generic.mjs";
import { app_replace_goal_completed_initialize } from "../../love/js/app_replace_goal_completed_initialize.mjs";
import { app_replace_rule_sets_data_goal } from "../../love/js/app_replace_rule_sets_data_goal.mjs";
import { list_all } from "../../love/js/list_all.mjs";
import { app_replace_rule_sets_data_initialize } from "../../love/js/app_replace_rule_sets_data_initialize.mjs";
import { each_index } from "../../love/js/each_index.mjs";
import { app_replace_goals } from "../../love/js/app_replace_goals.mjs";
import { app_shared_button_wide } from "../../love/js/app_shared_button_wide.mjs";
import { app_replace_settings } from "../../love/js/app_replace_settings.mjs";
import { emoji_gear } from "../../love/js/emoji_gear.mjs";
import { app_shared_screen_set } from "../../love/js/app_shared_screen_set.mjs";
import { app_shared_text_body } from "../../love/js/app_shared_text_body.mjs";
import { app_replace_rule_sets } from "../../love/js/app_replace_rule_sets.mjs";
import { app_shared_screen_go } from "../../love/js/app_shared_screen_go.mjs";
import { property_get } from "../../love/js/property_get.mjs";
import { text_combine } from "../../love/js/text_combine.mjs";
export function app_replace_home(context) {
  let root = property_get(context, "root");
  function lambda4() {
    app_shared_screen_set(context, app_replace_settings);
  }
  app_shared_button_wide(
    root,
    text_combine(emoji_gear(), " Settings"),
    lambda4,
  );
  app_shared_text_body(root, "Choose a rule set");
  let d = app_replace_rule_sets_data_initialize(context);
  let rule_sets = app_replace_rule_sets();
  let completed_previous = true;
  function each_item(item, index2) {
    let rule_name = property_get(item, "name");
    let goals = property_get(item, "goals");
    function lambda2(goal) {
      let g = app_replace_rule_sets_data_goal(d, rule_name, goal);
      let value = app_replace_goal_completed_initialize(g);
      return value;
    }
    let completed_all = list_all(goals, lambda2);
    let title = app_replace_goals_generic(
      root,
      completed_all,
      completed_previous,
      index2,
      lambda,
    );
    html_data_set_test(title, rule_name);
    html_text_set(title, rule_name);
    function lambda() {
      on_click(index2);
    }
    completed_previous = completed_all;
  }
  each_index(rule_sets, each_item);
  function on_click(index) {
    app_shared_screen_go(context, "rule_set_index", index, app_replace_goals);
  }
}
