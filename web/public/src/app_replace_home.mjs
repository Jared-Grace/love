import { app_replace_goal_completed_initialize } from "../../../love/public/src/app_replace_goal_completed_initialize.mjs";
import { app_replace_rule_sets_data_goal } from "../../../love/public/src/app_replace_rule_sets_data_goal.mjs";
import { list_all } from "../../../love/public/src/list_all.mjs";
import { app_replace_rule_sets_data_initialize } from "../../../love/public/src/app_replace_rule_sets_data_initialize.mjs";
import { each_index } from "../../../love/public/src/each_index.mjs";
import { html_style_text_left_centered } from "../../../love/public/src/html_style_text_left_centered.mjs";
import { add_1 } from "../../../love/public/src/add_1.mjs";
import { app_replace_goals } from "../../../love/public/src/app_replace_goals.mjs";
import { app_replace_button_wide } from "../../../love/public/src/app_replace_button_wide.mjs";
import { app_replace_settings } from "../../../love/public/src/app_replace_settings.mjs";
import { emoji_gear } from "../../../love/public/src/emoji_gear.mjs";
import { app_shared_screen_set } from "../../../love/public/src/app_shared_screen_set.mjs";
import { app_replace_rule_sets } from "../../../love/public/src/app_replace_rule_sets.mjs";
import { storage_local_set_context } from "../../../love/public/src/storage_local_set_context.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function app_replace_home(context) {
  let root = property_get(context, "root");
  function lambda4() {
    app_shared_screen_set(context, app_replace_settings);
  }
  app_replace_button_wide(root, emoji_gear() + " Settings", lambda4);
  let d = app_replace_rule_sets_data_initialize(context);
  let rule_sets = app_replace_rule_sets();
  function each_item(item, index2) {
    let goals = property_get(item, "goals");
    function lambda2(goal) {
      let g = app_replace_rule_sets_data_goal(d, rule_name, goal);
      let value = app_replace_goal_completed_initialize(g);
      return value;
    }
    let completed_all = list_all(goals, lambda2);
    let rule_name = property_get(item, "name");
    let a = add_1(index2) + ".";
    let b = app_replace_button_wide(root, "", lambda);
    html_style_text_left_centered(b, a, rule_name);
    function lambda() {
      on_click(index2);
    }
  }
  each_index(rule_sets, each_item);
  function on_click(index) {
    storage_local_set_context(context, "rule_set_index", index);
    app_shared_screen_set(context, app_replace_goals);
  }
}
