import { list_single } from "../../../love/public/src/list_single.mjs";
import { list_filter_includes } from "../../../love/public/src/list_filter_includes.mjs";
export function list_find_includes(list, object) {
  let filtered = list_filter_includes(list, object);
  let only = list_single(filtered);
  return only;
}
