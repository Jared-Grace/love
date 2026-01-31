import { marker } from "../../../love/public/src/marker.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { object_property_exists } from "../../../love/public/src/object_property_exists.mjs";
export function list_filter_property_if_exists(list, property_name) {
  marker("1");
  function lambda(item) {
    let exists = object_property_exists(item, property_name);
    if (false) {
    }
    return exists;
  }
  let filtered = list_filter(list, lambda);
  return filtered;
}
