import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_index_of_curried } from "../../../love/public/src/list_index_of_curried.mjs";
export function list_map_index_of(list, items) {
  let r = list_index_of_curried(items);
  let indices = list_map(list, r);
  return indices;
}
