import { property_get } from "../../../love/public/src/property_get.mjs";
export function property_get_curried_right(property_name) {
  return function property_get_curried_right_result(object) {
    return property_get(object, property_name);
  };
}
