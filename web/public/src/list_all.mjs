import { list_empty_is } from "./list_empty_is.mjs";
import { list_filter } from "./list_filter.mjs";
export function list_all(list, predicate) {
  return list_empty_is(list_filter(list, predicate));
}
