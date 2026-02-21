import { list_single } from "../../../love/public/src/list_single.mjs";
import { list_empty_is } from "../../../love/public/src/list_empty_is.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { property_equals_lambda } from "../../../love/public/src/property_equals_lambda.mjs";
export function list_find_property_or_null(
  list,
  property_name,
  property_value,
) {
  let filter = property_equals_lambda(property_name, property_value);
  let filtered = list_filter(list, filter);
  let e = list_empty_is(filtered);
  if (e) {
    let v = null;
    return v;
  }
  let only = list_single(filtered);
  return only;
}
