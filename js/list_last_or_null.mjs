import { list_last } from "./list_last.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export function list_last_or_null(list) {
  let result = list_empty_is(list);
  if (result) {
    return null;
  }
  let item = list_last(list);
  return item;
}
