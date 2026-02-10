import { each } from "../../../love/public/src/each.mjs";
import { html_text_set } from "../../../love/public/src/html_text_set.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { html_element } from "../../../love/public/src/html_element.mjs";
import { object_properties_get } from "../../../love/public/src/object_properties_get.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
export function html_table(parent, list) {
  let first = list_first(list);
  let properties = object_properties_get(first);
  let component = html_element(parent, "table");
  let component2 = html_element(component, "tbody");
  function lambda(e) {
    let component3 = html_element(component2, "tr");
    function lambda2(property) {
      let component4 = html_element(component3, "td");
      let value = object_property_get(e, property);
      html_text_set(component4, value);
    }
    each(properties, lambda2);
  }
  each(list, lambda);
}
