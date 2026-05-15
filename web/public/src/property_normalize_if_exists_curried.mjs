import { property_normalize_if_exists } from "../../../love/public/src/property_normalize_if_exists.mjs";
export function property_normalize_if_exists_curried(object) {
  let c = function property_normalize_if_exists_curried_result(property_name) {
    let r = property_normalize_if_exists(object, property_name);
    return r;
  };
  return c;
}
