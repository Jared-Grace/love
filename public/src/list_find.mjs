import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
export function list_find(list, lambda$item) {
  let filtered = list_filter(list, lambda$item);
  let found = list_single(filtered);
  return found;
}
