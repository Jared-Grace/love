import { property_set } from "../../../love/public/src/property_set.mjs";
export function property_set_curried_right_2(property_name, value) {
  return function property_set_curried_right_2_result(object) {
    return property_set(object, property_name, value);
  };
}
