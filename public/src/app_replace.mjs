import { html_clear } from "./html_clear.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { html_button } from "./html_button.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { each } from "./each.mjs";
import { html_document_body } from "./html_document_body.mjs";
import { marker } from "./marker.mjs";
export function app_replace() {
  let app_fn = app_replace;
  let body = html_document_body();
  html_clear(body);
  marker("1");
  lambda();
  function lambda() {
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
        let key = "screen";
        const value = "rule_set";
        storage_local_set(app_fn, key, value);
      }
    }
    each(rule_sets, lambda2);
  }
}
