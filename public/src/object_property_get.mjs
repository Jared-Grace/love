import { undefined_not_is_assert_lambda } from "./undefined_not_is_assert_lambda.mjs";
export function object_property_get(object, property_name) {
  let value = object[property_name];
  undefined_not_is_assert_lambda(value, object_get);
  function object_get() {
    let v = {
      object,
      property_name,
    };
    return v;
  }
  return value;
}
