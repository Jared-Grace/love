import { ternary } from "../../../love/public/src/ternary.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { list_next } from "../../../love/public/src/list_next.mjs";
import { list_last_is } from "../../../love/public/src/list_last_is.mjs";
export function list_next_wrap(list, item) {
  let next = null;
  let li = list_last_is(list, item);
  next = ternary(li, list_next(list, item), list_first(list));
  return next;
}
