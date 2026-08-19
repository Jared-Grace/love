import { list_single_or_null } from "./list_single_or_null.mjs";
import { list_filter } from "./list_filter.mjs";
export function list_find_or_null(list, lambda$item) {
  let filtered = list_filter(list, lambda$item);
  let found = list_single_or_null(filtered);
  return found;
}
