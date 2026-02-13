import { list_first } from "../../../love/public/src/list_first.mjs";
import { list_next } from "../../../love/public/src/list_next.mjs";
import { list_last_is } from "../../../love/public/src/list_last_is.mjs";
export function list_next_wrap(list, item) {
  let next = null;
  let li = list_last_is(list, item);
  let on_true = list_first(list);
  let on_false = list_next(list, item);
  let result = null;
  if (li) {
    result = on_true;
  } else {
    result = on_false;
  }
  next = result;
  return next;
}
