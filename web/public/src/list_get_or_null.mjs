import { list_get_or } from "../../../love/public/src/list_get_or.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function list_get_or_null(list, index) {
  marker("1");
  let value = list_get_or(list, index, null);
  return value;
}
