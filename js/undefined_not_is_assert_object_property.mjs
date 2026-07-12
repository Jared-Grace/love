import { properties_get } from "./properties_get.mjs";
import { undefined_not_is_assert_lambda } from "./undefined_not_is_assert_lambda.mjs";
export function undefined_not_is_assert_object_property(
  value,
  object,
  property_name,
) {
  undefined_not_is_assert_lambda(value, object_get);
  function object_get() {
    let properties = properties_get(object);
    let v = {
      property_name,
      properties,
      object,
    };
    return v;
  }
}
