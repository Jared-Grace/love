import { list_map_min_try } from "../../../love/public/src/list_map_min_try.mjs";
import { text_index_of_try_curried } from "../../../love/public/src/text_index_of_try_curried.mjs";
import { json_starts } from "../../../love/public/src/json_starts.mjs";
export function json_starts_find_index(json) {
  let get = json_starts;
  let c = text_index_of_try_curried;
  let list = get();
  let r = c(json);
  let left = list_map_min_try(list, r);
  return left;
}
