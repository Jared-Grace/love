import { list_first } from "../../../love/public/src/list_first.mjs";
import { list_next } from "../../../love/public/src/list_next.mjs";
import { list_last_is } from "../../../love/public/src/list_last_is.mjs";
export function list_next_wrap(list, chapter_code) {
  let next = null;
  let li = list_last_is(list, chapter_code);
  if (li) {
    next = list_next(list, chapter_code);
  } else {
    next = list_first(list);
  }
  return next;
}
