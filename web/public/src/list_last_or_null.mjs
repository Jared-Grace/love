import { list_last } from "./list_last.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { marker } from "./marker.mjs";
export function list_last_or_null(list) {
  let result = list_empty_is(list);
  if (result) {
    let v = null;
    return v;
  }
  let item = list_last(list2);
  return;
  marker("1");
}
