import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { property_exists } from "../../../love/public/src/property_exists.mjs";
export function list_filter_property_exists(list, property_name) {
  function lambda(item) {
    let exists = property_exists(item, property_name);
    return exists;
  }
  let filtered = list_filter(list, lambda);
  return filtered;
}
