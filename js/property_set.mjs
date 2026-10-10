import { property_name_internal_not_assert_object } from "./property_name_internal_not_assert_object.mjs";
import { undefined_not_is_assert_object_property_json } from "./undefined_not_is_assert_object_property_json.mjs";
export function property_set(object, property_name, value) {
  property_name_internal_not_assert_object(object, property_name);
  undefined_not_is_assert_object_property_json(value, object, property_name, {
    hint: "the value being set shouldn't be undefined — did it fail to compute?",
  });
  object[property_name] = value;
}
