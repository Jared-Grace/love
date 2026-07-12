import { list_size_1 } from "./list_size_1.mjs";
import { properties_get } from "./properties_get.mjs";
export function properties_size_1(result) {
  let properties = properties_get(result);
  let s = list_size_1(properties);
  return s;
}
