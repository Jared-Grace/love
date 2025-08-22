import { each } from "./each.mjs";
import { object_properties } from "./object_properties.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function each_object(object, lambda) {
  each(object_properties(object), (p) => {
    let value = object_property_get(object, p);
    lambda(value, p);
  });
}
