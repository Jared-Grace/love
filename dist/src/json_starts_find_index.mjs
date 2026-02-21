import { json_starts_find_index_generic } from "../../../love/public/src/json_starts_find_index_generic.mjs";
import { text_index_of_try_curried } from "../../../love/public/src/text_index_of_try_curried.mjs";
import { json_starts } from "../../../love/public/src/json_starts.mjs";
export function json_starts_find_index(json) {
  let get = json_starts;
  let c = text_index_of_try_curried;
  let left = json_starts_find_index_generic(get, c, json);
  return left;
}
