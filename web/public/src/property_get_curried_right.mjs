import { property_get } from "../../../love/public/src/property_get.mjs";
export function property_get_curried_right(property_name) {
  let r = function property_get_curried_right_result(object) {
    let value = property_get(object, property_name);
    return value;
  };
  return r;
}
