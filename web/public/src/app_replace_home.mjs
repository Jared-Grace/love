import { app_screen_set } from "./app_screen_set.mjs";
import { each } from "./each.mjs";
import { html_button } from "./html_button.mjs";
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
    html_button(body, name2, lambda);
    function lambda() {
      const value = "rule_set";
      app_screen_set(context, value);
    }
  }
  each(rule_sets, lambda2);
}
