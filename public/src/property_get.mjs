import { undefined_not_is_assert_lambda_object_property } from "../../../love/public/src/undefined_not_is_assert_lambda_object_property.mjs";
import { property_get_try } from "../../../love/public/src/property_get_try.mjs";
export function property_get(object, property_name) {
  let value = property_get_try(object, property_name);
  undefined_not_is_assert_lambda_object_property(value, object, property_name);
  return value;
}
