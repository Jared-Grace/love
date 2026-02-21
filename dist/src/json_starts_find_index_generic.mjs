import { list_map_negative_not_min_try } from "../../../love/public/src/list_map_negative_not_min_try.mjs";
export function json_starts_find_index_generic(get, c, json) {
  let list = get();
  let r = c(json);
  let left = list_map_negative_not_min_try(list, r);
  return left;
}
