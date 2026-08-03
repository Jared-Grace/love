import { add } from "./add.mjs";
import { each_index } from "./each_index.mjs";
export function each_index_1(list, lambda$item$index_) {
  function lambda(item, index) {
    let sum = add(index, 1);
    lambda$item$index_(item, sum);
  }
  let r = each_index(list, lambda);
  return r;
}
