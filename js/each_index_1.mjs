import { each_index } from "./each_index.mjs";
import { text_combine } from "./text_combine.mjs";
export function each_index_1(list, lambda$item$index_1) {
  function lambda(item, index) {
    lambda$item$index_1(item, text_combine(index, 1));
  }
  let r = each_index(list, lambda);
  return r;
}
