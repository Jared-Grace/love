import { list_size } from "../../../love/public/src/list_size.mjs";
import { object_properties } from "../../../love/public/src/object_properties.mjs";
export function object_properties_size(s) {
  let properties = object_properties(s);
  let size = list_size(properties);
  return size;
}
