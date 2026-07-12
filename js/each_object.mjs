import { each } from "./each.mjs";
import { properties_get } from "./properties_get.mjs";
import { property_get } from "./property_get.mjs";
export function each_object(object, lambda$value$property) {
  function lambda(property) {
    let value = property_get(object, property);
    lambda$value$property(value, property);
  }
  let properties = properties_get(object);
  each(properties, lambda);
}
