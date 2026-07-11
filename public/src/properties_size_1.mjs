import { list_size_ } from "../../../love/public/src/list_size_1.mjs";
import { properties_get } from "../../../love/public/src/properties_get.mjs";
export function properties_size_(result) {
  let properties = properties_get(result);
  let s = list_size_(properties);
  return s;
}
