import { list_filter } from "./list_filter.mjs";
import { list_single } from "./list_single.mjs";
export function list_find(list, filter) {
  let filtered = list_filter(list, filter);
  return list_single(filtered);
}
