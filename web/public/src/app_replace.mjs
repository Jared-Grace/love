import { html_component_element_get } from "./html_component_element_get.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { html_button_element } from "./html_button_element.mjs";
import { each } from "./each.mjs";
import { html_document_body } from "./html_document_body.mjs";
import { marker } from "./marker.mjs";
export function app_replace() {
  let body = html_document_body();
  marker("1");
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
  function lambda(rs) {
    let name2 = object_property_get(rs, "name");
    let b = html_button_element(body);
    html_text_set(b, name2);
    let element = html_component_element_get(component);
    element.on("click", lambda);
  }
  each(rule_sets, lambda);
}
