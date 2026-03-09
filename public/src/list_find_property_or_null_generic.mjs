import { list_single } from "../../../love/public/src/list_single.mjs";
import { list_empty_not_is } from "../../../love/public/src/list_empty_not_is.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
export function list_find_property_or_null_generic(
  filter_get,
  property_name,
  property_value,
  list,
) {
  let filter = filter_get(property_name, property_value);
  let filtered = list_filter(list, filter);
  let n = list_empty_not_is(filtered);
  let only = null;
  if (n) {
    only = list_single(filtered);
  }
  return only;
}
