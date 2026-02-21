import { property_set_if_equals } from "../../../love/public/src/property_set_if_equals.mjs";
export function property_set_if_equals_curried_right_3(
  property_name,
  name_from,
  name_to,
) {
  let r2 = function property_set_if_equals_curried_right_3_result(node) {
    let r = property_set_if_equals(node, property_name, name_from, name_to);
    return r;
  };
  return r2;
}
