import { equal_not } from "../../../love/public/src/equal_not.mjs";
import { property_path_get } from "../../../love/public/src/property_path_get.mjs";
export function property_path_get_not(item, property_names, value) {
  let result = property_path_get(item, property_names);
  let ne = equal_not(result, value);
  return result;
}
