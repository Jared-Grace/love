import { string_pad_left_space } from "../../../love/public/src/string_pad_left_space.mjs";
import { emoji_point_right } from "../../../love/public/src/emoji_point_right.mjs";
import { html_style_set } from "../../../love/public/src/html_style_set.mjs";
import { app_replace_button_rule_style } from "../../../love/public/src/app_replace_button_rule_style.mjs";
import { html_style_background_color_set_if } from "../../../love/public/src/html_style_background_color_set_if.mjs";
import { app_replace_rule_set_highlight } from "../../../love/public/src/app_replace_rule_set_highlight.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { emoji_check } from "../../../love/public/src/emoji_check.mjs";
import { app_replace_button_home } from "../../../love/public/src/app_replace_button_home.mjs";
import { property_get_or } from "../../../love/public/src/property_get_or.mjs";
import { storage_local_initialize_context } from "../../../love/public/src/storage_local_initialize_context.mjs";
import { app_replace_lefts_rights_style } from "../../../love/public/src/app_replace_lefts_rights_style.mjs";
import { app_replace_button_rule_content } from "../../../love/public/src/app_replace_button_rule_content.mjs";
import { app_replace_rule_sets_data_goal } from "../../../love/public/src/app_replace_rule_sets_data_goal.mjs";
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
  app_replace_button_home(root, context);
  let item = app_replace_rule_set_get(context);
  let rule_name = property_get(item, "name");
  html_p_text(root, "Rule set: " + rule_name);
  let goals = property_get(item, "goals");
  let completed_previous = true;
  function each_item(goal, index) {
    let d = storage_local_initialize_context(context, "rule_sets_data", {});
    let g = app_replace_rule_sets_data_goal(d, rule_name, goal);
    let completed = property_get_or(g, "completed", false);
    let a = add_1(index) + ".";
    if (completed) {
      let e = emoji_check();
      a += string_pad_left_space(e);
    } else {
      if (false) {
      }
    }
    const condition = not(completed) && completed_previous;
    emoji_point_right();
    let start = property_get(goal, "start");
    let left = text_split_empty(start);
    let end = property_get(goal, "end");
    let right = text_split_empty(end);
    let b = app_replace_button_wide(root, "", lambda);
    app_replace_button_rule_style(b);
    let r = html_style_text_left_centered(b, a, "");
    let title = property_get(r, "title");
    html_style_set(title, "line-height", 1.5);
    let r2 = app_replace_button_rule_content(title, left, right);
    let background = app_replace_rule_set_highlight();
    html_style_background_color_set_if(condition, b, background);
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
