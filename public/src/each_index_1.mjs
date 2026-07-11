import { each_index } from "../../../love/public/src/each_index.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function each_index_(list, lambda$item$index_) {
  function lambda(item, index) {
    lambda$item$index_(item, text_combine(index, 1));
  }
  let r = each_index(list, lambda);
  return r;
}
