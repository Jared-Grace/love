import { list_empty_is } from "./list_empty_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
export function list_any(list, predicate) {
  return list_size(list_filter(list, predicate)) === list_size(list);
}
