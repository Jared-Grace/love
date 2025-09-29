import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
export function list_find(list, predicate) {
  let filtered = list_filter(list, predicate);
  let only = list_single(filtered);
  return only;
}
