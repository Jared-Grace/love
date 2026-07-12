import { each } from "./each.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { property_get } from "./property_get.mjs";
import { html_element } from "./html_element.mjs";
import { properties_get } from "./properties_get.mjs";
import { list_first } from "./list_first.mjs";
export function html_table(parent, list) {
  let first = list_first(list);
  let properties = properties_get(first);
  let component = html_element(parent, "table");
  let component2 = html_element(component, "tbody");
  function lambda(e) {
    let component3 = html_element(component2, "tr");
    function lambda2(property) {
      let component4 = html_element(component3, "td");
      let value = property_get(e, property);
      html_text_set(component4, value);
    }
    each(properties, lambda2);
  }
  each(list, lambda);
}
