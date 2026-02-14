import { app_replace_lefts_rights_style } from "../../../love/public/src/app_replace_lefts_rights_style.mjs";
import { app_replace_rule_set } from "../../../love/public/src/app_replace_rule_set.mjs";
import { app_replace_button_rule_content } from "../../../love/public/src/app_replace_button_rule_content.mjs";
import { text_split_space } from "../../../love/public/src/text_split_space.mjs";
import { each_index } from "../../../love/public/src/each_index.mjs";
import { html_style_text_left_centered } from "../../../love/public/src/html_style_text_left_centered.mjs";
import { app_replace_button_wide } from "../../../love/public/src/app_replace_button_wide.mjs";
import { add_1 } from "../../../love/public/src/add_1.mjs";
import { app_shared_screen_set } from "../../../love/public/src/app_shared_screen_set.mjs";
import { storage_local_set_context } from "../../../love/public/src/storage_local_set_context.mjs";
import { html_p_text } from "../../../love/public/src/html_p_text.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_replace_rule_set_get } from "../../../love/public/src/app_replace_rule_set_get.mjs";
export function app_replace_goals(context) {
  let root = property_get(context, "root");
  let item = app_replace_rule_set_get(context);
  let name = property_get(item, "name");
  html_p_text(root, "Rule set: " + name);
  let goals = property_get(item, "goals");
  function each_item(goal, index) {
    let a = add_1(index) + ".";
    let start = property_get(goal, "start");
    let left = text_split_space(start);
    let end = property_get(goal, "end");
    let right = text_split_space(end);
    let b = app_replace_button_wide(root, "", lambda);
    let r = html_style_text_left_centered(b, a, "");
    let title = property_get(r, "title");
    let rb = app_replace_button_rule_content(title, left, right);
    app_replace_lefts_rights_style(rb, true);
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
