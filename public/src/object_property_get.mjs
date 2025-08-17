import { undefined_not_is_assert_lambda } from "./undefined_not_is_assert_lambda.mjs";
import { json_to } from "./json_to.mjs";
import { error } from "./error.mjs";
import { undefined_is } from "./undefined_is.mjs";
export function object_property_get(object, property_name) {
  let value = object[property_name];
  undefined_not_is_assert_lambda(value, object_get);
  return value;
  function object_get() {
    let v = {
      object,
      property_name,
    };
    return v;
  }
}
