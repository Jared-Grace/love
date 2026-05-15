import { properties_delete } from "../../../love/public/src/properties_delete.mjs";
export function properties_delete_curried_right(properties) {
  let c = function properties_delete_curried_right_result(object) {
    return properties_delete(object, properties);
  };
  return c;
}
