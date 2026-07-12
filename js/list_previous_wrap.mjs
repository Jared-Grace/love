import { list_last } from "./list_last.mjs";
import { list_previous } from "./list_previous.mjs";
import { list_first_is } from "./list_first_is.mjs";
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
