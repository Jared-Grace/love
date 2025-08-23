import { object_property_get } from "./object_property_get.mjs";
export function html_text_set(component, name2) {
  let { element } = component;
  let element2 = object_property_get(component, "element");
  element.innerHTML = name2;
}
