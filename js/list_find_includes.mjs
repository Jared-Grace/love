import { list_single } from "./list_single.mjs";
import { list_filter_text_includes } from "./list_filter_text_includes.mjs";
export function list_find_includes(list, object) {
  let filtered = list_filter_text_includes(list, object);
  let only = list_single(filtered);
  return only;
}
