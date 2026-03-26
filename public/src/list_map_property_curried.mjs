import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
export function list_map_property_curried(list) {
  let r = function list_map_property_curried_result(property_name) {
    let mapped = list_map_property(list, property_name);
    return mapped;
  };
  return r;
}
