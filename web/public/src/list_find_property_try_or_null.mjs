import { list_find_property_or_null_generic } from "../../../love/public/src/list_find_property_or_null_generic.mjs";
import { property_equals_curry_right_2 } from "../../../love/public/src/property_equals_curry_right_2.mjs";
export function list_find_property_try_or_null(
  list,
  property_name,
  property_value,
) {
  let filter_get = property_equals_curry_right_2;
  let r = list_find_property_or_null_generic(
    filter_get,
    property_name,
    property_value,
    list,
  );
  return r;
}
