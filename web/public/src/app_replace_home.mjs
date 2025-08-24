import { app_replace_rule_sets } from "./app_replace_rule_sets.mjs";
import { each_index } from "./each_index.mjs";
import { storage_local_set_context } from "./storage_local_set_context.mjs";
import { html_button_screen } from "./html_button_screen.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function app_replace_home(context) {
  let { root } = context;
  let rule_sets = app_replace_rule_sets();
  function lambda2(item, index) {
    let name2 = object_property_get(item, "name");
    storage_local_set_context(context, "rule_set_index", index);
    html_button_screen(root, name2, context, "rule_set");
  }
  each_index(rule_sets, lambda2);
}
