import { list_size } from "../../../love/public/src/list_size.mjs";
import { object_properties_get } from "../../../love/public/src/object_properties_get.mjs";
export function object_properties_size(s) {
  let properties = object_properties_get(s);
  let size = list_size(properties);
  return size;
}
