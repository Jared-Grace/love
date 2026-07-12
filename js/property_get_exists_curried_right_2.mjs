import { property_get_exists } from "./property_get_exists.mjs";
export function property_get_exists_curried_right_2(
  property_name_a,
  property_name_b,
) {
  let r = function property_get_exists_curried_right_2_result(item) {
    let e = property_get_exists(item, property_name_a, property_name_b);
    return e;
  };
  return r;
}
