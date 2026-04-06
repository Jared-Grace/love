import { each_index } from "../../../love/public/src/each_index.mjs";
export function each_index_1(list, lambda$item$index_1) {
  function lambda(item, index) {
    lambda$item$index_1(item, index + 1);
  }
  let r = each_index(list, lambda);
  return r;
}
