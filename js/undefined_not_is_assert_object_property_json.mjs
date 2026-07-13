import { properties_get } from "./properties_get.mjs";
import { undefined_not_is_assert_lambda } from "./undefined_not_is_assert_lambda.mjs";
export function undefined_not_is_assert_object_property_json(
  value,
  object,
  property_name,
  json,
) {
  function object_get() {
    let properties = properties_get(object);
    let v = {
      property_name,
      properties,
      object,
      json,
    };
    return v;
  }
  undefined_not_is_assert_lambda(value, object_get);
}
