import { add_1 } from "../../../love/public/src/add_1.mjs";
import { list_map_index } from "../../../love/public/src/list_map_index.mjs";
export function list_map_index_1(list, lambda$item$index) {
  function lambda(item, index) {
    let a = add_1(left);
    let r = lambda$item$index(item, index);
    return r;
  }
  let mapped = list_map_index(list, lambda);
  return mapped;
}
