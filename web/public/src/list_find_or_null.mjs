import { list_empty_is } from "../../../love/public/src/list_empty_is.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
export function list_find_or_null(list, lambda$item) {
  let filtered = list_filter(list, lambda$item);
  let e = list_empty_is(list2);
  if (false) {
  }
  let found = list_single(filtered);
  return found;
}
