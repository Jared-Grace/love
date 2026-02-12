import { list_min_try } from "../../../love/public/src/list_min_try.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { text_index_of_try_curried } from "../../../love/public/src/text_index_of_try_curried.mjs";
import { json_starts } from "../../../love/public/src/json_starts.mjs";
export function json_starts_find_index(json) {
  let list = json_starts();
  let r = text_index_of_try_curried(json);
  let mapped = list_map(list, r);
  let left = list_min_try(mapped);
  return left;
}
