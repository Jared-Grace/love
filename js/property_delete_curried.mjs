import { property_delete } from "./property_delete.mjs";
export function property_delete_curried(object) {
  let c = function property_delete_curried_result(property_name) {
    let r = property_delete(object, property_name);
    return r;
  };
  return c;
}
