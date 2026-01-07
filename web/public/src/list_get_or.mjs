import { list_index_is } from "../../../love/public/src/list_index_is.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function list_get_or(obj, key, value_not) {
  marker("1");
  let value = value_not;
  let exists = list_index_is(obj, key);
  if (exists) {
    value = object_property_get(obj, key);
  }
  return value;
}
