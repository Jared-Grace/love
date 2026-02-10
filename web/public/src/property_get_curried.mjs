import { property_get } from "../../../love/public/src/property_get.mjs";
export function property_get_curried(object) {
  return function property_get_curried_result(property_name) {
    return property_get(object, property_name);
  };
}
