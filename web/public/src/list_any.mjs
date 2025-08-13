import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
export function list_any(list, predicate) {
  let body_block = list_filter(list, predicate);
  return list_empty_not_is(body_block);
}
