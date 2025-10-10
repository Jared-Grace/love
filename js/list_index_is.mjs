import { list_index_last } from "../../../love/public/src/list_index_last.mjs";
import { list_empty_is } from "../../../love/public/src/list_empty_is.mjs";
export function list_index_is(list, index) {
  let e = list_empty_is(list);
  let v = false;
  if (e) {
    return v;
  }
  if (index < 0) {
    return v;
  }
  let index_last = list_index_last(list);
  if (index > index_last) {
    return v;
  }
  let ii = true;
  return ii;
}
