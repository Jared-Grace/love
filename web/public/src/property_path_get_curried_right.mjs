import { property_path_get } from "../../../love/public/src/property_path_get.mjs";
export function property_path_get_curried_right(property_names) {
  let c = function property_path_get_curried_right_result(item) {
    return property_path_get(item, property_names);
  };
  return c;
}
