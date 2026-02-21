import { list_filter_ends_with_any } from "../../../love/public/src/list_filter_ends_with_any.mjs";
export function list_filter_ends_with(list, sufix) {
  let filtered = list_filter_ends_with_any(list, [sufix]);
  return filtered;
}
