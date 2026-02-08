import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
export function list_indices_to_items(list, indices) {
  function lambda2(index) {
    let item2 = list_get(list, index);
    return item2;
  }
  let nearby = list_map(indices, lambda2);
  return nearby;
}
