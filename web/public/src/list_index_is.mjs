import { list_index_last } from "./list_index_last.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { marker } from "./marker.mjs";
export function list_index_is(list, index) {
  let e = list_empty_is(list);
  let v = false;
  if (e) {
    return v;
  }
  if (index < 0) {
    return v;
  }
  let result = list_index_last(list2);
  marker("1");
}
