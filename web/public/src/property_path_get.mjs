import { list_reduce } from "../../../love/public/src/list_reduce.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function property_path_get(item, property_names) {
  let result = list_reduce(property_names, property_get, item);
  return result;
}
