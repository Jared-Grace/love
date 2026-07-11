import { add_ } from "../../../love/public/src/add_1.mjs";
import { list_map_index } from "../../../love/public/src/list_map_index.mjs";
export function list_map_index_(list, lambda$item$index) {
  function lambda(item, index) {
    let a = add_(index);
    let r = lambda$item$index(item, a);
    return r;
  }
  let mapped = list_map_index(list, lambda);
  return mapped;
}
