import { add_1 } from "./add_1.mjs";
import { list_map_index } from "./list_map_index.mjs";
export function list_map_index_1(list, lambda$item$index) {
  function lambda(item, index) {
    let a = add_1(index);
    let r = lambda$item$index(item, a);
    return r;
  }
  let mapped = list_map_index(list, lambda);
  return mapped;
}
