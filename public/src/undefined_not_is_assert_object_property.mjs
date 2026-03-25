import { undefined_not_is_assert_lambda } from "../../../love/public/src/undefined_not_is_assert_lambda.mjs";
export function undefined_not_is_assert_object_property(
  value,
  object,
  property_name,
) {
  undefined_not_is_assert_lambda(value, object_get);
  function object_get() {
    let v = {
      object,
      property_name,
    };
    return v;
  }
}
