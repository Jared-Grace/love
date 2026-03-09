import { property_equals_try } from "../../../love/public/src/property_equals_try.mjs";
export function property_equals_try_curried_right_2(
  property_name,
  property_value,
) {
  return function property_equals_try_curried_right_2_result(object) {
    return property_equals_try(object, property_name, property_value);
  };
}
