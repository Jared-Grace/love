import { properties_delete } from "./properties_delete.mjs";
export function properties_delete_curried_right(properties) {
  let c = function properties_delete_curried_right_result(object) {
    let r = properties_delete(object, properties);
    return r;
  };
  return c;
}
