import { property_starts_with_property_starts_with_curried_specify_2_ } from "../../../love/public/src/property_starts_with_property_starts_with_curried_specify_2_3.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
export function list_filter_property_starts_with(list, property_name, prefix) {
  let filter = property_starts_with_property_starts_with_curried_specify_2_(
    property_name,
    prefix,
  );
  let filtered = list_filter(list, filter);
  return filtered;
}
