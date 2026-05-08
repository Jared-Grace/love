import { list_map_index } from "../../../love/public/src/list_map_index.mjs";
export function list_to_indices_items(list) {
  function lambda2(item, index) {
    let r2 = {
      index,
      item,
    };
    return r2;
  }
  let indicized = list_map_index(list, lambda2);
  return indicized;
}
