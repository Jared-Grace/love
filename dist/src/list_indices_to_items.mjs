import { list_get_curried } from "../../../love/public/src/list_get_curried.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
export function list_indices_to_items(list, indices) {
  let mapper = list_get_curried(list);
  let nearby = list_map(indices, mapper);
  return nearby;
}
