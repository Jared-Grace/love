import { storage_local_set_context } from "./storage_local_set_context.mjs";
import { html_button_screen } from "./html_button_screen.mjs";
import { each } from "./each.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { html_document_body } from "./html_document_body.mjs";
export function app_replace_home(context) {
  let body = html_document_body();
  let rule_sets = [
    {
      name: "Grow",
      rules: ["a > a a"],
    },
    {
      name: "Shrink",
      rules: ["a a > a"],
    },
  ];
  function lambda2(rs) {
    let name2 = object_property_get(rs, "name");
    storage_local_set_context(context, "rule_set_index", value);
    html_button_screen(body, name2, context, "rule_set");
  }
  each(rule_sets, lambda2);
}
