import { list_size } from "../../../love/public/src/list_size.mjs";
import { properties_get } from "../../../love/public/src/properties_get.mjs";
export function properties_size(s) {
  let properties = properties_get(s);
  let size = list_size(properties);
  return size;
}
