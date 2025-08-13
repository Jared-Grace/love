import { list_empty_is } from "./list_empty_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
export function list_all(list, lambda$item) {
  let filtered = list_filter(list, lambda$item);
  return list_size(filtered) === list_size(list);
}
