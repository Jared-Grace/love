import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function html_component_element_get(component) {
  let value = object_property_get(component, "element");
  return value;
}
