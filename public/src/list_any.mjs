import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
export function list_any(list, lambda$item) {
  let filtered = list_filter(list, lambda$item);
  return list_empty_not_is(filtered);
}
