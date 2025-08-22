import { each } from "./each.mjs";
import { object_properties } from "./object_properties.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function each_object(object, lambda) {
  function lambda2(p) {
    let value = object_property_get(object, p);
    lambda(value, p);
  }
  let list = object_properties(object);
  each(list, lambda2);
}
