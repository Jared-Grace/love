import { undefined_not_is_assert_object_property } from "../../../love/public/src/undefined_not_is_assert_object_property.mjs";
export function property_get(object, property_name) {
  let value = object[property_name];
  undefined_not_is_assert_object_property(value, object, property_name);
  return value;
}
