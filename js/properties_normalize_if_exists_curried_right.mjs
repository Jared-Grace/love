import { properties_normalize_if_exists } from "./properties_normalize_if_exists.mjs";
export function properties_normalize_if_exists_curried_right(properties) {
  let c = function properties_normalize_if_exists_curried_right_result(object) {
    let r = properties_normalize_if_exists(object, properties);
    return r;
  };
  return c;
}
