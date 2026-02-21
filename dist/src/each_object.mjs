import { each } from "../../../love/public/src/each.mjs";
import { properties_get } from "../../../love/public/src/properties_get.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function each_object(object, lambda$value$property) {
  function lambda2(property) {
    let value = property_get(object, property);
    lambda$value$property(value, property);
  }
  let properties = properties_get(object);
  each(properties, lambda2);
}
