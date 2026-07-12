import { list_empty_is } from "./list_empty_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_single } from "./list_single.mjs";
export function list_find_or_null(list, lambda$item) {
  let filtered = list_filter(list, lambda$item);
  let e = list_empty_is(filtered);
  if (e) {
    return null;
  }
  let found = list_single(filtered);
  return found;
}
