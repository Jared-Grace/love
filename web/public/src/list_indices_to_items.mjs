import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
export function list_indices_to_items(list, indices) {
  let mapper = function lambda(index) {
    let item = list_get(list, index);
    return item;
  };
  let nearby = list_map(indices, mapper);
  return nearby;
}
