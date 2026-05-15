import { properties_normalize_if_exists } from "../../../love/public/src/properties_normalize_if_exists.mjs";
export function properties_normalize_if_exists_curried_right(properties) {
  let c = function properties_normalize_if_exists_curried_right_result(object) {
    return properties_normalize_if_exists(object, properties);
  };
  return c;
}
