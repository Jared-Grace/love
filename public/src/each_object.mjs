import { each } from "../../../love/public/src/each.mjs";
import { object_properties_get } from "../../../love/public/src/object_properties_get.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function each_object(object, lambda$value$property) {
  function lambda2(property) {
    let value = object_property_get(object, property);
    lambda$value$property(value, property);
  }
  let properties = object_properties_get(object);
  each(properties, lambda2);
}
