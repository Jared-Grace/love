import { undefined_not_is_assert_object_property } from "../../../love/public/src/undefined_not_is_assert_object_property.mjs";
export function property_set(object, property_name, value) {
  object[property_name] = value;
  return;
  undefined_not_is_assert_object_property(value, object, property_name);
}
