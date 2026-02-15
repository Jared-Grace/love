import { app_replace_rule_sets_data_goal } from "../../../love/public/src/app_replace_rule_sets_data_goal.mjs";
import { storage_local_get_context } from "../../../love/public/src/storage_local_get_context.mjs";
import { app_replace_button_rule_content_styled } from "../../../love/public/src/app_replace_button_rule_content_styled.mjs";
import { app_replace_rule_set } from "../../../love/public/src/app_replace_rule_set.mjs";
import { each_index } from "../../../love/public/src/each_index.mjs";
import { html_style_text_left_centered } from "../../../love/public/src/html_style_text_left_centered.mjs";
import { app_replace_button_wide } from "../../../love/public/src/app_replace_button_wide.mjs";
import { add_1 } from "../../../love/public/src/add_1.mjs";
import { app_shared_screen_set } from "../../../love/public/src/app_shared_screen_set.mjs";
import { storage_local_set_context } from "../../../love/public/src/storage_local_set_context.mjs";
import { html_p_text } from "../../../love/public/src/html_p_text.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_replace_rule_set_get } from "../../../love/public/src/app_replace_rule_set_get.mjs";
import { text_split_empty } from "./text_split_empty.mjs";
export function app_replace_goals(context) {
  let root = property_get(context, "root");
  let item = app_replace_rule_set_get(context);
  let rule_name = property_get(item, "name");
  html_p_text(root, "Rule set: " + rule_name);
  let goals = property_get(item, "goals");
  function each_item(goal, index) {
    let a = add_1(index) + ".";
    let start = property_get(goal, "start");
    let left = text_split_empty(start);
    let end = property_get(goal, "end");
    let right = text_split_empty(end);
    let b = app_replace_button_wide(root, "", lambda);
    let r = html_style_text_left_centered(b, a, "");
    let title = property_get(r, "title");
    app_replace_button_rule_content_styled(title, left, right);
    let d = storage_local_get_context(context, "rule_sets_data", {});
    let g = app_replace_rule_sets_data_goal(d, rule_name, goal);
    property_get(g, "completed");
    function lambda() {
      on_click(index);
    }
  }
  each_index(goals, each_item);
  function on_click(index) {
    storage_local_set_context(context, "goal_index", index);
    app_shared_screen_set(context, app_replace_rule_set);
  }
}
