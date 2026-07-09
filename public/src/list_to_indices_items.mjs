import { list_map_index } from "../../../love/public/src/list_map_index.mjs";
export function list_to_indices_items(list) {
  function lambda(item, index) {
    let r = {
      index,
      item,
    };
    return r;
  }
  let indicized = list_map_index(list, lambda);
  return indicized;
}
