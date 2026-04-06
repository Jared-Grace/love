import { list_size_1 } from "../../../love/public/src/list_size_1.mjs";
import { properties_get } from "../../../love/public/src/properties_get.mjs";
export function properties_size_1(result) {
  let properties = properties_get(result);
  let s1 = list_size_1(properties);
  return s1;
}
