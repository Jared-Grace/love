import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { property_exists } from "../../../love/public/src/property_exists.mjs";
export function list_filter_property_exclude_if_exists(
  list,
  property_name,
  value,
) {
  function lambda(item) {
    let exists = property_exists(item, property_name);
    if (exists) {
      let ne = object_property_get(item, property_name) !== value;
      return ne;
    }
    let v2 = true;
    return v2;
  }
  let filtered = list_filter(list, lambda);
  return filtered;
}
