import { app_replace } from "./app_replace.mjs";
import { each } from "./each.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { html_button } from "./html_button.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function app_replace_home({ root }) {
  let app_fn = app_replace;
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
    html_button(root, name2, lambda);
    function lambda() {
      let key = "screen";
      const value = "rule_set";
      storage_local_set(app_fn, key, value);
    }
  }
  each(rule_sets, lambda2);
}
