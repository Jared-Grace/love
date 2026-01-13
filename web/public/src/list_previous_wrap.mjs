import { marker } from "../../../love/public/src/marker.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { list_next } from "../../../love/public/src/list_next.mjs";
import { list_last_is } from "../../../love/public/src/list_last_is.mjs";
export function list_previous_wrap(list, item) {
  marker("1");
  let next = null;
  let li = list_last_is(list, item);
  if (li) {
    next = list_next(list, item);
  } else {
    next = list_first(list);
  }
  return next;
}
