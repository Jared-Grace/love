import { undefined_not_is_assert_object_property } from "./undefined_not_is_assert_object_property.mjs";
export function property_set(object, property_name, value) {
  undefined_not_is_assert_object_property(value, object, property_name);
  object[property_name] = value;
}
