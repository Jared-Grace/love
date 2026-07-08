import { list_reduce } from "../../../love/public/src/list_reduce.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function property_path_get(property_names, item) {
  function lambda(value, property_name) {
    let value_next = property_get(value, property_name);
    return value_next;
  }
  let result = list_reduce(property_names, lambda, item);
  return result;
}
