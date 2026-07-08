import { not } from "../../../love/public/src/not.mjs";
import { undefined_not_is_assert_object_property } from "../../../love/public/src/undefined_not_is_assert_object_property.mjs";
export function property_get(object, property_name) {
  if (not(property_name in object)) {
    let v = String(property_name);
    throw new Error(`Property does not exist: ${v}`);
  }
  let value = object[property_name];
  undefined_not_is_assert_object_property(value, object, property_name);
  return value;
}
