import { app_replace_rule_sets } from "./app_replace_rule_sets.mjs";
import { each_index } from "./each_index.mjs";
import { storage_local_set_context } from "./storage_local_set_context.mjs";
import { html_button_screen } from "./html_button_screen.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { html_document_body } from "./html_document_body.mjs";
export function app_replace_home(context) {
  let body = html_document_body();
  let rule_sets = app_replace_rule_sets();
  function lambda2(item, index) {
    let name2 = object_property_get(item, "name");
    storage_local_set_context(context, "rule_set_index", index);
    html_button_screen(body, name2, context, "rule_set");
  }
  each_index(rule_sets, lambda2);
}
