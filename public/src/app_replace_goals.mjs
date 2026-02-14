import { app_replace_button_rule } from "../../../love/public/src/app_replace_button_rule.mjs";
import { each_index } from "../../../love/public/src/each_index.mjs";
import { html_style_text_left_centered } from "../../../love/public/src/html_style_text_left_centered.mjs";
import { app_replace_button_wide } from "../../../love/public/src/app_replace_button_wide.mjs";
import { add_1 } from "../../../love/public/src/add_1.mjs";
import { app_shared_screen_set } from "../../../love/public/src/app_shared_screen_set.mjs";
import { storage_local_set_context } from "../../../love/public/src/storage_local_set_context.mjs";
import { text_get } from "../../../love/public/src/text_get.mjs";
import { html_p_text } from "../../../love/public/src/html_p_text.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_replace_rule_set_get } from "../../../love/public/src/app_replace_rule_set_get.mjs";
export function app_replace_goals(context) {
  let root = property_get(context, "root");
  let item = app_replace_rule_set_get(context);
  let name = property_get(item, "name");
  html_p_text(root, "Rule set: " + name);
  let goals = property_get(item, "goals");
  function each_item(item2, index2) {
    let name2 = text_get(item2);
    let a = add_1(index2) + ".";
    let start = property_get(goal, "start");
    tss;
    let end = property_get(goal, "end");
    let r2 = app_replace_button_rule(root, left, right, lambda);
    let b = app_replace_button_wide(root, "", lambda);
    html_style_text_left_centered(b, a, name2);
    function lambda() {
      on_click(index2);
    }
  }
  each_index(goals, each_item);
  function on_click(index) {
    storage_local_set_context(context, "rule_set_index", index);
    app_shared_screen_set(context, app_replace_goals);
  }
}
