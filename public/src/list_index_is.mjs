import { list_empty_is } from "./list_empty_is.mjs";
import { marker } from "./marker.mjs";
export function list_index_is(list, index) {
  let e = list_empty_is(list);
  if (e) {
    return false;
  }
  marker("1");
}
