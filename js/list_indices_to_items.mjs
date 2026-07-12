import { list_get_curried } from "./list_get_curried.mjs";
import { list_map } from "./list_map.mjs";
export function list_indices_to_items(list, indices) {
  let mapper = list_get_curried(list);
  let items = list_map(indices, mapper);
  return items;
}
