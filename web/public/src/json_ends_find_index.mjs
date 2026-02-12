import { json_starts_find_index_generic } from "../../../love/public/src/json_starts_find_index_generic.mjs";
import { json_ends } from "../../../love/public/src/json_ends.mjs";
export function json_ends_find_index(json) {
  let get = json_ends;
  let c = text_index_of_last_try_curried;
  let left = json_starts_find_index_generic(get, c, json);
  return left;
}
