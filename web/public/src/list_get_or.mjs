import { list_get } from "../../../love/public/src/list_get.mjs";
import { list_index_is } from "../../../love/public/src/list_index_is.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function list_get_or(list, key, value_not) {
  marker("1");
  let value = value_not;
  let exists = list_index_is(list, key);
  if (exists) {
    value = list_get(list, key);
  }
  return value;
}
