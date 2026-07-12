import { list_size } from "./list_size.mjs";
import { properties_get } from "./properties_get.mjs";
export function properties_size(s) {
  let properties = properties_get(s);
  let size = list_size(properties);
  return size;
}
