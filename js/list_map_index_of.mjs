import { list_map } from "./list_map.mjs";
import { list_index_of_curried } from "./list_index_of_curried.mjs";
export function list_map_index_of(list, items) {
  let r = list_index_of_curried(items);
  let indices = list_map(list, r);
  return indices;
}
