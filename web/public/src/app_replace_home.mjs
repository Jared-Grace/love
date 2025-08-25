import { emoji_gear } from "./emoji_gear.mjs";
import { app_screen_set } from "./app_screen_set.mjs";
import { html_button } from "./html_button.mjs";
import { app_replace_rule_sets } from "./app_replace_rule_sets.mjs";
import { each_index } from "./each_index.mjs";
import { storage_local_set_context } from "./storage_local_set_context.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function app_replace_home(context) {
  let { root } = context;
  function lambda4() {
    app_screen_set(context2, value);
  }
  let component = html_button(root, emoji_gear() + " Settings", lambda4);
  let rule_sets = app_replace_rule_sets();
  function lambda2(item, index) {
    let name2 = object_property_get(item, "name");
    html_button(root, name2, lambda);
    function lambda() {
      storage_local_set_context(context, "rule_set_index", index);
      app_screen_set(context, "rule_set");
    }
  }
  each_index(rule_sets, lambda2);
}
