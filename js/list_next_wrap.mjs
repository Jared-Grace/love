import { list_first } from "./list_first.mjs";
import { list_next } from "./list_next.mjs";
import { list_last_is } from "./list_last_is.mjs";
export function list_next_wrap(list, item) {
  let next = null;
  let li = list_last_is(list, item);
  let result = null;
  if (li) {
    result = list_first(list);
  } else {
    result = list_next(list, item);
  }
  next = result;
  return next;
}
