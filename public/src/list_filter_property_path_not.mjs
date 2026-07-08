import { property_path_get_not } from "../../../love/public/src/property_path_get_not.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
export function list_filter_property_path_not(list, property_names, value) {
  let c = function lambda(item) {
    let result = property_path_get_not(item, property_names, value);
    return result;
  };
  let filtered = list_filter(list, c);
  return filtered;
}
