import { list_reduce } from "./list_reduce.mjs";
import { property_get } from "./property_get.mjs";
export function property_path_get(item, property_names) {
  let result = list_reduce(property_names, property_get, item);
  return result;
}
