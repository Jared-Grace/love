import { property_get } from "../../../love/public/src/property_get.mjs";
export function property_get_curried(object) {
  let r = function property_get_curried_result(property_name) {
    let value = property_get(object, property_name);
    return value;
  };
  return r;
}
