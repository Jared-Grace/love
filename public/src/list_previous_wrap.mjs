import { list_last } from "../../../love/public/src/list_last.mjs";
import { list_previous } from "../../../love/public/src/list_previous.mjs";
import { list_first_is } from "../../../love/public/src/list_first_is.mjs";
export function list_previous_wrap(list, item) {
  let previous = null;
  let li = list_first_is(list, item);
  let result = null;
  if (li) {
    result = list_last(list);
  } else {
    result = list_previous(list, item);
  }
  previous = result;
  return previous;
}
