import { properties_get } from "../../../love/public/src/properties_get.mjs";
import { undefined_not_is_assert_lambda } from "../../../love/public/src/undefined_not_is_assert_lambda.mjs";
export function undefined_not_is_assert_object_property(
  value,
  object,
  property_name,
) {
  undefined_not_is_assert_lambda(value, object_get);
  function object_get() {
    let properties = properties_get(obj);
    let v = {
      object,
      properties,
      property_name,
    };
    return v;
  }
}
