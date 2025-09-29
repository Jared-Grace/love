import { list_last } from "../../../love/public/src/list_last.mjs";
import { list_empty_is } from "../../../love/public/src/list_empty_is.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function list_last_or_null(list) {
  let result = list_empty_is(list);
  if (result) {
    let v = null;
    return v;
  }
  let item = list_last(list);
  return item;
  marker("1");
}
