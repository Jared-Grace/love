import { list_empty_not_is } from "../../../love/public/src/list_empty_not_is.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { property_equals_curry_right_2 } from "../../../love/public/src/property_equals_curry_right_2.mjs";
export function list_find_property_or_null(
  list,
  property_name,
  property_value,
) {
  let filter_get = property_equals_curry_right_2;
  let filter = filter_get(property_name, property_value);
  let filtered = list_filter(list, filter);
  let n = list_empty_not_is(filtered);
  let only = null;
  if (n) {
    only = list_single(filtered);
  }
  return only;
}
