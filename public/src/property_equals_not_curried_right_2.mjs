import { property_equals_not } from "../../../love/public/src/property_equals_not.mjs";
export function property_equals_not_curried_right_2(property_name, value) {
  let r = function property_equals_not_curried_right_2_result(object) {
    let ne = property_equals_not(object, property_name, value);
    return ne;
  };
  return r;
}
