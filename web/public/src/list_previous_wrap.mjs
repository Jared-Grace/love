import { list_last } from "../../../love/public/src/list_last.mjs";
import { list_previous } from "../../../love/public/src/list_previous.mjs";
import { list_first_is } from "../../../love/public/src/list_first_is.mjs";
export function list_previous_wrap(list, item) {
  let previous = null;
  let li = list_first_is(list, item);
  let on_true = list_last(list);
  let on_false = list_previous(list, item);
  let result = null;
  if (li) {
    result = on_true;
  } else {
    result = on_false;
  }
  previous = result;
  return previous;
}
