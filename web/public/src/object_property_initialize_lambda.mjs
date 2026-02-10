import { not } from "../../../love/public/src/not.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { property_exists } from "../../../love/public/src/property_exists.mjs";
export function object_property_initialize_lambda(
  object,
  property_name,
  lambda,
) {
  const exists = property_exists(object, property_name);
  if (not(exists)) {
    let value_set = lambda();
    object_property_set(object, property_name, value_set);
  }
  let value = property_get(object, property_name);
  return value;
}
