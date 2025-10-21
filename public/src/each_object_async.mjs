import { each } from "../../../love/public/src/each.mjs";
import { object_properties } from "../../../love/public/src/object_properties.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function each_object_async(object, lambda) {
  function lambda2(property) {
    let value = object_property_get(object, property);
    lambda(value, property);
  }
  let properties = object_properties(object);
  each(properties, lambda2);
}
